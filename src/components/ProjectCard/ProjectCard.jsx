import React from 'react';
import { useNavigate } from 'react-router-dom';
import './projectCard.css';

const ProjectCard = ({ name, description, link }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(link);
    };

    return (
        <div className="project-card" onClick={handleClick}>
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="seemore">See more &gt;</div>
        </div>
    );
};

export default ProjectCard;