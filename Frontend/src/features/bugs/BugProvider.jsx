import React, { createContext, useState } from "react";

export const BugContext = createContext();

const BugProvider = ({ children }) => {
  const [bugs, setBugs] = useState(null);
  const [bug, setBug] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editBug, setEditBug] = useState(null);
  const [myBugs, setMyBugs] = useState(null);

  return (
    <BugContext.Provider
      value={{
        bugs,
        setBugs,
        loading,
        setLoading,
        bug,
        setBug,
        editBug,
        setEditBug,
        myBugs,
        setMyBugs,
      }}
    >
      {children}
    </BugContext.Provider>
  );
};

export default BugProvider;
