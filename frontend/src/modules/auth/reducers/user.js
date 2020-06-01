import { combineActions, handleActions } from "redux-actions";

import * as signInActionCreators from "../pages/SignIn/actions";

const defaultState = null;

export default handleActions(
  {
    [combineActions(signInActionCreators.signinSuccess)](state, action) {
      return action.response.data.user;
    }
  },
  defaultState
);
