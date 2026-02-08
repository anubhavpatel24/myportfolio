import React from 'react';
import { Outlet } from 'react-router-dom';
import "./portfoliopage.css";
import Navbar from '../../components/navbar/Navbar.jsx';

const Portfoliopage = () => {
  return (
    <section className='portfoliopage'>
      <Navbar />
      <Outlet />
      <button onClick={() => window.open('/all-projects', '_self')} className="all-projects">
        All Projects
        <img src="/assets/Forward.webp" alt="" />
      </button>
    </section>
  );
};

export default Portfoliopage;
