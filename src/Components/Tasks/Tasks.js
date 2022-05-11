import "./tasks.css";
import Task from "./../Task/Task";
import { Box, Modal } from "@mui/material";
import { useState } from "react";

const Tasks = () => {
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
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [taskDetails, setTaskDetails] = useState({
    taskName: "",
    taskDescription: "",
  });

  return (
    <div className="Tasks">
      <header className="tasks-header">
        <h3>To - Do List</h3>
        <span onClick={handleOpen}> + </span>
      </header>
      <div className="tasks-body">
        <Task />
        <Task />
        <Task />
        <Task />
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
              <button>Cancel</button>
              <button>Save</button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Tasks;
