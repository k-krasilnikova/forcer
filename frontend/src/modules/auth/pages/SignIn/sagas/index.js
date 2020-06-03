import { all, put, takeEvery } from "redux-saga/effects";
import { stopSubmit } from "redux-form";
import { push } from "connected-react-router";
import get from "lodash/get";

import * as actionCreators from "../actions";
import { SIGNIN_FORM } from "../../../constants";

function* loginStart() {
  yield put(push("/maps"));
}

function* redirectToDashboard() {
  yield put(push("/"));
}

function* showError(action) {
  const { message: errorMessage } = get(action, "error.data", {});

  yield put(
    stopSubmit(SIGNIN_FORM, {
      _error: errorMessage,
    })
  );
}

export default function* watchRequest() {
  yield all([
    takeEvery(actionCreators.signinRequest, loginStart),
    takeEvery(actionCreators.signinSuccess, redirectToDashboard),
    takeEvery(actionCreators.signinFail, showError),
  ]);
}
