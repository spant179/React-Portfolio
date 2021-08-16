import React from 'react';
import me from '../../../src/assets/cover/me.jpg';

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <img src={me} height="300px"></img>
        </div>
        <p>
        I'm a 22 year old student reside in Philadelphia. Aspiring web developer I've always had desire to learn new things in life. I recentaly embarked myself for the next 24 weeks on enrolling at Penn LSP Coding Bootcamp to learn and gain the skills to being a new path as a developer, where it allows me numerous avenues to explore, within the coding world and letting my creativity shine. </p>
      </div>
    </section>
  );
}

export default About;
