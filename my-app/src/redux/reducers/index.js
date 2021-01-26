import { combineReducers } from "redux";

import users from "./users";

const rootReduser = combineReducers({
    users,
});

export default rootReduser;