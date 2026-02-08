import React from 'react'
import ProjectWrapper from '../../../components/ProjectWrapper/ProjectWrapper'
import Portfolioproject from '../../../components/portfolio_project/Portfolioproject'

const Project1 = () => {
    return (
        <ProjectWrapper>
            <Portfolioproject 
            backgroundImage={'/assets/Code_Vantage_bg.webp'}
            project_name={'Code Vantage'}
            project_overview={'Code Vantage is a Web Design Agency which is co-founded by me, it helps people to create next-gen web interface. This website is interactive, futuristic and visually appealing. '}
            role={'UI/UX Designer, Developer'}
            tech={'Figma, Photoshop, Spline, React, GSAP, CSS'}
            link={'https://codevantage.in'}
            />
        </ProjectWrapper>
    )
}

export default Project1
