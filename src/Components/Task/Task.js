import "./task.css";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CheckIcon from "@mui/icons-material/Check";

const Task = () => {
  return (
    <div className="Task">
      <p>Math Homework</p>
      <div className="task-icons-group">
        <CheckIcon fontSize="small" />
        <EditOutlinedIcon fontSize="small" />
        <DeleteOutlinedIcon fontSize="small" />
      </div>
    </div>
  );
};

export default Task;
