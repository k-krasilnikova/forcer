import { combineActions, handleActions } from "redux-actions";

import * as signInActionCreators from "../pages/SignIn/actions";

const defaultState = false;

export default handleActions(
  {
    [combineActions(signInActionCreators.signinSuccess)]() {
      return true;
    }
  },
  defaultState
);
