import "../style/bugCard.scss";

import Badge from "../../../shared/ui/badge/Badge";
import Button from "../../../shared/components/button/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useBug } from "../hooks/useBug";
import { priorityShow, statusShow } from "../../../utils/utils";

const BugCard = ({ bug }) => {
  const { title, description, priority, status } = bug;
  const navigate = useNavigate();

  const { bugId } = useParams();
  const { setEditBug } = useBug();

  const handleEdit = () => {
    navigate(`/bugs/edit/${bugId}`);
    setEditBug(bug);
  };

  return (
    <div className="bug-card">
      <div className="bug-card__header">
        <h3 className="bug-card__title">{title}</h3>

        <Badge variant={priorityShow(priority)}>{priority}</Badge>
      </div>

      <p className="bug-card__description">{description}</p>

      <div className="bug-card__meta">
        <Badge variant={statusShow(status)}>{status}</Badge>
      </div>

      <div className="bug-card__actions">
        <Button variant="secondary">
          <Link to={`/${bug._id}/details`}>View</Link>
        </Button>

        <Button>
          <Link to={`/bugs/edit/${bug._id}`} onClick={handleEdit}>
            Edit
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default BugCard;
