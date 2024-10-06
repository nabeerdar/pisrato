import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCards'; // Adjust the path if needed

const NewProjectSection = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getVisibleProjects = () => {
    if (width <= 1024) {
      // Show all projects for screens smaller than or equal to 1024px
      return projects;
    } else {
      // Show up to 3 projects on screens larger than 1024px
      const visibleProjects = [];
      for (let i = 0; i < 3; i++) {
        visibleProjects.push(projects[(currentIndex + i) % projects.length]);
      }
      return visibleProjects;
    }
  };

  return (
    <div className="new-project-section">
      <h1 className="new-project-heading">
        My Recent <strong className="purple">Work</strong>
      </h1>
      <p>Here are a few projects we've worked on recently.</p>
      <div className="new-project-cards-container">
        {width > 1024 && (
          <div
            className="arrow arrow-left"
            onClick={() => setCurrentIndex((currentIndex - 1 + projects.length) % projects.length)}
          >
            &lt;
          </div>
        )}
        {getVisibleProjects().map((project, index) => (
          <ProjectCard
            key={index}
            imgPath={project.imgPath}
            isBlog={project.isBlog}
            title={project.title}
            description={project.description}
            ghLink={project.ghLink}
          />
        ))}
        {width > 1024 && (
          <div
            className="arrow arrow-right"
            onClick={() => setCurrentIndex((currentIndex + 1) % projects.length)}
          >
            &gt;
          </div>
        )}
      </div>
    </div>
  );
};

export default NewProjectSection;
