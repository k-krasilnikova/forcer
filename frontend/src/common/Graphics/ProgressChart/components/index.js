import React from "react";
// import PropTypes from "prop-types";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

const ProgressChart = ({ classes, title }) => {
  const breakdowns = [
    { label: "Accumulator", value: 56 },
    { label: "Wheel problems", value: 28 },
    { label: "Inspection", value: 4 },
    { label: "Petrol need", value: 9 },
    { label: "Other", value: 3 },
  ];
  return (
    <div className={classes.chartWrapper}>
      <h3 className={classes.title}>{title}</h3>
      <div className={classes.chart}>
        {breakdowns.map((breakdown) => (
          <div>
            <div className={classes.breakdown}>
              <p>{breakdown.label}</p>
              <p>{breakdown.value} %</p>
            </div>
            <LinearProgress
              value={breakdown.value}
              variant="determinate"
              classes={{
                colorPrimary: classes.progressBar,
                barColorPrimary: classes.progressBarColor,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

ProgressChart.propTypes = {};

export default withStyles(styles)(ProgressChart);
