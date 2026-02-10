import React from 'react';
import ProjectWrapper from '../../../components/ProjectWrapper/ProjectWrapper';
import Portfolioproject from '../../../components/portfolio_project/Portfolioproject';

const Freak_Lifestyle = () => {
  return (
    <ProjectWrapper>
      <div>
        <Portfolioproject
          backgroundImage={'/assets/Freak-Lifestyle.webp'}
          project_name={'Digital E-commerce Store'}
          project_overview={'Streetwear Clothing Brand which is co-founded by me, it is a platform for people to buy streetwear clothing. This website is an eccomerse store for that brand.'}
          role={'Full Stack Developer'}
           tech={'WordPress, WooCommerce, Elementor, Razorpay, SEO'}
          link={'https://wpnepal.com.np/'}
        />
      </div>
    </ProjectWrapper>
  );
};

export default Freak_Lifestyle;