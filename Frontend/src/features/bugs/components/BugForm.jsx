import React, { useEffect } from "react";
import Select from "../../../shared/ui/select/Select";
import Input from "../../../shared/ui/input/Input";
import Button from "../../../shared/components/button/Button";
import { useBug } from "../hooks/useBug";
import { Link, useNavigate } from "react-router-dom";

const BugForm = ({
  handleSubmit,
  title,
  description,
  status,
  priority,
  setTitle,
  setDescription,
  setStatus,
  setPriority,
  isEdit,
}) => {
  const { editBug, handleUpdateABug } = useBug();
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    await handleUpdateABug(editBug._id, {
      title,
      description,
      status,
      priority,
    });
    navigate("/");
  };

  useEffect(() => {
    if (editBug) {
      setTitle(editBug.title);
      setDescription(editBug.description);
      setPriority(editBug.priority);
      setStatus(editBug.status);
    }
  }, [editBug]);

  return (
    <form onSubmit={handleSubmit} className="create-bug__form">
      <Input
        label="Bug Title"
        placeholder="Enter bug title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className="create-bug__row">
        <Select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          label="Priority"
        >
          <option value="">Select Priority</option>
          <option value={"low"}>Low</option>
          <option value={"medium"}>Medium</option>
          <option value={"high"}>High</option>
        </Select>

        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          label="Status"
        >
          <option value="">Select Status</option>
          <option value={"open"}>Open</option>
          <option value={"in-progress"}>In Progress</option>
          <option value={"resolved"}>Resolved</option>
        </Select>
      </div>

      <div className="create-bug__textarea">
        <label>Description</label>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the bug..."
        ></textarea>
      </div>

      <div className="create-bug__actions">
        <Link to={"/"}>
          <Button variant="secondary">Cancel</Button>
        </Link>
        <Button
          handleSubmit={isEdit ? handleUpdate : handleSubmit}
          type="submit"
        >
          {isEdit ? "Update Bug" : "Create Bug"}
        </Button>
      </div>
    </form>
  );
};

export default BugForm;
