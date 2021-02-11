import axios from "axios";

import store from "../redux/store"
import {logOut} from "../redux/actions/user";

const instance = axios.create({
    baseURL: "https://limitless-citadel-18990.herokuapp.com/api/auth",
    headers: {
        "app-id": process.env.REACT_APP_API_ID,
    },
});

instance.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        return config
    }
)

instance.interceptors.response.use(
    (response) =>{
        return response
    },
    (error) => {
        if (error.response.status === 403){
            store.dispatch(logOut())
        }
    }
)

export const usersAPI = {
    getUsers(page) {
        return instance.get(
            `user?page=${page}&limit=20`, {}
        );
    },
    getUserFullProfile(id) {
        return instance.get(
            `user/${id}`, {}
        );
    }
}

export const userAPI = {
    singIn(username, password) {
        return instance.post(
            `sign-in`, {
                username,
                password
            }
        );
    }
}