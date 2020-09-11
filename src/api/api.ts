import axios from "axios";
import { DialogMessage, DialogType, PhotosType, ProfileType, UserType} from "../types/types";
import {number} from "prop-types";

export type CommonResponseType = {
    data: {}
    messages: Array<string>
    resultCode: number
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'cfaface2-28da-4d76-88dc-dbbe029d9acd'
    }
});

type GetUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
};
export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post<CommonResponseType>(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId: number) {
        return instance.delete<CommonResponseType>(`follow/${userId}`).then(response => response.data)
    },
};


type savePhotoResponseType = CommonResponseType & {
    data: {
        photos: PhotosType
    }
};
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
            .then(response => {
                return response.data
            });
    },
    updateStatus(status: string) {
        return instance.put<CommonResponseType>('/profile/status', {status}).then(response => response.data);
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put<savePhotoResponseType>('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data);
    },
    saveProfile(profile: ProfileType) {
        return instance.put<CommonResponseType>('/profile', profile).then(res => res.data)
    }

};

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10,
}


type MeResponseType = {
    data: {
        id: number,
        email: string,
        login: string,
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
};
type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodesEnum | ResultCodeForCaptcha
    messages: Array<string>
}
type DeleteResponseType = {
    resultCode: ResultCodesEnum
    messages: Array<string>
    data: {}
}
export const authAPI = {
    me() {
        return instance.get<MeResponseType>("auth/me")
            .then(response => response.data);
    },
    login(email: string, password: string, rememberMe: boolean, captcha: null | string = null) {
        return instance.post<LoginResponseType>("auth/login", {email, password, rememberMe, captcha})
            .then(response => response.data);
    },
    logout() {
        return instance.delete<DeleteResponseType>("auth/login").then(response => response.data);
    },
};


type GetCaptchaURLResponseType = {
    url: string
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.delete<GetCaptchaURLResponseType>("security/get-captcha-url")
            .then(res => {
                return res.data
            })
    },
};

type GetMessagesResponseType = {
    error: null | string
    items: Array<DialogMessage>
    totalCount: number
}

export const dialogsAPI = {
    getDialogs() {
        return instance.get<Array<DialogType>>("dialogs").then(res => res.data)
    },
    startDialog(userId: number) {
        return instance.put<CommonResponseType>(`dialogs/${userId}`).then(res => res.data)
    },
    getMessages(userId: number) {
        return instance.get<GetMessagesResponseType>(`dialogs/${userId}/messages`).then(res => {
                return {
                    messages: res.data.items,
                    totalCount: res.data.totalCount
                }
            }
        )
    },
    sendMessage(userId: number, body: string) {
        return instance.post<CommonResponseType>(`dialogs/${userId}/messages`, {body}).then(res => res.data)
    },
    getNewMessagesCount() {
        return instance.get<number>('dialogs/messages/new/count')
            .then(res => res.data);
    },
    getMessagesNewerThenLast(userId: number, date: string) {
        return instance.get<Array<DialogMessage>>(`dialogs/${userId}/messages/new?newerThen=${date}`)
            .then(res => res.data);
    },
    /*
    checkOnViewed(messageId: string) {
        return instance.get(`dialogs/messages/${messageId}/viewed`).then(res => res.data);
    },*/
    deleteMessageForOwner(messageId: string) {
        return instance.delete<CommonResponseType>(`dialogs/messages/${messageId}`)
            .then(res => res.data);
    },
    restoreMessage(messageId: string) {
        return instance.put<CommonResponseType>(`dialogs/messages/${messageId}/restore`)
            .then(res => res.data);
    },
    addToSpam(messageId: string) {
        return instance.post<CommonResponseType>(`dialogs/messages/${messageId}/spam`)
            .then(res => res.data);
    },
};

