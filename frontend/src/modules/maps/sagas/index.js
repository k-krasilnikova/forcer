import { all } from "redux-saga/effects";

// import feedSaga from "../pages/Feed/sagas";
// import feedDetailsSaga from "../pages/FeedDetails/sagas";

function* authSaga() {
  yield all([
    // feedSaga(),
    // feedDetailsSaga()
  ]);
}

export default authSaga;
