import createAction from "redux-actions/es/createAction";

export const signinRequest = createAction("SIGNIN_REQUEST");
export const signinSuccess = createAction("SIGNIN_SUCCESS");
export const signinFail = createAction("SIGNIN_FAIL");
