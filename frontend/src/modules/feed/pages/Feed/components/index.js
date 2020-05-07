import React from "react";
// import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

import Button from "common/Button";
import Layout from "common/Layout";
import { TAG_TYPES } from "../../../constants";
import styles from "./styles";

const Feed = ({ classes, allNews }) => {
  return (
    <Layout isAuthenticated title="Feed">
      <div className={classes.container}>
        <div className={classes.allNews}>
          {allNews.map((news) => (
            <div className={classes.wrapperNews} key={news._id}>
              <div className={classes.tags}>
                {news.tags &&
                  news.tags.map((tag) => (
                    <Chip
                      label={TAG_TYPES[tag].label}
                      variant="outlined"
                      key={tag}
                    />
                  ))}
              </div>
              <h3 className={classes.title}>{news.title}</h3>
              <div className={classes.description}>{news.description}</div>
              <img
                src={news.image_url}
                alt="News Description"
                className={classes.descriptionImage}
              />
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
