import React from "react";

import { withStyles } from "@material-ui/core/styles";

import Layout from "common/Layout";
import notFound from "static/notFound.png";
import styles from "./styles";

const NotFoundPage = ({ classes }) => {
  return (
    <Layout>
      <section className={classes.section}>
        <img alt="" src={notFound} className={classes.image} />
        <div className={classes.contentContainer}>
          <h2 className={classes.title}>Oops</h2>
          <h2 className={classes.description}>This page is not exist</h2>
        </div>
      </section>
    </Layout>
  );
};

export default withStyles(styles)(NotFoundPage);
