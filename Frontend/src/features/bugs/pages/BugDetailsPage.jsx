import "../style/bugDetailsPage.scss";

import Badge from "../../../shared/ui/badge/Badge";
import Button from "../../../shared/components/button/Button";
import Select from "../../../shared/ui/select/Select";
import { useNavigate, useParams } from "react-router-dom";
import { useBug } from "../hooks/useBug";
import { useState } from "react";

const BugDetailsPage = () => {
  const [bugStatus, setBugStatus] = useState("");
  const { bugs, handleDeleteBug, handleUpdateBugStatus, editBug, setEditBug } =
    useBug();
  const { bugId } = useParams();
  const bug = bugs.find((bug) => bug._id === bugId);
  const { title, description, priority, status } = bug;
  const navigate = useNavigate();

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

  const handleDelete = async () => {
    await handleDeleteBug(bugId);
    navigate("/");
  };
  const handleUpdateStatus = async (e) => {
    const value = e.target.value;
    setBugStatus(value);
    await handleUpdateBugStatus(bug._id, { status: value });
    navigate("/");
  };

  const handleEdit = () => {
    navigate(`/bugs/edit/${bugId}`);
    setEditBug(bug);
  };

  return (
    <>
      {bug ? (
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
              <Select value={bugStatus} onChange={handleUpdateStatus}>
                <option value={""}>Change Status</option>
                <option value={"open"}>Open</option>
                <option value={"in-progress"}>In Progress</option>
                <option value={"resolved"}>Resolved</option>
              </Select>

              <Button handleSubmit={handleEdit} variant="secondary">Edit Bug</Button>

              <Button handleSubmit={handleDelete}>Delete Bug</Button>
            </div>
          </div>
        </div>
      ) : (
        "No Bug"
      )}
    </>
  );
};

export default BugDetailsPage;
