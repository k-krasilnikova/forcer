import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import SignIn from "../components";
import { signinRequest } from "../actions";
import { createPendingSelector } from "api/selectors";
import { SIGNIN_FORM } from "../../../constants";

const SignInContainer = () => {
  const dispatch = useDispatch();
  const isSigninPending = useSelector(createPendingSelector(signinRequest));

  const handleSubmit = useCallback(
    (data) => {
      dispatch(signinRequest(data));
    },
    [dispatch]
  );

  return (
    <SignIn
      form={SIGNIN_FORM}
      isPending={isSigninPending}
      onSubmit={handleSubmit}
    />
  );
};

export default SignInContainer;
