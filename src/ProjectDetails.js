import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import openNew from './images/open_in_new_24dp_FILL0_wght400_GRAD0_opsz24 (1).png';



const ProjectDetails = () => {
  const location = useLocation();
  const { project } = location.state;

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div className="p-6 font-custom text-hterminal mx-[20vw] mt-[3vw] mb-[-9vw]">
      <h1 className="text-2xl text-terminal mb-10 text-center">{project.name}</h1>
      <h2 className="mb-2 text-xl text-terminal">{project.introTitle}</h2>
      <p>{project.intro}</p>
      {project.img !== '' ? (
        <img
        className='mt-10 mb-5 border-solid border-2 border-terminal rounded-lg shadow-[0_0px_15px_1px_#4AF626] hover:shadow-[0_0px_500px_200px_#050505] hover:border-bgcolor hover:scale-150 transition-transform duration-500 ease-in-out'
        src={project.img}
        alt={project.name}
        />
      ) : <></>}
      
      {project.link && (
        <div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className=" flex text-hterminal hover:text-terminal"
          >
            
            <p>{project.name}</p>
            <img className='w-5 h-5 ml-1 mt-0.5' src={openNew} alt="open in new tab"></img>
          </a>
        </div>
      )}
      <h2 className='mt-5 mb-2 text-xl text-terminal'>Approach</h2>
      <ul className="list-disc ml-5">
        {project.approach.map((appr, index) => (
          <li className='mb-2' key={index}>{appr}</li>
        ))}
      </ul>
      <h2 className='mt-5 mb-2 text-xl text-terminal'>Challenges</h2>
      <ul className="list-disc ml-5">
        {project.challenges.map((ch, index) => (
          <li className='mb-2' key={index}>{ch}</li>
        ))}
      </ul>
      <h2 className='mt-5 mb-2 text-xl text-terminal'>Outcome</h2>
      <p>{project.outcome}</p>

      <div className='flex flex-row justify-between	'>
        <div>
            <h2 className="text-xl text-terminal  mt-5 mb-2">Languages Used:</h2>
            <ul className="list-disc ml-5">
                {project.language.map((lang, index) => (
                <li className='mb-1' key={index}>{lang}</li>
                ))}
            </ul>
        </div>
        <div>
            <h2 className="text-xl text-terminal mt-5 mb-2">Skills Practiced:</h2>
            <ul className="list-disc ml-5">
                {project.skills.map((lang, index) => (
                <li className='mb-1' key={index}>{lang}</li>
                ))}
            </ul>
        </div>
      </div>
      
      {project.codeLink && (
        <div className="mt-4">
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className=" flex text-hterminal hover:text-terminal"
          >
            
            <p>View Code on GitHub</p>
            <img className='w-5 h-5 ml-1 mt-0.5' src={openNew} alt="open in new tab"></img>
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
