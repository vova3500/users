const setUsers = "SET_USERS";
const deleteUser = "DELETE_USER";
const editUser = "EDIT_USER";
const selectionUser = "SELECTION_USER";

const initialState = {
    items: [],
    count: 0,
    editUser: 0
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
                editUser: action.payload,
            };
        }

        case editUser: {
            const newUsers = [...state.items].map((item) => {
                if (item.id === action.payload.id) {
                    let newUser = {...item,...action.payload}
                    return newUser
                }
                return item
            })
            return {
                ...state,
                items: newUsers,
            };
        }



        default: {
            return state;
        }
    }
}
export default users