const setUsers = "SET_USERS";
const deleteUser = "DELETE_USER";

const initialState = {
    items: []
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case setUsers: {
            return {
                ...state,
                items: action.payload,
            };
        }

        case deleteUser: {
            const newUsers = [...state.items].filter((item) => action.payload !== item.id)
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