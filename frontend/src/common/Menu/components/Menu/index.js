import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import UserInfo from "../UserInfo";
import MenuList from "../../containers/MenuListContainer";
import Logo from "static/Logo-white-web.png";
import styles from "./styles";

const Menu = ({ classes, email, userName }) => {
  return (
    <div className={classes.root}>
      <div className={classes.infoContainer}>
        <Grid
          container
          className={classes.logoContainer}
          direction="row"
          justify="space-between"
        >
          <img src={Logo} alt="logo" className={classes.logo} />
        </Grid>
        <div className={classes.userContainer}>
          <UserInfo userEmail={email} userName={userName} />
        </div>
      </div>
      <div className={classes.menuContainer}>
        <MenuList />
      </div>
    </div>
  );
};

Menu.propTypes = {
  email: PropTypes.string,
  userName: PropTypes.string
};

export default withStyles(styles)(Menu);
