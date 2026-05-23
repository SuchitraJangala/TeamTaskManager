import React, { useState } from "react";
import "../styles/Dashboard.css";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Add task handler
  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;

    const task = {
      id: Date.now(),
      title: newTask,
      status: "pending",
    };

    setTasks([...tasks, task]);
    setNewTask(""); // clear input
  };

  // Mark completed handler
  const markCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: "completed" } : task
      )
    );
  };

  // Delete handler
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Counts
  const totalCount = tasks.length;
  const pendingCount = tasks.filter((t) => t.status === "pending").length;
  const completedCount = tasks.filter((t) => t.status === "completed").length;

  return (
    <div className="main-content">
      <div className="dashboard-container">
        <h2>Dashboard</h2>

        {/* Summary cards */}
        <div className="summary-cards">
          <div className="card"><h3>Total Tasks</h3><p>{totalCount}</p></div>
          <div className="card"><h3>Pending Tasks</h3><p>{pendingCount}</p></div>
          <div className="card"><h3>Completed Tasks</h3><p>{completedCount}</p></div>
        </div>

        {/* Add Task + Task List */}
        <div className="task-section">
          <div className="card">
            <h3>Add Task</h3>
            <form className="task-form" onSubmit={handleAddTask}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Task Title"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
              </div>
              <button type="submit">Add Task</button>
            </form>
          </div>

          <div className="card">
            <h3>Your Tasks</h3>
            <ul id="taskList">
              {tasks.map((task) => (
                <li key={task.id}>
                  <span className="task-title">{task.title}</span>
                  <span className={`badge ${task.status}`}>
                    {task.status === "pending" ? "Pending" : "Completed"}
                  </span>
                  <div className="task-actions">
                    {task.status === "pending" && (
                      <button onClick={() => markCompleted(task.id)}>
                        Mark Completed
                      </button>
                    )}
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
