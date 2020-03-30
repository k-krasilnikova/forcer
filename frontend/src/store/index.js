import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

import reducer from "../reducer";
import saga, { createSagaInjector } from "../saga";

export const history = createBrowserHistory({});

const router = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();

export function configureStore() {
  let store = createStore(
    reducer(history),
    composeWithDevTools(applyMiddleware(sagaMiddleware, router))
  );
  if (process.env.NODE_ENV === "production") {
    store = createStore(
      reducer(history),
      applyMiddleware(sagaMiddleware, router)
    );
  }
  store.injectSaga = createSagaInjector(sagaMiddleware.run);
  sagaMiddleware.run(saga);
  return store;
}
