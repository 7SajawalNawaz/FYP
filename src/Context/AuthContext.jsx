// src/context/AuthContext.js
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // Holds user state
  const navigate = useNavigate();

  // Function to log out the user
  const logout = () => {
    // Step 1: Remove token from local storage
    localStorage.removeItem("loginData");

    // Step 2: Clear the user state
    setUser(null);

    // Step 3: Redirect to login page
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
