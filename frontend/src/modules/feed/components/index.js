import React from "react";
import { Route, Switch } from "react-router";

import { ROUTES } from "../../../constants";
import Feed from "../pages/Feed";
import NotFoundPage from "common/NotFoundPage";

const Auth = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.FEED} component={Feed} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Auth;
