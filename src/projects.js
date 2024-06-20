import React from 'react';
import Typewriter from 'typewriter-effect';
import ProjectCard from './projectCard';
import { useEffect, useState } from 'react';


const Projects = () => {
  const projects = [
    {
      name: 'UFC Predictor',
      language: ['Python', "React", "Tailwind", 'JavaScript'],
      description: 'The UFC Predictor app is a React-based web application that leverages machine learning algorithms to predict the outcomes of UFC fights. As a coding project, this app demonstrates the integration of frontend development with machine learning techniques to create a predictive tool for sports enthusiasts.',
      codeLink: 'https://github.com/PeterBarilo/UFCPredictor',
    },
    {
      name: 'Kidney-Wise',
      language: ['Python', 'Machine Learning'],
      description: 'The Kidney Disease Classifier algorithm is a machine learning solution designed to analyze patient data and predict the presence of kidney disease. This algorithm demonstrates the application of machine learning techniques in healthcare for predictive diagnosis.',
      codeLink: 'https://github.com/PeterBarilo/Kidney-Wise',
    },
    {
        name: 'Airline Price Prediction',
        language: ['Python', 'Machine Learning'],
        description: 'The Airline Price Prediction algorithm is a machine learning solution crafted to forecast airline ticket prices with precision and accuracy. This algorithm showcases the utilization of Mutual Information Regression (MIR) in predicting airfare trends.',
        codeLink: 'https://github.com/PeterBarilo/AirlinePriceModel',
      },  
      {
        name: 'EZPC',
        language: ['React', 'JavaScript'],
        description: "Created a website using React and Python to sell custom-made computers. Developed a successful business plan and sold 7 computers for totaling 10k of revenue within 2 months of running the site."
      },  
      {
        name: 'Developer Secure',
        language: ['React', 'JavaScript'],
        description: "Developer Secure is a dynamic and innovative software development company specializing in impoving client's web presence through sleek and modern web design as well as expert SEO services"
      },  
  ];


  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`font-custom text-terminal`}>
      <div className='fixed top-16 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-2xl'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.pasteString("> ").typeString("My Projects").pauseFor(500).start().typeString(": ").pauseFor(600).typeString(" ")
          }}
        />
      </div>
      <div className={`mt-20 fixed top-80 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-1/2 max-h-128 overflow-y-auto ${show ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 2s' }}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            language={project.language}
            description={project.description}
            codeLink={project.codeLink}
          />
        ))}
      </div>
      <style>
        {`
          ::-webkit-scrollbar {
            display: none;
          }
          .scroll-indicator {
            position: relative;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 20px;
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)); 
          }
        `}
      </style>
    </div>
  );
};

export default Projects;
