import React, { createContext, useState } from 'react';

// Create the context
export const UserContext = createContext();

// Provider component that wraps your app
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User will store the email after login

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};



