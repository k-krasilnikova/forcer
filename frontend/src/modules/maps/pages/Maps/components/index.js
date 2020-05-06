import React from "react";
// import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Layout from "common/Layout";
import styles from "./styles";

const Maps = ({ classes }) => {
  return (
    <Layout isAuthenticated title="Maps">
      <div className={classes.wrapper}></div>
    </Layout>
  );
};

Maps.propTypes = {};

export default withStyles(styles)(Maps);
