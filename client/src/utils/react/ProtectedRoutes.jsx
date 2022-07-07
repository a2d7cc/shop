import React from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const AuthenticatedRoutes = ({ isAllowed, redirectPath = "/login" }) => {
  const location = useLocation();

  if (isAllowed) {
    return <Outlet />;
  }
    return (
      <Navigate
        to={redirectPath}
        state={{ path: location.pathname }}
        replace={true}
      />
    );

};

export default AuthenticatedRoutes;
