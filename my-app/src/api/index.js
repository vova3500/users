import axios from "axios";

const instance = axios.create({
    baseURL: "https://dummyapi.io/data/api/",
    headers: {
        "app-id" : "lTE5abbDxdjGplutvTuc",
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