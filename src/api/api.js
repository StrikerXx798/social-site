import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'cfaface2-28da-4d76-88dc-dbbe029d9acd' }
});

export const getUsers = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
}
