import { all } from "redux-saga/effects";

// import usersSaga from "../pages/Users/sagas";
// import userDetailsSaga from "../pages/userDetails/sagas";

function* authSaga() {
  yield all([
    // usersSaga(),
    // userDetailsSaga()
  ]);
}

export default authSaga;
