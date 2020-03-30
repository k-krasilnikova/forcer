import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";

// import apiCallsSaga from 'modules/api/sagas';

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
  yield all([
    //   apiCallsSaga()
  ]);
}

export default rootSaga;
