import "./task.css";
import Pomodoro from "./../../Components/Pomodoro/Pomodoro";
import { useParams } from "react-router-dom";
import { useTask } from "./../../Context/task-context";

const Task = () => {
  const { taskId } = useParams();
  const { tasksArray } = useTask();
  const taskFound = tasksArray.find((task) => task._id === taskId);

  return (
    <div className="Task">
      <div className="task-section">
        <Pomodoro />
        <div className="task-details">
          <h3>{taskFound.taskName}</h3>
          <p className="task-description">{taskFound.taskDescription}</p>
          <p className="task-add-date">Date Added : {taskFound.dateCreated}</p>
        </div>
      </div>
    </div>
  );
};

export default Task;
