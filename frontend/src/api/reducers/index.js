import { handleActions } from "redux-actions";

import * as apiActions from "../actions";

const defaultState = {
  apiCallCounter: 0
};

export const apiCalls = handleActions(
  {
    [apiActions.apiCallCounterInc]: (state, action) => ({
      ...state,
      apiCallCounter: state.apiCallCounter + 1,
      [action.payload]: (state[action.payload] || 0) + 1
    }),
    [apiActions.apiCallCounterDec]: (state, action) => ({
      ...state,
      apiCallCounter: state.apiCallCounter - 1,
      [action.payload]: (state[action.payload] || 0) - 1
    })
  },
  defaultState
);
