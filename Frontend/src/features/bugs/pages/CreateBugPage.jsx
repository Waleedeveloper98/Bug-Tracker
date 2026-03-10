import "../style/createBugPage.scss";
import Input from "../../../shared/ui/input/Input";
import Select from "../../../shared/ui/select/Select";
import Button from "../../../shared/components/button/Button";
import { useState } from "react";
import { useBug } from "../hooks/useBug";
import { useAuth } from "../../auth/hooks/useAuth";
import BugForm from "../components/BugForm";
import { useNavigate, useParams } from "react-router-dom";

const CreateBugPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");

  const { handleCreateBug, editBug } = useBug();

  const { bugId } = useParams();

  const isEdit = !!bugId;
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleCreateBug({
      title,
      description,
      status,
      priority,
      createdBy: "",
      assignedTo: null,
    });
    navigate("/")
  };

  return (
    <div className="create-bug">
      <div className="create-bug__header">
        <h1>Create Bug</h1>
        <p>Report a new issue in the system</p>
      </div>
      <BugForm
        handleSubmit={handleSubmit}
        title={title}
        description={description}
        status={status}
        priority={priority}
        setTitle={setTitle}
        setDescription={setDescription}
        setStatus={setStatus}
        setPriority={setPriority}
        isEdit={isEdit}
      />
    </div>
  );
};

export default CreateBugPage;
