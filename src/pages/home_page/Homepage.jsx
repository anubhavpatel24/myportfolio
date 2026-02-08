import React from 'react'
import './homepage.css'
import Home_nav from '../../components/home_navbar/Home_nav'
import Main_bg from '../../components/main_bg/Main_bg.jsx'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <section className='homepage'>
      <Home_nav/>
      <div className="home_content">
        <h1 className='name'>I'm <span>ANUBHAV</span></h1>
        <h1 className='profession'>WEB DEVELOPER</h1>
        <div className="buttons">
          <Link to={'about'}><button className='about_button'>About Me</button></Link>
          <Link to={'portfolio'}><button className='portfolio_button'>Portfolio</button></Link>
        </div>
      </div>
      <video src="assets/character.webm" loop autoPlay muted></video>
      <Main_bg/>
    </section>
  )
}

export default Homepage
