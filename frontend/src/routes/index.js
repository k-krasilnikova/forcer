import React, { Suspense } from "react";
import { Switch, Route } from "react-router";

// import { ROUTES } from 'constants/routeConstants';
import NotFoundPage from "../common/NotFoundPage";

// import Home from 'modules/home';

const AppRoutes = () => {
  return (
    <Suspense fallback={""}>
      <Switch>
        {/* <Route path={Routes.AUTH} component={Auth} /> */}
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
