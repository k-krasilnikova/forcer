import React from "react";
// import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Layout from "common/Layout";
import styles from "./styles";

const Feed = ({ classes }) => {
  return (
    <Layout isAuthenticated title="Feed">
      <div className={classes.wrapper}></div>
    </Layout>
  );
};

Feed.propTypes = {};

export default withStyles(styles)(Feed);
