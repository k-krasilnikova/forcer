import React from // useCallback
"react";
import {
  // useDispatch,
  useSelector,
} from "react-redux";

import Statistics from "../components";
import { getStatisticsRequest } from "../actions";
import { createPendingSelector } from "api/selectors";

const StatisticsContainer = () => {
  // const dispatch = useDispatch();
  const isGetStatisticsPending = useSelector(
    createPendingSelector(getStatisticsRequest)
  );

  return <Statistics isPending={isGetStatisticsPending} />;
};

export default StatisticsContainer;
