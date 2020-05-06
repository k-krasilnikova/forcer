import createAction from "redux-actions/es/createAction";

export const getMapsRequest = createAction("GET_MAPS_REQUEST");
export const getMapsSuccess = createAction("GET_MAPS_SUCCESS");
export const getMapsFail = createAction("GET_MAPS_FAIL");
