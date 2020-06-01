import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { MARK_TYPES } from "../../../constants";
import styles from "./styles";

const Mark = ({ classes, mark = {} }) => {
  return (
    <div className={classes.mark}>
      <p>{mark.title || "lol"}</p>
      <p>{mark.description}</p>
      <p>{MARK_TYPES[mark.priority] && MARK_TYPES[mark.priority].label}</p>
      <p>{mark.createdAt}</p>
    </div>
  );
};

Mark.propTypes = {};

export default withStyles(styles)(Mark);
