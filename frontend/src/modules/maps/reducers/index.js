import { combineReducers } from "redux";

import feed from "../pages/Maps/reducers";
import feedDetails from "../pages/FeedDetails/reducers";

const reducer = combineReducers({ feed, feedDetails });

export default reducer;