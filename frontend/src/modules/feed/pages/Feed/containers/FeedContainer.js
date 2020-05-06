import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Feed from "../components";
import { getFeedRequest } from "../actions";
import { createPendingSelector } from "api/selectors";
import { FEED_FORM } from "../../../constants";

const FeedContainer = () => {
  const dispatch = useDispatch();
  const isGetFeedPending = useSelector(createPendingSelector(getFeedRequest));

  const handleSubmit = useCallback(
    (data) => {
      dispatch(getFeedRequest(data));
    },
    [dispatch]
  );

  return (
    <Feed
      form={FEED_FORM}
      isPending={isGetFeedPending}
      onSubmit={handleSubmit}
    />
  );
};

export default FeedContainer;
