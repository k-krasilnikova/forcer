import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import alert from "static/alert.png";
import styles from "./styles";

const Header = ({ classes, title, children, className, warning }) => {
  return (
    <div className={classes.header}>
      {warning && (
        <div className={classes.warning}>
          <img src={alert} alt={"Alert Ico"} className={classes.ico} />
          {warning}
        </div>
      )}
      <div className={classes.mainInfo}>
        <Typography className={classnames([classes.title, className])}>
          {title}
        </Typography>
        <div>{children}</div>
      </div>
    </div>
  );
};

Header.propTypes = {
  isPublic: PropTypes.bool,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  warning: PropTypes.string
};

export default withStyles(styles)(Header);
