import React, { createContext, useState, useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const storedUserDetails = localStorage.getItem("login");
    if (storedUserDetails) {
      setUserDetails(JSON.parse(storedUserDetails));
    }
  }, []);

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
