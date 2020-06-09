import React from "react"; // { useCallback }
// import { useDispatch } from "react-redux";

import AddNews from "../components";
// import { getFeedRequest } from "../actions";
import { ADD_NEWS_FORM } from "../../../constants";

const AddNewsContainer = ({ addNews }) => {
  //   const dispatch = useDispatch();

  //   const handleSubmit = useCallback(
  //     (data) => {
  //       dispatch(getFeedRequest(data));
  //     },
  //     [dispatch]
  //   );

  return (
    <AddNews
      form={ADD_NEWS_FORM}
      //   isPending={isGetFeedPending}
      //   onSubmit={handleSubmit}
      onSubmit={addNews}
    />
  );
};

export default AddNewsContainer;
