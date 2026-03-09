import "../style/bugDetailsPage.scss";

import Badge from "../../../shared/ui/badge/Badge";
import Button from "../../../shared/components/button/Button";
import Select from "../../../shared/ui/select/Select";
import { useParams } from "react-router-dom";
import { useBug } from "../hooks/useBug";

const BugDetailsPage = () => {
  const { bugs } = useBug();
  const { bugId } = useParams();
  const bug = bugs.find((bug) => bug._id === bugId);
  const { title, description, priority, status } = bug;

  const statusShow = (s) => {
    switch (s) {
      case "open":
        return "warning";

      case "resolved":
        return "success";

      case "in-progress":
        return "danger";

      default:
        return "";
    }
  };
  const priorityShow = (p) => {
    switch (p) {
      case "high":
        return "warning";

      case "low":
        return "success";

      case "medium":
        return "danger";

      default:
        return "";
    }
  };
  return (
    <div className="bug-details">
      <div className="bug-details__header">
        <h1>Bug Details</h1>
      </div>

      <div className="bug-details__card">
        <div className="bug-details__title">
          <h2>{title}</h2>

          <Badge variant={priorityShow(priority)}>{priority}</Badge>
        </div>

        <div className="bug-details__meta">
          <div>
            <span>Status</span>

            <Badge variant={statusShow(status)}>{status}</Badge>
          </div>

          <div>
            <span>Assigned To</span>

            <p>null</p>
          </div>
        </div>

        <div className="bug-details__description">
          <h3>Description</h3>

          <p>{description}</p>
        </div>

        <div className="bug-details__actions">
          <Select>
            <option>Change Status</option>
            <option>Open</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </Select>

          <Button variant="secondary">Edit Bug</Button>

          <Button>Delete Bug</Button>
        </div>
      </div>
    </div>
  );
};

export default BugDetailsPage;
