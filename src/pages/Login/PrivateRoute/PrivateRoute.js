import LinearProgress from "@mui/material/LinearProgress";
import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../../../Context/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <LinearProgress />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/Login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
