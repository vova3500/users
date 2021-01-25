import axios from "axios";

const instance = axios.create({
    baseURL: "https://dummyapi.io/data/api/",
    headers: {

        "app-id" : "600e739f13a03c472602777d",
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    },
});

export const usersAPI = {
    getUsers() {
        return instance.get(
            "user"
        );
    },
}