import React, { createContext } from "react";
import useFirebase from "../Hooks/useFirebase";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const FirebaseInfo = useFirebase();
  return (
    <AuthContext.Provider value={FirebaseInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
