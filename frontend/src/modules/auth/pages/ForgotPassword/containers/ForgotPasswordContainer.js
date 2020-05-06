import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import ForgotPassword from "../components";
import { forgotPasswordRequest } from "../actions";
import { createPendingSelector } from "api/selectors";
import { FORGOT_PASSWORD_FORM } from "../../../constants";

const ForgotPasswordContainer = () => {
  const dispatch = useDispatch();
  const isForgotPasswordPending = useSelector(
    createPendingSelector(forgotPasswordRequest)
  );

  const handleSubmit = useCallback(
    (data) => {
      dispatch(forgotPasswordRequest(data));
    },
    [dispatch]
  );

  return (
    <ForgotPassword
      form={FORGOT_PASSWORD_FORM}
      isPending={isForgotPasswordPending}
      onSubmit={handleSubmit}
    />
  );
};

export default ForgotPasswordContainer;
