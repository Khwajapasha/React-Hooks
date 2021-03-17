import React from "react";
const AuthContext = React.createContext({
  isAuth: false,
  login: () => {},
});
