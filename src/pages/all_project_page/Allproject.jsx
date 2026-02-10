import React from 'react';
import Main_bg from '../../components/main_bg/Main_bg';
import './allproject.css';
import Navbar from '../../components/navbar/Navbar';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const Allproject = () => {
  const projects = [
    { id: 1, name: 'E-Commerce', description: 'A complete e-commerce platform built with NestJS, React, Firebase, and Tailwind CSS.', link: '/portfolio/codevantage' },
    { id: 2, name: 'Digital E-commerce Store', description: 'A WordPress-based e-commerce store for a accessories product', link: '/portfolio/freaklifestyle' },
    { id: 3, name: 'Coming Soon', description: 'lorem ipsum dolor set emit', link: '#' },
    { id: 4, name: 'Coming Soon', description: 'lorem ipsum dolor set emit', link: '#' },
    // { id: 5, name: 'Coming Soon', description: 'lorem ipsum dolor set emit', link: '#' },
    // { id: 6, name: 'Coming Soon', description: 'lorem ipsum dolor set emit', link: '#' },
    // Add more projects as needed
    // { id: 3, name: 'Rey Ventures', description: 'Documenting life', link: '/portfolio/reyventures' },
  ];

  return (
    <section className='allproject'>
      <Navbar />
      <div className="heading"><h1>ALL PROJECTS</h1></div>
      <div className="project-container">
        {projects.map(project => (
          <ProjectCard key={project.id} name={project.name} description={project.description} link={project.link} />
        ))}
      </div>
      <Main_bg />
    </section>
  );
};

export default Allproject;
