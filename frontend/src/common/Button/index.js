import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import loader_squares from "static/loader-primary.gif";
import classNames from "classnames";

import styles from "./styles";

const ButtonComponent = ({
  classes,
  children,
  label,
  onClick,
  className,
  isPending,
  ...data
}) => {
  return (
    <Button
      className={className}
      color="primary"
      onClick={onClick}
      disableTouchRipple
      {...data}
    >
      <div className={classes.buttonContent} {...data}>
        <div
          className={classNames({
            [classes.loader]: true,
            [classes.hidden]: true,
            [classes.visible]: isPending,
          })}
        >
          <img alt="" src={loader_squares} />
        </div>
        <div
          className={classNames({
            [classes.buttonTextContainer]: true,
            [classes.hidden]: isPending,
          })}
        >
          {children}
        </div>
      </div>
    </Button>
  );
};

ButtonComponent.propTypes = {
  // children: PropTypes.object,
  onClick: PropTypes.func,
  className: PropTypes.string,
  data: PropTypes.object,
};

export default withStyles(styles)(ButtonComponent);
