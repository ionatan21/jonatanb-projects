import React from "react";
import { myprojects } from "./list";
import "./projects.css";

export default function Projects() {
  return (
    <div className="proyectos">
      {myprojects.map((project) => (
        <a
          href={project.link}
          className="proyecto fade-in-down-delay"
          key={project.title}
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="overlay">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
