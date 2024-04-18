import React from 'react';
import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

const ProjectCard = (props) => {
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
      <div className="mb-2">
        {props.language.map((language, index) => (
          <div
            key={index}
            className={`text-sm inline-block px-2 py-1 mr-1 rounded ${isLanguageHovered ? 'bg-terminal text-gray' : 'bg-lightgray text-hterminal'}`}
            onMouseEnter={handleLanguageMouseEnter}
            onMouseLeave={handleLanguageMouseLeave}
          >
            {language}
          </div>
        ))}
      </div>
      <p className="text-sm mb-4">{props.description}</p>
      <a
        href={props.codeLink}
        className="text-hterminal hover:text-terminal transition duration-300 ease-in-out"
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.codeLink ? <p className='text-sm'>SEE CODE</p> : <p></p>}
        
      </a>
    </div>
  );
};


export default ProjectCard;
