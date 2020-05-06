import React from "react";
import { Route, Switch } from "react-router";

import { ROUTES } from "../../../constants";
import Maps from "../pages/Maps";
import NotFoundPage from "common/NotFoundPage";

const Auth = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.MAP} component={Maps} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Auth;
