import createAction from "redux-actions/es/createAction";

export const getStatisticsRequest = createAction("GET_STATISTICS_REQUEST");
export const getStatisticsSuccess = createAction("GET_STATISTICS_SUCCESS");
export const getStatisticsFail = createAction("GET_STATISTICS_FAIL");
