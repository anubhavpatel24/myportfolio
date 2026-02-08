import React from 'react';
import ProjectWrapper from '../../../components/ProjectWrapper/ProjectWrapper';
import Portfolioproject from '../../../components/portfolio_project/Portfolioproject';

const Freak_Lifestyle = () => {
  return (
    <ProjectWrapper>
      <div>
        <Portfolioproject
          backgroundImage={'/assets/Freak-Lifestyle.webp'}
          project_name={'Freak Lifestyle'}
          project_overview={'Streetwear Clothing Brand which is co-founded by me, it is a platform for people to buy streetwear clothing. This website is an eccomerse store for that brand.'}
          role={'Co-founder, Developer'}
          tech={'Wordpress, WooCommerce, Elementor'}
          link={'https://freaklifestyle.com'}
        />
      </div>
    </ProjectWrapper>
  );
};

export default Freak_Lifestyle;