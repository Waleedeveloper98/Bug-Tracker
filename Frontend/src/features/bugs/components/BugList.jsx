import { useEffect } from "react";
import { useBug } from "../hooks/useBug";
import "../style/bugList.scss";
import BugCard from "./BugCard";

const BugList = ({children}) => {
  const { handleGetAllBugs } = useBug();

  useEffect(() => {
    handleGetAllBugs();
  }, []);
  return (
    <div className="bug-list">
      
      {children}
    </div>
  );
};

export default BugList;
