import React from "react";
import { Store } from "../../Store";
import Photo from "../Photo/Photo";
import Comments from "../Comments/Comments";

const Single = props => {
  const { state } = React.useContext(Store);
  const { postId } = props.match.params;
  const index = state.posts.findIndex(post => post.code === postId);
  const post = state.posts[index];
  const postComments = state.comments[postId] || [];

  return (
    <div className="single-photo">
      <Photo index={index} post={post} />
      <Comments postComments={postComments} postId={postId} />
    </div>
  );
};

export default Single;
