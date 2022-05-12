import "./tasks.css";
import Task from "./../Task/Task";
import { Box, Modal } from "@mui/material";
import { useEffect, useState } from "react";
import { useTask } from "./../../Context/task-context";
import uuid from "react-uuid";

const Tasks = () => {
  const { tasksArray, setTasksArray } = useTask();

  useEffect(() => {
    localStorage.setItem("TASKS_ARRAY", JSON.stringify(tasksArray));
  }, [tasksArray]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    boxShadow: 24,
    p: 3,
    bgcolor: "whitesmoke",
    borderRadius: "0.25rem",
    outline: "none",
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [taskDetails, setTaskDetails] = useState({
    taskName: "",
    taskDescription: "",
  });

  const [editingTask, setEditingTask] = useState(false);

  const addTask = () => {
    setTasksArray([
      ...tasksArray,
      {
        _id: uuid(),
        ...taskDetails,
      },
    ]);
    handleClose();
  };

  const editTask = (id) => {
    setEditingTask(true);
    var taskFound = tasksArray.find((task) => task._id === id);
    setTaskDetails({
      taskName: taskFound.taskName,
      taskDescription: taskFound.taskDescription,
    });
    handleOpen();
  };

  return (
    <div className="Tasks">
      <header className="tasks-header">
        <h3>To - Do List</h3>
        <span onClick={handleOpen}> + </span>
      </header>
      <div className="tasks-body">
        {tasksArray.map((task) => {
          return (
            <Task
              key={task._id}
              editTask={() => editTask(task._id)}
              taskName={task.taskName}
              taskId={task._id}
            />
          );
        })}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <input
              onChange={(event) =>
                setTaskDetails({
                  ...taskDetails,
                  taskName: event.target.value,
                })
              }
              value={taskDetails.taskName}
              type="text"
              placeholder="Name"
            />
            <textarea
              onChange={(event) =>
                setTaskDetails({
                  ...taskDetails,
                  taskDescription: event.target.value,
                })
              }
              value={taskDetails.taskDescription}
              placeholder="Description"
            />
            <div className="btn-group">
              <button
                onClick={() => {
                  handleClose();
                  setTaskDetails({
                    taskName: "",
                    taskDescription: "",
                  });
                }}
              >
                Cancel
              </button>
              <button onClick={addTask}>Save</button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Tasks;
