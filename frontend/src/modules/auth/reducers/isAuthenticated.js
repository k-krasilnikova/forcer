import { combineActions, handleActions } from "redux-actions";

import * as signInActionCreators from "../pages/SignIn/actions";
import * as actionCreators from "../actions";

const defaultState = false;

export default handleActions(
  {
    [combineActions(signInActionCreators.signinSuccess)]() {
      return true;
    },
    [combineActions(actionCreators.logout)]() {
      return defaultState;
    },
  },
  defaultState
);
