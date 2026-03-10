import React, { useEffect } from "react";
import StatGrid from "../components/StatsGrid";
import { useBug } from "../../bugs/hooks/useBug";
import { useStat } from "../hooks/useStat";

const StatsPage = () => {
  const { handleGetAllBugs } = useBug();
  const {stats} = useStat()

  useEffect(() => {
    handleGetAllBugs();
  }, []);
  return <StatGrid stats={stats}/>;
};

export default StatsPage;
