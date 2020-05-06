import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

// import Notifications from "common/notifications";
import Menu from "common/Menu";
import Header from "common/Header";
import styles from "./styles";

const Layout = ({
  children,
  classes,
  isAuthenticated,
  title,
  warning,
  content,
  headerClassName,
}) => {
  return (
    <div className={classes.root}>
      {/* <Notifications className={classes.notifications} /> */}
      {isAuthenticated && <Menu />}
      <div
        className={classNames([classes.content], {
          [classes.contentWithMenu]: isAuthenticated,
        })}
      >
        {title && (
          <Header title={title} className={headerClassName} warning={warning}>
            {content}
          </Header>
        )}
        <div className={classes.mainLayoutContent}>{children}</div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  content: PropTypes.object,
  title: PropTypes.string,
  warning: PropTypes.string,
  headerClassName: PropTypes.string,
};

export default withStyles(styles)(Layout);
