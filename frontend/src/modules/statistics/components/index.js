import React from "react";
// import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Layout from "common/Layout";
import Button from "common/Button";
import styles from "./styles";

const Statistics = ({ classes }) => {
  return (
    <Layout isAuthenticated title="Statistics">
      <div className={classes.wrapper}>
        <div className={classes.statistics}>
        </div>

        <div className={classes.dashboard}>
          <div className={classes.wrapperDashboard}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              type="submit"
              className={classes.button}
            >
              Filter
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Statistics.propTypes = {};

export default withStyles(styles)(Statistics);
