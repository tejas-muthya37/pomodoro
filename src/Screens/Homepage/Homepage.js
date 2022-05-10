import "./homepage.css";
import Tasks from "./../../Components/Tasks/Tasks";

const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="homepage-header">
        <h1>Welcome back, Rahul</h1>
        <p>You have 4 tasks for today. Let's get to work!</p>
      </div>
      <Tasks />
    </div>
  );
};

export default Homepage;
