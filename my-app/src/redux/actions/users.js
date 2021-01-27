import { usersAPI } from "../../api";

export const setLoading = () => ({
    type: "SET_LOADING",
});

export const setUsers = (users,total) => ({
    type: "SET_USERS",
    payload: users,
    count: total
});

export const deleteUser = (id) => ({
    type: "DELETE_USER",
    payload: id,
});

export const selectionUser = (fullInfoUser) => ({
    type: "SELECTION_USER",
    payload: fullInfoUser,
});

export const onEditUser = (user) => ({
    type: "EDIT_USER",
    payload: user,
});

export const loadingUsers = (page) => async (dispatch) => {
    dispatch(setLoading())

    try{
        let response = await usersAPI.getUsers(page);
        dispatch(setUsers(response.data.data,response.data.total))
    }
    catch (e){
        console.log(e)
    }
    finally {
        dispatch(setLoading())
    }
};

export const loadingFullInfoUser = (id) => async (dispatch) => {
    dispatch(setLoading())

    try{
        let response = await usersAPI.getUserFullProfile(id);
        dispatch(selectionUser(response.data))
    }
    catch (e){
        console.log(e)
    }
    finally {
        dispatch(setLoading())
    }
};


