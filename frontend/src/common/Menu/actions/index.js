import createAction from 'redux-actions/es/createAction';

export const getUpdatedUserRequest = createAction('GET_UPDATED_USER_REQUEST');
export const getUpdatedUserSuccess = createAction('GET_UPDATED_USER_SUCCESS');
export const getUpdatedUserFail = createAction('GET_UPDATED_USER_FAIL');

export const menuTabChanged = createAction('MENU_TAB_CHANGED');
