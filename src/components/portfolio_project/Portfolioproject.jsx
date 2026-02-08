import React from 'react';
import './portfolioproject.css';

const Portfolioproject = ({ backgroundImage,project_name,project_overview,role,tech,link,bg_opacity }) => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

return (
        <div className='portfolioproject'>
            <div className='project-content'>
                    <h1>{project_name}</h1>
                    <div className="project-overview">
                            <h2>Project Overview:</h2>
                            <p>{project_overview}</p>
                    </div>
                    <div className="role">
                            <h2>Role:</h2>
                            <p>{role}</p>
                    </div>
                    <div className="tech">
                            <h2>Software & Tech Stack:</h2>
                            <p>{tech}</p>
                    </div>
                    <div className="project-link">
                    <button onClick={() => window.open(link, '_blank')}>
                        Visit Website
                        <img src="/assets/Down Left Arrow.webp" alt="" />
                    </button>
                    </div>
            </div>
            <div className='project-bg' style={divStyle}></div>
            <div className="blur1"></div>
            <div className="blur2"></div>
            <div className="blur3"></div>
    </div>
);
};

export default Portfolioproject;
