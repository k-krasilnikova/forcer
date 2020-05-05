import { combineReducers } from "redux";

import token from "./token";
import user from "./user";
import refreshToken from "./refreshToken";
import isAuthenticated from "./isAuthenticated";
// import signIn from "../pages/SignIn/reducers";

const reducer = combineReducers({
  isAuthenticated,
  user,
  token,
  refreshToken,
  // signIn,
});

export default reducer;
