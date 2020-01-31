import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

import { StyledNavigation } from "../styles/StyledNavigation";

const Naviagtion = ({ movie }) => (
  <StyledNavigation>
    <div className="navigation-content">
      <Link to="/">
        <p>Home</p>
      </Link>
      <p>|</p>
      <p>{movie}</p>
    </div>
  </StyledNavigation>
);

Naviagtion.propTypes = {
  movie: PropTypes.string
};

export default Naviagtion;
