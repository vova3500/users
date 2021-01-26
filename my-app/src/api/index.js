import axios from "axios";

const instance = axios.create({
    baseURL: "https://dummyapi.io/data/api/",
    headers: {
        "app-id" : "600e739f13a03c472602777d",
    },
});

export const usersAPI = {
    getUsers(page) {
        return instance.get(
            `user?page=${page}&limit=20`
        );
    },
}