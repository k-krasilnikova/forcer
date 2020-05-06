import {
  call,
  put,
  takeEvery,
  delay,
  // select
} from "redux-saga/effects";
import camelCase from "lodash/camelCase";

import { apiCallCounterDec, apiCallCounterInc } from "../actions";
// import { logout } from 'modules/auth/actions';
import * as calls from "../calls";
// import { setAuth } from "api";
// import { getToken, getIsAuthenticated } from 'modules/auth/selectors';

const successPostfix = "_SUCCESS";
const failPostfix = "_FAIL";
const startPostfix = "_REQUEST";
const requestPendingDelay = 200; //ms

function createFailAction(action, error) {
  const { payload, type } = action;
  const { response } = error;

  return {
    type: type.replace(startPostfix, failPostfix),
    payload,
    response,
    error,
  };
}

function createSuccessAction(action, response) {
  const { type, payload } = action;

  return {
    type: type.replace(startPostfix, successPostfix),
    payload,
    response,
  };
}

function checkStatus(status) {
  switch (status) {
    case 400:
      //yield put(push(Routes.BAD_REQUEST));
      break;
    // case 401:
    //   // handled by axios interceptors
    //   yield put(logout());
    //   break;
    case 403:
      //yield put(push(Routes.FORBIDDEN));
      break;
    case 500:
    case 501:
    case 502:
    case 503:
      //yield put(push(Routes.ERROR));
      break;
    default:
      break;
  }
}

function* sendRequest(action) {
  yield put(apiCallCounterInc(action.type));
  let callMethod = calls[camelCase(action.type)];
  if (!callMethod) {
    throw new Error(`no api method for action ${action.type}`);
  }
  // let isAuthenticated = yield select(getIsAuthenticated);

  // if (isAuthenticated) {
  // let token = yield select(getToken);
  // setAuth(token);
  // }

  try {
    let response = yield call(callMethod, action.payload);
    yield put(createSuccessAction(action, response));
  } catch (error) {
    if (error.status) {
      yield checkStatus(error.status);
    }
    yield put(createFailAction(action, error));
  }
}

function* requestEnded(action) {
  yield delay(requestPendingDelay);

  let type = action.type
    .replace(successPostfix, startPostfix)
    .replace(failPostfix, startPostfix);
  yield put(apiCallCounterDec(type));
}

let isApiCallAction = (action) => {
  return action.type.endsWith(startPostfix);
};

let isApiCallEndedAction = (action) => {
  return (
    action.type.endsWith(successPostfix) || action.type.endsWith(failPostfix)
  );
};

function* apiCallsSaga() {
  yield takeEvery(isApiCallAction, sendRequest);
  yield takeEvery(isApiCallEndedAction, requestEnded);
}

export default apiCallsSaga;
