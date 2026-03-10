import "../style/statGrid.scss";

import StatCard from "../components/StatsCard";
import { useStat } from "../hooks/useStat";

const StatGrid = ({stats}) => {
  
  return (
    <div className="stat-grid">
      <StatCard title="Open Bugs" value={stats?.openCount} />

      <StatCard title="In Progress" value={stats?.inProgressCount} />

      <StatCard title="Resolved Bugs" value={stats?.resolvedCount} />
    </div>
  );
};

export default StatGrid;
