import { createStore } from "redux";
import posts from "../data/posts";
import users from "../data/users";
import messages from "../data/messages";
import reducers from "./reducers";

const initialstate = {
  posts: posts,
  users: users,
  messages: messages,
};

export const store = createStore(reducers, initialstate);
