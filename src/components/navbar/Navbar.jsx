import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import './navbar.css'

// Import images directly
import homeIcon from '/assets/Home_Icon.webp'
import aboutIcon from '/assets/About_Icon.webp'
import portfolioIcon from '/assets/Portfolio_Icon.webp'
import contactIcon from '/assets/Contact_Icon.webp'

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className='navbar' key={location.pathname}>
      <div className="nav_container">
        <Link to="/" className="nav-link">
          <img 
            src={homeIcon}
            alt="Home" 
            className={location.pathname === '/' ? 'active' : ''}
          />
          <div className="tooltip">Home</div>
        </Link>
        <Link to="/about" className="nav-link">
          <img 
            src={aboutIcon}
            alt="About" 
            className={location.pathname === '/about' ? 'active' : ''}
          />
          <div className="tooltip">About</div>
        </Link>
        <Link to="/portfolio" className="nav-link">
          <img 
            src={portfolioIcon}
            alt="Portfolio" 
            className={location.pathname === '/portfolio' ? 'active' : ''}
          />
          <div className="tooltip">Portfolio</div>
        </Link>
        <Link to="/contact" className="nav-link">
          <img 
            src={contactIcon}
            alt="Contact" 
            className={location.pathname === '/contact' ? 'active' : ''}
          />
          <div className="tooltip">Contact</div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
