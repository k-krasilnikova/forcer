import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import styles from "./styles";

const NotFoundPage = ({ classes }) => {
  return (
    <section className={classes.section}>
      <div className={classes.contentContainer}>
        <Typography className={classes.title}> Oops </Typography>
        <Typography className={classes.description}>
          This page is not exist
        </Typography>
      </div>
    </section>
  );
};

export default withStyles(styles)(NotFoundPage);
