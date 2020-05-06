import React, { Suspense } from "react";
import { Switch, Route } from "react-router";

import { ROUTES } from "../constants";
import Auth from "modules/auth";
// import Maps from "modules/maps";
// import Marks from "modules/marks";
import Clients from "modules/clients";
import Feed from "modules/feed";
import Statistics from "modules/statistics";
// import Home from "modules/home";
import NotFoundPage from "common/NotFoundPage";

const AppRoutes = () => {
  return (
    <Suspense fallback={""}>
      <Switch>
        <Route path={ROUTES.AUTH} component={Auth} />
        {/* <Route path={ROUTES.MAP} component={Maps} /> */}
        {/* <Route path={ROUTES.MARKS} component={Marks} /> */}
        <Route path={ROUTES.CLIENTS} component={Clients} />
        <Route path={ROUTES.FEED} component={Feed} />
        <Route path={ROUTES.STATISTICS} component={Statistics} />
        {/* <Route path={ROUTES.HOME} component={Home} /> */}
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
