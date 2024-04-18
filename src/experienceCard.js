import React from 'react';
import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import linkedinLogoDefault from './images/linkedDefault.png';
import linkedinLogoHover from './images/linkedAlt.png';

const ExperienceCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLanguageHovered, setIsLanguageHovered] = useState(false);


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleLanguageMouseEnter = () => {
    setIsLanguageHovered(true);
  };

  const handleLanguageMouseLeave = () => {
    setIsLanguageHovered(false);
  };

  return (
    <div
    className="font-custom p-4 m-4 border-2 border-hterminal hover:border-terminal bg-black hover:bg-gray rounded-lg mx-auto"
    onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-lg font-bold text-terminal mb-2">&gt; {props.name}</h2>
      <p className="text-md mb-2 text-hterminal">{props.company}</p>
      <p className="text-sm mb-4">{props.description}</p>
      <div className={`flex justify-left space-x-20`}>
        <a href={props.link} target="_blank" rel="noopener noreferrer" className="relative">
            <img src={linkedinLogoHover} alt="LinkedIn" className="w-7 h-7" /> 
            <img src={linkedinLogoDefault} alt="LinkedIn" className="w-7 h-7 absolute top-0 left-0 opacity-0 transition-opacity duration-300 hover:opacity-100" />
        </a>
      </div>
    </div>
  );
};


export default ExperienceCard;
