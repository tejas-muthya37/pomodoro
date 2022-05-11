import "./task.css";
import Pomodoro from "./../../Components/Pomodoro/Pomodoro";

const Task = () => {
  return (
    <div className="Task">
      <div className="task-section">
        <Pomodoro />
        <div className="task-details">
          <h3>Geography Homework</h3>
          <p className="task-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="task-add-date">Date Added : 15 Feb, 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Task;
