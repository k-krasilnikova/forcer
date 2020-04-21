import React from "react";
import { Redirect } from "react-router";

import { ROUTES } from "../../constants";

const Home = () => <Redirect to={ROUTES.MAP} />;

export default Home;
