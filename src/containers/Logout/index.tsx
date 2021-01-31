import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import localStorage from "../../utils/localStorage";

type LogoutProps = {};

const Logout: React.FC<LogoutProps> = () => {
  useEffect(() => {
    localStorage.removeSession();
  }, []);

  return <Redirect to="/login" />;
};

export default Logout;
