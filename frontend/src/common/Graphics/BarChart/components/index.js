import React from "react";
// import PropTypes from "prop-types";
import { VictoryChart, VictoryAxis, VictoryBar, VictoryTheme } from "victory";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

const BarChart = ({ classes, title = "" }) => {
  const data = [
    { quarter: 1, earnings: 7 },
    { quarter: 2, earnings: 16 },
    { quarter: 3, earnings: 10 },
    { quarter: 4, earnings: 13 },
  ];
  return (
    <div className={classes.chartWrapper}>
      <h3 className={classes.title}>{title}</h3>
      <div className={classes.chart}>
        <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
          <VictoryAxis
            tickValues={["Mon", "Tue", "Wed", "Thu"]}
            tickFormat={(x) => x}
            style={{
              axis: {
                stroke: "#eae7e2",
              },
              tickLabels: { fill: "#eae7e2" },
            }}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => x}
            style={{
              axis: {
                stroke: "#eae7e2",
              },
              tickLabels: { fill: "#eae7e2" },
            }}
          />
          <VictoryBar
            data={data}
            x="quarter"
            y="earnings"
            style={{
              data: { fill: "#fca413" },
              labels: { fill: "#eae7e2" },
            }}
          />
        </VictoryChart>
      </div>
    </div>
  );
};

BarChart.propTypes = {};

export default withStyles(styles)(BarChart);
