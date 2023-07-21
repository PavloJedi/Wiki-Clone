import React, { createContext, useCallback, useState } from "react";

// Services
import { getUser } from "../services/userService";

// Context
export const CurrentUserContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  const fetchUser = useCallback(async () => {
    try {
      const accessToken = localStorage.getItem("token");
      if (accessToken) {
        const { data } = await getUser(accessToken);
        const updatedUser = { ...data };
        setCurrentUser(updatedUser);
        setIsLoading(false);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error(error);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        fetchUser,
        isLoading,
        isAuthenticated,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default AppProvider;
