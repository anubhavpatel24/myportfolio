import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from 'react-router-dom';
import Layout from './layout/Layout.jsx';
import Homepage from './pages/home_page/Homepage';
import Portfoliopage from './pages/portfolio_page/Portfoliopage.jsx';
import Aboutpage from './pages/about_page/Aboutpage.jsx';
import Contactpage from './pages/contact_page/Contactpage.jsx';
import Code_Vantage from './pages/portfolio_page/Project/Code_Vantage.jsx';
import Freak_Lifestyle from './pages/portfolio_page/Project/Freak_Lifestyle.jsx';
import Allproject from './pages/all_project_page/Allproject.jsx';
import Rey_Ventures from './pages/portfolio_page/Project/Rey_Ventures.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Homepage/>}/>
      <Route path='portfolio' element={<Portfoliopage/>}>
        <Route index element={<Navigate to="codevantage" replace />} />
        <Route path='codevantage' element={<Code_Vantage/>}/>
        {/* <Route path='reyventures' element={<Rey_Ventures/>}/> */}
        <Route path='freaklifestyle' element={<Freak_Lifestyle/>}/>
      </Route>
      <Route path='about' element={<Aboutpage/>}/>
      <Route path='contact' element={<Contactpage/>}/>
      <Route path='all-projects' element={<Allproject/>}/>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
