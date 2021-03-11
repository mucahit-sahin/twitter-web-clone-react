import { combineReducers } from "redux";
import messagesReducer from "./messagesReducer";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  posts: postsReducer,
  messages: messagesReducer,
  users: usersReducer,
});
