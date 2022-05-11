import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PomodoroProvider } from "./Context/pomodoro-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PomodoroProvider>
      <App />
    </PomodoroProvider>
  </React.StrictMode>
);
