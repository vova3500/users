import { usersAPI } from "../../api";

export const setUsers = (users) => ({
    type: "SET_USERS",
    payload: users,
});

export const loadingUsers = () => async (dispatch) => {
    try{
        let resposne = await usersAPI.getUsers();
        console.log(resposne)

    }
    catch (e){
        console.log(e)
    }
};
