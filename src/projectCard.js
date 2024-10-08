import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import openNew from './images/open_in_new_24dp_FILL0_wght400_GRAD0_opsz24 (1).png';
import mouse from './images/mouse.png'

const ProjectCard = (props) => {
  const [isLanguageHovered, setIsLanguageHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  const handleClick = () => {
    if(props.disabled === false){
      navigate(`/projects/${props.name}`, { state: { project: props } });
    }
  };

  return (
    <div
      className="font-custom p-4 m-2 border-2 border-hterminal hover:border-terminal bg-black hover:bg-gray rounded-lg mx-auto relative "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <h2 className="text-lg font-bold text-terminal mb-2">&gt; {props.name}</h2>
      <div className="mb-2">
        {props.language.map((language, index) => (
          <div
            key={index}
            className={`text-sm inline-block px-2 py-1 mr-1 rounded ${isLanguageHovered ? 'bg-terminal text-gray' : 'bg-lightgray text-hterminal'}`}
            onMouseEnter={() => setIsLanguageHovered(true)}
            onMouseLeave={() => setIsLanguageHovered(false)}
          >
            {language}
          </div>
        ))}
      </div>
      <p className="text-sm mb-4">{props.description}</p>
      <a
        href={props.codeLink}
        className="text-hterminal hover:text-terminal transition duration-300 ease-in-out mr-4 "
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.codeLink ? (
          <p className="text-sm flex">
            SEE CODE <img src={openNew} alt="newTabIcon" className="w-5 h-5 ml-1" />
          </p>
        ) : null}
      </a>

      {showPopup && props.disabled === false && (
        <div
          className="fixed bg-lightgray text-terminal px-2 py-1 rounded text-xs" 
          style={{ top: `${mousePos.y + 15}px`, left: `${mousePos.x + 20}px`, zIndex: 1000}} 
        >
          <div className='flex'>
          <img className="w-5 mr-2" src={mouse} alt="mouse icon"></img>
            <p className='mt-0.5'>Click for more</p>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
