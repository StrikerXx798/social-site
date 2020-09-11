import {profileAPI, ResultCodesEnum} from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {ActionsTypes, AppStateType} from "./redux-store";



let initialState = {
    postsData: [
        {
            id: 0,
            message: 'Hi, how are you',
            likesCount: 5,
            img: "https://yt3.ggpht.com/a/AGF-l78XZgyutXUlON-U4sTy-EwaZoBJXrqGvQ2kxg=s900-c-k-c0xffffffff-no-rj-mo"
        },
        {
            id: 1,
            message: 'It\'s my first post',
            likesCount: 20,
            img: "https://yt3.ggpht.com/a/AGF-l78XZgyutXUlON-U4sTy-EwaZoBJXrqGvQ2kxg=s900-c-k-c0xffffffff-no-rj-mo"
        }
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
};

export type InitialStateType  = typeof initialState

const profileReducer = (state = initialState, action: ProfileReducerActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD_POST':
            let newPost = {
                id: state.postsData.length,
                message: action.newPostText,
                likesCount: 0,
                img: "https://yt3.ggpht.com/a/AGF-l78XZgyutXUlON-U4sTy-EwaZoBJXrqGvQ2kxg=s900-c-k-c0xffffffff-no-rj-mo"
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };
        case 'SET_USER_PROFILE':
            return {
                ...state, profile: action.profile
            };
        case 'SET_STATUS':
            return {
                ...state, status: action.status
            };
        case 'DELETE_POST':
            return {
                ...state, postsData: state.postsData.filter(post => post.id.toString() !== action.postId)
            };
        case 'SAVE_PHOTO_SUCCESS':
            return {
                ...state, profile: {...state.profile, photos: action.photos} as ProfileType
            };
        case 'UPDATE_POST':
            return {
                ...state, postsData: state.postsData.map(p=>{
                    if(p.id.toString()===action.postId) return {...p, message: action.message};
                    else return p;
                })
            };
        default:
            return state;
    }

};

export const getUserProfile = (userId: number): ThunkType => async (dispatch: any) => {
    let data = await profileAPI.getProfile(userId);
    dispatch(profileReducerActionCreators.setUserProfile(data));
};

export const getStatus = (userId: number): ThunkType => async (dispatch: any) => {
    let status = await profileAPI.getStatus(userId);
    dispatch(profileReducerActionCreators.setStatus(status))

};

export const updateStatus = (status: string): ThunkType => async (dispatch: any) => {
        let response = await profileAPI.updateStatus(status);
        if (response.resultCode === ResultCodesEnum.Success) dispatch(profileReducerActionCreators.setStatus(status))
};

export const savePhoto = (file: any): ThunkType => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file);
    if (response.resultCode === ResultCodesEnum.Success) dispatch(profileReducerActionCreators.sevePhotoSuccess(response.data.photos))
};
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    let data = await profileAPI.saveProfile(profile);
     /*  debugger;*/
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(getUserProfile(userId));
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : "Some error";
        /*debugger;*/
        if (message !== "Some error") {
            // @ts-ignore
            message = message.split("->");
            message = message[1].toLocaleLowerCase();
            message = message.slice(0, message.length - 1);
            dispatch(stopSubmit("profile-data",  {
                    // @ts-ignore
                                                                    "contacts": {[message]:response.data.messages[0]}
                                                                })
                    );
        } else {
            // @ts-ignore
            dispatch(stopSubmit("profile-data", message));
        }
        // @ts-ignore
        return Promise.reject(response.data.messages[0]);
    }
};

export default profileReducer;

type ProfileReducerActionsTypes = ActionsTypes<typeof profileReducerActionCreators>

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ProfileReducerActionsTypes>;

export const profileReducerActionCreators = {
 addPost : (newPostText: string) => ({type: 'ADD_POST', newPostText} as const),
 deletePost : (postId: string) => ({type: 'DELETE_POST', postId} as const),
 setUserProfile : (profile: ProfileType) => ({type: 'SET_USER_PROFILE', profile} as const),
 setStatus : (status: string) => ({type: 'SET_STATUS', status} as const),
 sevePhotoSuccess : (photos: PhotosType) => ({type: 'SAVE_PHOTO_SUCCESS', photos} as const),
    updatePost: (postId: string, message: string) =>
        ({type: 'UPDATE_POST', postId, message} as const),
};
