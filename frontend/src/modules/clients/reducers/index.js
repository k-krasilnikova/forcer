import { combineReducers } from "redux";

import users from "../pages/Users/reducers";
import userDetails from "../pages/UserDetails/reducers";

const reducer = combineReducers({ users, userDetails });

export default reducer;
