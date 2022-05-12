import "./task.css";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CheckIcon from "@mui/icons-material/Check";
import UndoIcon from "@mui/icons-material/Undo";
import { useState } from "react";

const Task = ({ taskName, editTask, deleteTask, taskId }) => {
  const [taskComplete, setTaskComplete] = useState(false);
  return (
    <div className="Task">
      <p className={taskComplete ? "task-complete" : ""}>{taskName}</p>
      <div className="task-icons-group">
        {taskComplete ? (
          <UndoIcon
            onClick={() => setTaskComplete(!taskComplete)}
            fontSize="small"
          />
        ) : (
          <CheckIcon
            onClick={() => setTaskComplete(!taskComplete)}
            fontSize="small"
          />
        )}
        <EditOutlinedIcon onClick={() => editTask(taskId)} fontSize="small" />
        <DeleteOutlinedIcon
          onClick={() => deleteTask(taskId)}
          fontSize="small"
        />
      </div>
    </div>
  );
};

export default Task;
