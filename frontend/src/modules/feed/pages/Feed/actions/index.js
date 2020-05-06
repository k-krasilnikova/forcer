import createAction from "redux-actions/es/createAction";

export const getFeedRequest = createAction("GET_FEED_REQUEST");
export const getFeedSuccess = createAction("GET_FEED_SUCCESS");
export const getFeedFail = createAction("GET_FEED_FAIL");
