import React from 'react'
import ProjectWrapper from '../../../components/ProjectWrapper/ProjectWrapper'
import Portfolioproject from '../../../components/portfolio_project/Portfolioproject'

const Project1 = () => {
    return (
      <ProjectWrapper>
  <Portfolioproject 
    backgroundImage={'/assets/Code_Vantage_bg.webp'}
    project_name={'E-Commerce'}
    project_overview={'A streetwear e-commerce platform with product browsing, cart, secure checkout, order management, and a modern, fully responsive UI for a smooth shopping experience.'}
    role={'Full Stack Developer'}
    tech={'Frontend: React, Tailwind CSS | Backend: NestJS | Database: Firebase'}
    link={'https://e-react-dc29.vercel.app/'}
  />
</ProjectWrapper>

    )
}

export default Project1
