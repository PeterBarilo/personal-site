import React from 'react';
import { useState } from 'react';
import openNew from './images/open_in_new_24dp_FILL0_wght400_GRAD0_opsz24 (1).png'
const ProjectCard = (props) => {
  const [isLanguageHovered, setIsLanguageHovered] = useState(false);


  const handleLanguageMouseEnter = () => {
    setIsLanguageHovered(true);
  };

  const handleLanguageMouseLeave = () => {
    setIsLanguageHovered(false);
  };

  return (
    <div
    className="font-custom p-4 m-2 border-2 border-hterminal hover:border-terminal bg-black hover:bg-gray rounded-lg mx-auto"
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
        className="text-hterminal hover:text-terminal transition duration-300 ease-in-out mr-4 relative "
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.codeLink ? <p className='text-sm flex'>SEE CODE <img src={openNew} alt="newTabIcon" className="w-5 h-5 ml-1" /></p>  : <></>}
        
      </a>
    </div>
  );
};


export default ProjectCard;
