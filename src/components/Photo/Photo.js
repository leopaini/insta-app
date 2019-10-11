import React from "react";
import { Store } from "../../Store";
import { Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Photo = props => {
  const { post, index } = props;
  const { state, dispatch } = React.useContext(Store);

  const handleClick = () => {
    dispatch({
      type: "INCREMENT_LIKES",
      index
    });
  };

  return (
    <figure className="grid-figure">
      <div className="grid-photo-wrap">
        <Link to={`/view/${post.code}`}>
          <img
            src={post.display_src}
            alt={post.caption}
            className="grid-photo"
          />
        </Link>

        <TransitionGroup component="span">
          <CSSTransition
            classNames="like"
            key={post.likes}
            timeout={{ enter: 500, exit: 500 }}
          >
            <span className="likes-heart">{post.likes}</span>
          </CSSTransition>
        </TransitionGroup>
      </div>

      <figcaption>
        <p>{post.caption}</p>
        <div className="control-buttons">
          <button className="likes" onClick={handleClick}>
            &hearts; {post.likes}
          </button>
          <Link className="button" to={`/view/${post.code}`}>
            <span className="comment-count">
              <span className="speech-bubble"></span>
              {state.comments[post.code] ? state.comments[post.code].length : 0}
            </span>
          </Link>
        </div>
      </figcaption>
    </figure>
  );
};

export default Photo;
