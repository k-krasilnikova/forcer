import React from "react";
// import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Layout from "common/Layout";
import styles from "./styles";

const Clients = ({ classes }) => {
  return (
    <Layout isAuthenticated title="Clients View">
      <div className={classes.wrapper}></div>
    </Layout>
  );
};

Clients.propTypes = {};

export default withStyles(styles)(Clients);
