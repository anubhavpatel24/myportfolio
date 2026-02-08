import React from 'react'
import './aboutpage.css'
import Navbar from '../../components/navbar/Navbar.jsx'
import Main_bg from '../../components/main_bg/Main_bg.jsx'


const Aboutpage = () => {
  // Function to generate icon paths and handle potential errors
  const getIconPath = (iconName) => {
    return `/assets/skills/${iconName.toLowerCase().replace(/[\s.-]/g, '')}.webp`;
  };
  
  // Function to handle image load errors
  const handleImageError = (e) => {
    e.target.src = '/assets/Github_Icon.webp'; // Fallback icon
    e.target.style.opacity = '0.5'; // Make it slightly transparent to indicate it's a fallback
  };

  // Skills data organized by categories
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "JavaScript", icon: getIconPath("javascript") },
        { name: "HTML", icon: getIconPath("html") },
        { name: "CSS", icon: getIconPath("css") },
        { name: "React", icon: getIconPath("react") },
        { name: "Next.js", icon: getIconPath("nextjs") },
        { name: "Tailwind CSS", icon: getIconPath("tailwind") }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: getIconPath("nodejs") },
        { name: "Express.js", icon: getIconPath("expressjs") },
        { name: "MongoDB", icon: getIconPath("mongodb") },
      ]
    },
    {
      category: "Development Tools",
      skills: [
        { name: "Git", icon: getIconPath("git") },
        { name: "GitHub", icon: getIconPath("github") },
        { name: "Vercel", icon: getIconPath("vercel") },
        { name: "Vite", icon: getIconPath("vite") },
        { name: "Arduino IDE", icon: getIconPath("arduino") },
        { name: "JSON", icon: getIconPath("json") }
      ]
    },
    {
      category: "Design Tools",
      skills: [
        { name: "Figma", icon: getIconPath("figma") },
        { name: "Photoshop", icon: getIconPath("photoshop") }
      ]
    },
    {
      category: "CMS & E-commerce",
      skills: [
        { name: "WordPress", icon: getIconPath("wordpress") },
        { name: "WooCommerce", icon: getIconPath("woocommerce") },
        { name: "Shopify", icon: getIconPath("shopify") }
      ]
    },
    {
      category: "Libraries & Tools",
      skills: [
        { name: "React Router", icon: getIconPath("reactrouter") }
      ]
    },
    {
      category: "Languages",
      skills: [
        { name: "C", icon: getIconPath("c") },
        { name: "Python", icon: getIconPath("python") },
        { name: "Java", icon: getIconPath("java") }
      ]
    }
  ];

  // Function to handle resume download
  const handleResumeDownload = () => {
    // Create an anchor element
    const link = document.createElement('a');

    // Set the href to your resume file
    link.href = '/assets/resume.pdf'; // You need to add your resume.pdf to public/assets/

    // Set the download attribute to suggest a filename for the download
    link.download = 'Revanshu_Pusadkar_Resume.pdf';

    // Append to the body
    document.body.appendChild(link);

    // Trigger the click event
    link.click();

    // Clean up
    document.body.removeChild(link);
  };
  // Function to handle GitHub button click
  const handleGithubClick = () => {
    // Open GitHub profile in a new tab
    window.open('https://github.com/anubhavpatel24', '_blank');
  };

  // Function to handle All Projects button click
  const handleAllProjectsClick = () => {
    // Navigate to the all projects page
    window.location.href = '/all-projects';
  };

  return (
    <section className='aboutpage'>
      <Navbar />
      {/* <img src="assets/work_in_progress.webp" alt="about_bg" className='work_in_progress'/> */}
      <div className="heading"><h1>ABOUT ME</h1></div>
      <div className="about-container">
        <div className="personal-info">
          <div className="pfp"></div>
          <div className="my-name"><span>Revanshu Pusadkar</span></div>
          <div className="bio"><span>Developer, Designer, Techgeek</span></div>
          <button className="resume" onClick={handleResumeDownload}>Resume</button>
        </div>
        <div className="info">
          <div className="description">
            <p>I'm <strong>Revanshu</strong> — a <strong>creative</strong> and <strong>curious</strong> mind who enjoys working on side projects, fun ideas, and tools that actually <strong>solve problems</strong>.</p>

            <p>I like building things that <strong>look good</strong>, <strong>feel smooth</strong>, and <strong>make sense</strong>.</p>

            <p>I care about <strong>design</strong>, <strong>clean code</strong>, and making the most of every <strong>experience</strong>.</p>

            <p>In my free time, I enjoy:</p>
            <ul>
              <li>football <span className="emoji">⚽</span></li>
              <li>traveling <span className="emoji">✈️</span></li>
              <li>gaming <span className="emoji">🎮</span></li>
              <li>music <span className="emoji">🎧</span></li>
              <li>movies <span className="emoji">🎬</span></li>
              <li>fitness <span className="emoji">🏋️</span></li>
            </ul>
          </div><div className="more-info">            <button className="github" onClick={handleGithubClick}>
            <img src="/assets/Github_Icon.webp" alt="GitHub" className="github-icon" />
            Github
          </button>
            <button className="all-projects-button" onClick={handleAllProjectsClick}>All Projects</button>
          </div>
        </div>        <div className="skills">
          <h2>Technical Skills</h2>

          {/* Map through skill categories */}
          {skillsData.map((category, index) => (
            <div className="skills-category" key={index}>
              <h3>{category.category}</h3>
              <div className="skills-grid">                {/* Map through individual skills within each category */}
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    <div className="tooltip">{skill.name}</div>
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      onError={handleImageError}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Main_bg />
    </section>

  )
}

export default Aboutpage
