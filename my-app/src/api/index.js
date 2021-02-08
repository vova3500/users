import axios from "axios";

const instance = axios.create({
    baseURL: "https://limitless-citadel-18990.herokuapp.com/api/auth",
    headers: {
        "app-id": process.env.REACT_APP_API_ID,
    },
});

export const usersAPI = {
    getUsers(page) {
        return instance.get(
            `user?page=${page}&limit=20`, {
                headers: {
                    "app-id": process.env.REACT_APP_API_ID,
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
        );
    },
    getUserFullProfile(id) {
        return instance.get(
            `user/${id}`, {
                headers: {
                    "app-id": process.env.REACT_APP_API_ID,
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
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