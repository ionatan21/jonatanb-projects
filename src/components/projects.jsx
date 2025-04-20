import { useState, useRef, useEffect } from "react";
import { myprojects } from "./list";
import { motion } from "framer-motion";
import "./projects.css";

export default function Projects() {
  const videoRefs = useRef({});

  const handleMouseEnter = (title) => {
    setHoveredIndex(title);
    const video = videoRefs.current[title];
    if (video) {
      video.play();
    }
  };

  const handleMouseLeave = (title) => {
    setHoveredIndex(null);
    const video = videoRefs.current[title];
    if (video) {
      video.pause();
      video.currentTime = 0; // Optional: reset to start
    }
  };

  const [hoveredIndex, setHoveredIndex] = useState("");

  return (
    <div className="proyectos">
      {myprojects.map((project) => (
        <motion.a
          href={project.link}
          className="proyecto relative fade-in-down-delay h-fit overflow-hidden"
          key={project.title}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => handleMouseEnter(project.title)}
          onMouseLeave={() => handleMouseLeave(project.title)}
          onTouchStart={() => handleMouseEnter(project.title)}
          onTouchEnd={() => handleMouseLeave(project.title)}
        >
          <video
            ref={(el) => (videoRefs.current[project.title] = el)}
            src={project.video}
            className="absolute w-full h-full object-cover z-0"
            muted
            playsInline
            preload="metadata"
            loop
          />
          <div className="absolute bg-gradient-to-t from-black/80 via-black/30 to-transparent w-full h-full z-10" />
          <div className="overlay relative z-20">
            <h2 className="text-white">{project.title}</h2>
            <motion.p
              className="overflow-hidden text-white mb-2"
              initial={{ height: 0 }}
              animate={{ height: hoveredIndex === project.title ? "auto" : 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ height: "auto" }}
            >
              {project.description}
            </motion.p>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
