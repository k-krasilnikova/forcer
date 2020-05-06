import React from "react";
import { Route, Switch } from "react-router";

import { ROUTES } from "../../../constants";
import SignIn from "../pages/SignIn";
import ForgotPassword from "../pages/ForgotPassword";
import NotFoundPage from "common/NotFoundPage";

const Auth = () => {
  return (
    <Switch>
      {/* <Route exact path="/auth/sign-up" component={SignUp} /> */}
      <Route exact path={ROUTES.SIGNIN} component={SignIn} />
      <Route exact path={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
      {/* <Route path="/auth/reset-password/:token?" component={ResetPassword} /> */}
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Auth;
