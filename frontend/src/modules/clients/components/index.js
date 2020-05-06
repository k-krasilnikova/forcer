import React from "react";
import { Route, Switch } from "react-router";

import { ROUTES } from "../../../constants";
import Clients from "../pages/Clients";
// import ClientDetails from "../pages/ClientDetails";
import NotFoundPage from "common/NotFoundPage";

const Auth = () => {
  return (
    <Switch>
      {/* <Route exact path={ROUTES.CLIENT_DETAILS} component={ClientDetails} /> */}
      <Route exact path={ROUTES.CLIENTS} component={Clients} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Auth;
