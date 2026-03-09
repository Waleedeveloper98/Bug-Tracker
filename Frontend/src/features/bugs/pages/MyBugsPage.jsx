import "../style/myBugPage.scss";

import StatGrid from "../../stats/components/StatsGrid";
import BugList from "../components/BugList";

import Input from "../../../shared/ui/input/Input";
import Select from "../../../shared/ui/select/Select";
import Button from "../../../shared/components/button/Button";

const MyBugPage = () => {
  return (
    <div className="bug-page">
      <div className="bug-page__header">
        <h1>Bugs</h1>
        <p>Manage and track reported issues</p>
      </div>

      <StatGrid />

      <div className="bug-page__filters">
        <Input placeholder="Search bugs..." />

        <Select>
          <option>Status</option>
          <option>Open</option>
          <option>In Progress</option>
          <option>Resolved</option>
        </Select>

        <Select>
          <option>Priority</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </Select>

        <Button>Create Bug</Button>
      </div>

      <BugList />
    </div>
  );
};

export default MyBugPage;
