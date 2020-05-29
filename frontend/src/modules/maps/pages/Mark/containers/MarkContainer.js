import React from // , { useCallback }
"react";
// import {
//   useDispatch,
//   useSelector,
// } from "react-redux";

import Mark from "../components";
// import { getMapsRequest } from "../actions";
// import { createPendingSelector } from "api/selectors";

const MarkContainer = (props) => {
  // const dispatch = useDispatch();
  // const isGetMapsPending = useSelector(createPendingSelector(getMapsRequest));

  return <Mark mark={props.mark}/>;
};

export default MarkContainer;
