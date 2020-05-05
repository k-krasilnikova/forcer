import { all } from "redux-saga/effects";

import signinSaga from "../pages/SignIn/sagas";

function* authSaga() {
  yield all([signinSaga()]);
}

export default authSaga;
