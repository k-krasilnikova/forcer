import { combineActions, handleActions } from "redux-actions";

import * as signInActionCreators from "../pages/SignIn/actions";
import * as actionCreators from "../actions";

const defaultState = null;

export default handleActions(
  {
    [combineActions(signInActionCreators.signinSuccess)](state, action) {
      return action.response.data.refreshToken;
    },
    [combineActions(actionCreators.logout)]() {
      return defaultState;
    },
  },
  defaultState
);
