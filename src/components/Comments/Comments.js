import React, { useState } from "react";
import { Store } from "../../Store";

const Comments = ({ postComments, postId }) => {
  const { dispatch } = React.useContext(Store);
  const [comment, setComment] = useState({
    author: "",
    comment: ""
  });

  const handleChange = event => {
    setComment({
      ...comment,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({
      type: "ADD_COMMENT",
      postId,
      author: comment.author,
      comment: comment.comment
    });
    event.target.reset();
  };

  const handleRemove = index => {
    dispatch({
      type: "REMOVE_COMMENT",
      i: index,
      postId
    });
  };

  const renderComment = (comment, i) => (
    <div className="comment" key={i}>
      <p>
        <strong>{comment.user}</strong>
        {comment.text}
        <button className="remove-comment" onClick={() => handleRemove(i)}>
          &times;
        </button>
      </p>
    </div>
  );

  return (
    <div className="comments">
      {postComments.map(renderComment)}
      <form className="comment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="author"
          placeholder="author"
          onChange={handleChange}
        />
        <input
          type="text"
          name="comment"
          placeholder="comment"
          onChange={handleChange}
        />
        <input type="submit" hidden />
      </form>
    </div>
  );
};

export default Comments;
