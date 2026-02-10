import React from 'react'
import './home_nav.css'
import { Link } from 'react-router-dom'

const Home_nav = () => {
  return (
    <nav className='home_nav'>
        <h1 className="logo">ANBH.</h1>
        <Link to={'contact'}><button className="contact_button">CONTACT ME</button></Link>
    </nav>
  )
}

export default Home_nav
