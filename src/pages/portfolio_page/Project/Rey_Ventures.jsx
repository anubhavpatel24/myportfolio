import React from 'react'
import ProjectWrapper from '../../../components/ProjectWrapper/ProjectWrapper'
import Portfolioproject from '../../../components/portfolio_project/Portfolioproject'

const Rey_Ventures = () => {
    return (
        <ProjectWrapper>
            <Portfolioproject 
            backgroundImage={'/assets/Rey-Ventures.webp'}
            project_name={'Rey Ventures'}
            project_overview={'My purpose behind starting Rey Ventures is to share my experience through storytelling videos. This website is visualy appealing portfolio of that project.'}
            role={'UI/UX Designer, Developer'}
            tech={'Figma, Photoshop, GSAP, CSS'}
            link={'https://rey004.github.io/Rey-Ventures/'}
            />
        </ProjectWrapper>
    )
}

export default Rey_Ventures