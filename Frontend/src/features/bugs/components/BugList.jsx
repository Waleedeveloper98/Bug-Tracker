import { useEffect } from "react";
import { useBug } from "../hooks/useBug";
import "../style/bugList.scss";
import BugCard from "./BugCard";

const BugList = () => {
  const { bugs, handleGetAllBugs } = useBug();

  useEffect(() => {
    handleGetAllBugs();
  }, []);
  return (
    <div className="bug-list">
      {bugs?.map((bug) => (
        <BugCard key={bug._id} bug={bug} />
      ))}
    </div>
  );
};

export default BugList;
