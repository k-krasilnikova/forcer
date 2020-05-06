import React from "react";
// import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Layout from "common/Layout";
import styles from "./styles";

const Statistics = ({ classes }) => {
  return (
    <Layout isAuthenticated title="Statistics">
      <div className={classes.wrapper}></div>
    </Layout>
  );
};

Statistics.propTypes = {};

export default withStyles(styles)(Statistics);
