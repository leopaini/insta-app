import React from "react";
import { Store } from "../../Store";
import Photo from "../Photo/Photo";

const PhotoGrid = props => {
  const { state } = React.useContext(Store);
  return (
    <div className="photo-grid">
      {state.posts.map((post, i) => (
        <Photo key={i} index={i} post={post} />
      ))}
    </div>
  );
};

export default PhotoGrid;
