import React, { createContext, useState } from "react";

export const StatContext = createContext();

const StatProvider = ({ children }) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <StatContext.Provider value={{ stats, setStats, loading, setLoading }}>
      {children}
    </StatContext.Provider>
  );
};

export default StatProvider;
