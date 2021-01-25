const setUsers = "SET_USERS";

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

        default: {
            return state;
        }
    }
}
export default users