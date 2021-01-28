import { usersAPI } from "../../api";
import {
    FETCH_USERS_FAIL,
    FETCH_USERS_START,
    FETCH_USERS_SUCCESS,

    FETCH_USER_START,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAIL,

    DELETE_USER,
    EDIT_USER,
    FOLLOW_AND_UNFOLLOW
} from "../reducers/users";

export const fetchUsersStart = (users, total) => ({
    type: FETCH_USERS_START
});
export const fetchUsersSuccess = (users, total) => ({
    type: FETCH_USERS_SUCCESS,
    payload: users,
    count: total
});
export const fetchUsersFail = (error) => ({
    type: FETCH_USERS_FAIL,
    payload: error,
});

export const fetchUserStart = () => ({
    type: FETCH_USER_START
});
export const fetchUserSuccess = (users, total) => ({
    type: FETCH_USER_SUCCESS,
    payload: users,
    count: total
});
export const fetchUserFail = (error) => ({
    type: FETCH_USER_FAIL,
    payload: error,
});

export const deleteUser = (id) => ({
    type: DELETE_USER,
    payload: id,
});

export const onEditUser = (user, toast) => ({
    type: EDIT_USER,
    payload: user,
    toast
});

export const followAndUnfollow = (id) => ({
    type: FOLLOW_AND_UNFOLLOW,
    payload: id
});

export const loadingUsers = (page) => async (dispatch) => {
    dispatch(fetchUsersStart())

    try{
        let response = await usersAPI.getUsers(page);
        dispatch(fetchUsersSuccess(response.data.data,response.data.total))
    }
    catch (e){
        dispatch(fetchUsersFail(e))
    }
};

export const loadingFullInfoUser = (id) => async (dispatch) => {
    dispatch(fetchUserStart())

    try{
        let response = await usersAPI.getUserFullProfile(id);
        dispatch(fetchUserSuccess(response.data))
    }
    catch (e){
        dispatch(fetchUserFail(e.message))
    }
};


