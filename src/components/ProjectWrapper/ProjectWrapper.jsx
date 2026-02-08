import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./projectWrapper.css";
import backwardArrow from '/assets/Backward_arrow.webp';
import forwardArrow from '/assets/Forward_arrow.webp';

const projects = [
  { id: 1, name: 'Code_Vantage', path: '/portfolio/codevantage' },
  { id: 2, name: 'Freak_Lifestyle', path: '/portfolio/freaklifestyle' },
  // { id: 2, name: 'Rey_Ventures', path: '/portfolio/reyventures' },
  // Add more projects as needed
];

const ProjectWrapper = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentProject = projects.findIndex(project => project.path === location.pathname);
    if (currentProject !== -1) {
      setCurrentIndex(currentProject);
    }
  }, [location.pathname]);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    setCurrentIndex(nextIndex);
    navigate(projects[nextIndex].path);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setCurrentIndex(prevIndex);
    navigate(projects[prevIndex].path);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex]);

  return (
    <section className='project-wrapper'>
      <div>
        {children}
        <button className="swiper-button-prev" onClick={handlePrev}><img src={backwardArrow} alt="Previous" /></button>
        <button className="swiper-button-next" onClick={handleNext}><img src={forwardArrow} alt="Next" /></button>
      </div>
    </section>
  );
};

export default ProjectWrapper;