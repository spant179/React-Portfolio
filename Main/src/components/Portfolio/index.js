import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'weather-dashboard',
      description: 'JavaScript',
      link: "https://spant179.github.io/WeatherDasboard/",
      repo: "https://github.com/spant179/WeatherDasboard"
    },
    {
      name: 'note-taker',
      description: 'JavaScript,HTML,CSS',
      link: "https://note-taker-demo1.herokuapp.com/notes",
      repo: "https://github.com/spant179/Note-Taker"
    },
    {
      name: 'api-calendar',
      description: 'JavaScript,HTML,CSS',
      link: "https://spant179.github.io/API-calendar/Assets/",
      repo: "https://github.com/spant179/API-calendar"
    },
    {
      name: 'fitness-tracker',
      description: 'Node,MERN Stack',
      link: "https://sandy-workout.herokuapp.com/",
      repo: "https://github.com/spant179/Workout-Sessions"
    },
    {
      name: 'portfolio-tracker',
      description: 'React/JavaScript/CSS',
      link: "https://github.com/chrislyons2886/portfolio-tracker",
      repo: "https://github.com/spant179"
    },
    {
      name: 'password-generator',
      description: 'React/JavaScript/CSS',
      link: "https://spant179.github.io/Random-Password/",
      repo: "https://github.com/spant179"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
