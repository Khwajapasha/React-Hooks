import React from "react";
export const AuthContext = React.createContext({
  isAuth: false,
  login: () => {},
});

const AuthContextProvider = (props) => {
  return <AuthContext.Provider></AuthContext.Provider>;
};
