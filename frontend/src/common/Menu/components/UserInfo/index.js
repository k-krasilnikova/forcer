import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import styles from "./styles";
import avatar from "static/avatar.png";

const UserInfo = ({ classes, userEmail, userName }) => {
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      className={classes.container}
    >
      <img src={avatar} alt="User" className={classes.avatar} />
      <Grid
        container
        direction="column"
        justify="space-around"
        className={classes.userInfoContainer}
      >
        <Typography noWrap className={classes.userDataText}>
          {userName || userEmail}
        </Typography>
      </Grid>
    </Grid>
  );
};

UserInfo.propTypes = {
  userEmail: PropTypes.string.isRequired,
  userName: PropTypes.string,
};

export default withStyles(styles)(UserInfo);
