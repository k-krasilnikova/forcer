import storage from "redux-persist/lib/storage";
import { connectRouter } from "connected-react-router";
import { reducer as formReducer } from "redux-form";
import { persistCombineReducers, createTransform } from "redux-persist";

import { apiCalls } from "api/reducers";
// import auth from './modules/auth/reducers';

const authTransform = createTransform((state) => state, {
  whitelist: ["auth"],
});

const rootPersistConfig = {
  key: "authData",
  storage: storage,
  whitelist: ["auth"],
  transforms: [authTransform],
};

const reducer = (history) =>
  persistCombineReducers(rootPersistConfig, {
    form: formReducer,
    apiCalls,
    router: connectRouter(history),
    // auth,
  });

export default reducer;
