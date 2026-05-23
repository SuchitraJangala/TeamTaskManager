import React, { useState } from "react";
import "../styles/Tasks.css";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "") return;

    const task = {
      id: Date.now(),
      title,
      description,
      status: "pending",
    };

    setTasks([...tasks, task]);
    setTitle("");
    setDescription("");
  };

  const markCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: "completed" } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="main-content">
      <div className="tasks-container">
        <h2>Tasks</h2>

        {/* Create Task Form */}
        <div className="card">
          <h3>Create Task</h3>
          <form className="task-form" onSubmit={handleAddTask}>
            <input
              type="text"
              placeholder="Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Task Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add Task</button>
          </form>
        </div>

        {/* Task List */}
        <div className="card">
          <h3>Your Tasks</h3>
          {tasks.length === 0 ? (
            <p>No tasks yet. Add one above!</p>
          ) : (
            <ul id="taskList">
              {tasks.map((task) => (
                <li key={task.id}>
                  <div className="task-info">
                    <span className="task-title">{task.title}</span>
                    <span className="task-desc">{task.description}</span>
                  </div>
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
          )}
        </div>
      </div>
    </div>
  );
}

export default Tasks;
