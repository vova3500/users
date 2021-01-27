const setUsers = "SET_USERS";
const deleteUser = "DELETE_USER";
const editUser = "EDIT_USER";
const selectionUser = "SELECTION_USER";

const initialState = {
    items: [],
    count: 0,
    activeUser: {}
};

const getCurrentAge = (date) =>{
    return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case setUsers: {
            return {
                ...state,
                items: action.payload,
                count: action.count
            };
        }

        case deleteUser: {
            const newUsers = [...state.items].filter((item) => action.payload !== item.id)
            return {
                ...state,
                items: newUsers,
            };
        }

        case selectionUser: {
            let age = getCurrentAge(action.payload.dateOfBirth)

            return {
                ...state,
                activeUser: {...action.payload, age},
            };
        }

        case editUser: {
            const newUsers = [...state.items].map((item) => {
                if (item.id === action.payload.id) {
                    return {...item,
                        firstName: action.payload.firstName,
                        lastName: action.payload.lastName,
                        email: action.payload.email
                    }
                }
                return item
            })

            const newYear = new Date().getFullYear() - action.payload.age
            const copyMonthAndDey = action.payload.dateOfBirth.slice(5,10)
            const newDate = `${newYear}-${copyMonthAndDey}`

            const newActiveUser = {...state.activeUser, ...action.payload, dateOfBirth:newDate}

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