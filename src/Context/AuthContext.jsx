import React from "react";
import { useSlate } from "slate-react";
export const AuthContext = React.createContext({
  isAuth: false,
  login: () => {},
});

const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useSlate(false);
  return <AuthContext.Provider>{props.children}</AuthContext.Provider>;
};
