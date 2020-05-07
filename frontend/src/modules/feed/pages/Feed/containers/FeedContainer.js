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

  const tempData = [
    {
      _id: "123",
      title: "First test news",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image_url: "https://priority-auto.ru/_nuxt/img/b8377fc.png",
      tags: ["auto", "minsk", "app"],
    },
    {
      _id: "456",
      title: "Second test news",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image_url: "https://priority-auto.ru/_nuxt/img/b8377fc.png",
      tags: ["auto"],
    },
    {
      _id: "789",
      title: "Third test news",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image_url: "https://priority-auto.ru/_nuxt/img/b8377fc.png",
      tags: ["app"],
    },
  ];

  return (
    <Feed
      form={FEED_FORM}
      isPending={isGetFeedPending}
      onSubmit={handleSubmit}
      allNews={tempData}
    />
  );
};

export default FeedContainer;
