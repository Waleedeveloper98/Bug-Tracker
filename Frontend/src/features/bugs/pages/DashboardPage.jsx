import React from "react";
import BugList from "../components/BugList";
import { useBug } from "../hooks/useBug";
import BugCard from "../components/BugCard";

const DashboardPage = () => {
  const { bugs } = useBug();
  return (
    <>
      <h1>DashboardPage</h1>
      <BugList>
        {bugs?.map((bug) => (
          <BugCard key={bug._id} bug={bug} />
        ))}
      </BugList>
    </>
  );
};

export default DashboardPage;
