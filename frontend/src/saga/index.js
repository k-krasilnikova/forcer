import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";

import apiCallsSaga from "api/sagas";
import authSaga from "modules/auth/sagas";

export const createSagaInjector = runSaga => {
  const injectedSagas = new Map();
  const isInjected = key => injectedSagas.has(key);
  const injectSaga = (key, saga) => {
    if (isInjected(key)) return;
    const task = runSaga(saga);
    injectedSagas.set(key, task);
  };
  return injectSaga;
};

function* rootSaga() {
  yield all([apiCallsSaga(), authSaga()]);
}

export default rootSaga;
