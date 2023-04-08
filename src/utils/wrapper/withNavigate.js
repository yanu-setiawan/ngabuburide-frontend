import React from "react";
import { useNavigate } from "react-router-dom";

function withNavigate(Component) {
  function WithNav(props) {
    const navigate = useNavigate();
    return <Component navigate={navigate} {...props} />;
  }
  return WithNav;
}

export default withNavigate;
