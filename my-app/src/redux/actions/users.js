import { usersAPI } from "../../api";

export const setUsers = (users) => ({
    type: "SET_USERS",
    payload: users,
});

export const deleteUser = (id) => ({
    type: "DELETE_USER",
    payload: id,
});

export const selectionUser = (id) => ({
    type: "SELECTION_USER",
    payload: id,
});

export const onEditUser = (user) => ({
    type: "EDIT_USER",
    payload: user,
});

export const loadingUsers = () => async (dispatch) => {
    try{
        let response = await usersAPI.getUsers();
        dispatch(setUsers(response.data.data))
    }
    catch (e){
        console.log(e)
    }
};
