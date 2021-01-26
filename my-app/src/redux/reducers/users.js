const setUsers = "SET_USERS";
const deleteUser = "DELETE_USER";
const editUser = "EDIT_USER";
const selectionUser = "SELECTION_USER";

const initialState = {
    items: [],
    count: 0,
    activeUser: {}
};

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
            return {
                ...state,
                activeUser: action.payload,
            };
        }

        case editUser: {
            const newUsers = [...state.items].map((item) => {
                if (item.id === action.payload.id) {
                    return {...item, firstName: action.payload.firstName}
                }
                return item
            })

            const newActiveUser = {...state.activeUser, ...action.payload}
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