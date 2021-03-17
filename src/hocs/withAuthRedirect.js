import { useAuth } from "../lib/auth";
import Loading from "../components/Loading";
import React from "react";
import { useHistory } from "react-router-dom";
import Routes from "../constants/routes";

export default function withAuthRedirect({
  WrappedComponent,
  LoadingComponent = Loading,
  expectedAuth,
  location,
}) {
  return (props) => {
    const { user } = useAuth();
    const history = useHistory();

    if (user == null) {
      return <LoadingComponent />;
    }
    const isAuthenticated = !!user;
    const shouldRedirect = expectedAuth !== isAuthenticated;
    if (shouldRedirect) {
      history.push(location || Routes.HOME);
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}
