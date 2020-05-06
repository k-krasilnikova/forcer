import createAction from "redux-actions/es/createAction";

export const getClientsRequest = createAction("GET_CLIENTS_REQUEST");
export const getClientsSuccess = createAction("GET_CLIENTS_SUCCESS");
export const getClientsFail = createAction("GET_CLIENTS_FAIL");
