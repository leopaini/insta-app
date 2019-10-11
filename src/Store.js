import React from "react";
import posts from "./data/posts";
import comments from "./data/comments";
import { postsReducer } from "./reducers/posts";
import { commentsReducer } from "./reducers/comments";

export const Store = React.createContext();

// Create object for the default data
const initialState = {
  posts,
  comments
};

const mainReducer = ({ posts, comments }, action) => {
  // Middleware goes here, i.e calling analytics service, etc.
  return {
    posts: postsReducer(posts, action),
    comments: commentsReducer(comments, action)
  };
};

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(mainReducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}
