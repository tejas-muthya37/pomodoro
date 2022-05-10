import "./tasks.css";
import Task from "./../Task/Task";

const Tasks = () => {
  return (
    <div className="Tasks">
      <header className="tasks-header">
        <h3>To - Do List</h3>
        <span> + </span>
      </header>
      <div className="tasks-body">
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
};

export default Tasks;
