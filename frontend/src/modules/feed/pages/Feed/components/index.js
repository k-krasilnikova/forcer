import React from "react";
// import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Button from "common/Button";
import Layout from "common/Layout";
import styles from "./styles";

const Feed = ({ classes, allNews }) => {
  return (
    <Layout isAuthenticated title="Feed">
      <div className={classes.container}>
        <div className={classes.allNews}>
          {allNews.map((news) => (
            <div className={classes.wrapperNews} key={news._id}>
              <h4>{news.title}</h4>
              <div>{news.description}</div>
              <img src={news.image_url} alt="News Description" />
            </div>
          ))}
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
              Add News
            </Button>
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

Feed.propTypes = {};

export default withStyles(styles)(Feed);
