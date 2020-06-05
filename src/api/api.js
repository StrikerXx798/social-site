import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'cfaface2-28da-4d76-88dc-dbbe029d9acd' }
});

export const usersAPI = {
    getUser (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userid){
        return instance.post(`follow/${userid}`, {},)
    },
    unfollow(userid){
        return instance.delete(`follow/${userid}`);
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status})
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
}


