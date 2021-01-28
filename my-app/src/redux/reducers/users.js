import {getCurrentAge} from "../../utils/helpers"

export const DELETE_USER = "DELETE_USER";
export const EDIT_USER = "EDIT_USER";

export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAIL = "FETCH_USER_FAIL";

export const FETCH_USERS_START = "FETCH_USERS_START";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAIL = "FETCH_USERS_FAIL";

const initialState = {
    items: [],
    count: 0,
    activeUser: {},
    loading: false,
    error: ""
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_START: {
            return {
                ...state,
                loading: true
            }
        }
        case FETCH_USERS_SUCCESS: {
            const newUsers = [...action.payload].map((item) => ({...item, isFrend: false}))
            return {
                ...state,
                items: newUsers,
                count: action.count,
                loading: false
            };
        }
        case FETCH_USERS_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }

        case FETCH_USER_START: {
            return {
                ...state,
                loading: true
            }
        }
        case FETCH_USER_SUCCESS: {
            let age = getCurrentAge(action.payload.dateOfBirth)

            return {
                ...state,
                activeUser: {...action.payload, age},
                loading: false
            };
        }
        case FETCH_USER_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }

        case DELETE_USER: {
            const newUsers = [...state.items].filter((item) => action.payload !== item.id)
            return {
                ...state,
                items: newUsers,
            };
        }

        case EDIT_USER: {
            const newUsers = [...state.items].map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        firstName: action.payload.firstName,
                        lastName: action.payload.lastName,
                        email: action.payload.email
                    }
                }
                return item
            })

            const newYear = new Date().getFullYear() - action.payload.age
            const copyMonthAndDay = action.payload.dateOfBirth.slice(5, 10)
            const newDate = `${newYear}-${copyMonthAndDay}`

            const newActiveUser = {...state.activeUser, ...action.payload, dateOfBirth: newDate}

            action.toast()

            return {
                ...state,
                items: newUsers,
                activeUser: newActiveUser
            };
        }

        default: {
            return state;
        }
    }
}
export default users