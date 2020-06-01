import React from "react";
// import PropTypes from "prop-types";
import {
  VictoryChart,
  VictoryStack,
  VictoryBar,
  VictoryAxis,
  VictoryLabel,
} from "victory";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

const ProgressChart = ({ classes, title }) => {
  const data = [
    { x: "Accumulator", y: 56 },
    { x: "Wheel problems", y: 28 },
    { x: "Inspection", y: 16 },
  ];
  return (
    <div className={classes.chartWrapper}>
      <h3 className={classes.title}>{title}</h3>
      <div className={classes.chart}>
        <VictoryChart horizontal padding={40}>
          <VictoryStack
            style={{
              labels: { fontSize: 15, color: "#eae7e2" },
            }}
          >
            <VictoryBar
              style={{
                data: { fill: "orange" },
                labels: { fontSize: 15, color: "#eae7e2" },
              }}
              data={data}
              labels={({ datum }) => `${datum._y}%`}
            />
          </VictoryStack>
          <VictoryAxis
            style={{
              axis: { stroke: "transparent" },
              ticks: { stroke: "transparent" },
              tickLabels: { fontSize: 15, fill: "#eae7e2" },
            }}
            tickLabelComponent={<VictoryLabel textAnchor="middle" />}
          />
        </VictoryChart>
      </div>
    </div>
  );
};

ProgressChart.propTypes = {};

export default withStyles(styles)(ProgressChart);
