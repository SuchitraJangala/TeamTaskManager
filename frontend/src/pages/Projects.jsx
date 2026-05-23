import React, { useState } from "react";
import "../styles/Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddProject = (e) => {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "") return;

    const project = {
      id: Date.now(),
      title,
      description,
    };

    setProjects([...projects, project]);
    setTitle("");
    setDescription("");
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  return (
    <div className="main-content">
      <div className="projects-container">
        <h2>Projects</h2>

        {/* Create Project Form */}
        <div className="card">
          <h3>Create Project</h3>
          <form className="project-form" onSubmit={handleAddProject}>
            <input
              type="text"
              placeholder="Project Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Project Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add Project</button>
          </form>
        </div>

        {/* Project List */}
        <div className="card">
          <h3>Your Projects</h3>
          {projects.length === 0 ? (
            <p>No projects yet. Add one above!</p>
          ) : (
            <table className="project-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id}>
                    <td>{project.title}</td>
                    <td>{project.description}</td>
                    <td>
                      <button onClick={() => deleteProject(project.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
