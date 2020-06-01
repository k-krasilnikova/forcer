import React from "react"; // , { useCallback }
import {
  // useDispatch,
  useSelector
} from "react-redux";

import Maps from "../components";
import { getMapsRequest } from "../actions";
import { createPendingSelector } from "api/selectors";

const MapsContainer = () => {
  // const dispatch = useDispatch();
  const isGetMapsPending = useSelector(createPendingSelector(getMapsRequest));

  return <Maps isPending={isGetMapsPending} />;
};

export default MapsContainer;
