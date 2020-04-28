import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

// import Notifications from "common/notifications";
// import Menu from "common/Menu";
// import Header from "common/Header";
import styles from "./styles";

const Layout = ({
  children,
  classes,
  title,
  warning,
  content,
  headerClassName,
}) => {
  return (
    <div className={classes.root}>
      {/* <Notifications className={classes.notifications} /> */}
      <div className={classes.container}>
        <div className={classes.drawer}>{/* <Menu /> */}</div>
        <div className={classes.mainComponent}>
          <div className={classes.headerDesktop}>
            {/* <Header title={title} className={headerClassName} warning={warning}>
              {content}
            </Header> */}
          </div>
          <div className={classes.mainLayoutContent}>{children}</div>
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  cContent: PropTypes.object,
  title: PropTypes.string.isRequired,
  warning: PropTypes.string,
  headerClassName: PropTypes.string,
};

export default withStyles(styles)(Layout);
