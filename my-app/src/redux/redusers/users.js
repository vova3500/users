const setUsers = "SET_USERS";

const initialState = {
    users: []
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case setUsers: {
            return {
                ...state,
                users: action.payload,
            };
        }

        default: {
            return state;
        }
    }
}
export default users