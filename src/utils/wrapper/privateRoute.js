import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PrivateRoute({ children, ...restProps }) {
  const navigate = useNavigate();
  const stateUser = useSelector((state) => state.user);

  useEffect(() => {
    if (!stateUser.token) {
      navigate("/login", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { ...restProps });
      })}
    </>
  );
}

export default PrivateRoute;
