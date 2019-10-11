import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <h1>
      <Link to="/">Leostagram</Link>
    </h1>
  );
};

export default Header;
