import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ProgressTracker from "./components/ProgressTracker";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  const updateTask = (index, updateTask) => {
    const newTasks = [...tasks];
    newTasks[index] = updateTask;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  }
  const clearTasks = () => {
    setTasks([]);
  }
  return (
    <div className="App">
      <h1>Task Buddy</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks = {tasks}
         updateTask = {updateTask}
         deleteTask = {deleteTask}
      />
      <ProgressTracker tasks = {tasks}/>
     {tasks.length > 0 && (
      <button className="clear-btn" onClick={clearTasks}>Clear All Tasks</button>
     )}
    </div>
  );
}

export default App;
