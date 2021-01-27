import axios from "axios";

const instance = axios.create({
    baseURL: "https://dummyapi.io/data/api/",
    headers: {
        "app-id" : process.env.REACT_APP_API_ID
    },
});

export const usersAPI = {
    getUsers(page) {
        return instance.get(
            `user?page=${page}&limit=20`
        );
    },
    getUserFullProfile(id)  {
        return instance.get(
            `user/${id}`
        );
    }
}