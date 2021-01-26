import { usersAPI } from "../../api";

export const setUsers = (users) => ({
    type: "SET_USERS",
    payload: users,
});

export const deleteUser = (id) => ({
    type: "DELETE_USER",
    payload: id,
});

export const loadingUsers = () => async (dispatch) => {
    try{
        let resposne = await usersAPI.getUsers();
        dispatch(setUsers(resposne.data.data))
    }
    catch (e){
        console.log(e)
    }
};
