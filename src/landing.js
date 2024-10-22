import React from 'react';
import Typewriter from 'typewriter-effect';
import githubLogoDefault from './images/githubDefault.png';
import githubLogoHover from './images/githubAlt.png';
import linkedinLogoDefault from './images/linkedDefault.png';
import linkedinLogoHover from './images/linkedAlt.png';
import { useEffect, useState } from 'react';


function Landing() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
          setShow(true);
        }, 2500); 
        return () => clearTimeout(timer);
      }, []);

  return (
    <div className={`font-custom  `}>
        <div className='text-center mt-10 text-terminal rounded-lg  text-2xl'>
        <Typewriter
            onInit={(typewriter) => {
                typewriter.pasteString("> ").typeString("Peter Barilo").pauseFor(500).start().typeString(": ").pauseFor(600).typeString("Software Developer")
            }}
        />
        </div>
        <div className={`flex flex-col flex-auto px-8 2xl:px-[25vw] xl:px-80 lg:px-40 md:px-20 sm:px-16  mt-20 xl:mt-40 lg:mt-28 md:mt-24 sm:mt-20 text-terminal text-l ${show ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 2s' }}>
            <h2 className=''>Hello!</h2>
            <br></br>
            <p>My name is Peter Barilo and I am an undergraduate studying computer science at the University of Wisconsin-Madison.</p>
            <p> &gt; grad. 2025</p>
            <br></br>
            <p>I am best able to demonstrate my skills in the following roles: <b>Software/Web Developer</b>, <b>Cloud Solutions Architect</b>, or <b>Cybersecurity Analyst</b>.</p>
            <br></br>
            <p>Experienced in full-stack development, machine learning, and cloud computing with AWS. Possesses certifications in CompTIA Security+ and AWS Solutions Architect. 
              Proven leadership and teaching experience, having instructed advanced programming courses at iD Tech and led several groups. Developed multiple scalable web applications utilizing technologies such as 
              React, Python, and AWS. Fluent in English, Russian, and German, and proficient in cybersecurity, networking, and encryption.</p>

        
        </div>

        <div className={`flex flex-auto mt-10 lg:mb-[-100px] sm:mb-[-0px] justify-center ${show ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 2s' }}>
          <a href="https://github.com/PeterBarilo" target="_blank" rel="noopener noreferrer" className="mr-4 relative">
              <img src={githubLogoHover} alt="GitHub" className="w-14 h-14" />
              <img src={githubLogoDefault} alt="GitHub" className="w-14 h-14 absolute top-0 left-0 opacity-0 transition-opacity duration-300 hover:opacity-100" />
          </a>
          <a href="https://www.linkedin.com/in/peter-barilo-352360230/" target="_blank" rel="noopener noreferrer" className="relative">
              <img src={linkedinLogoHover} alt="LinkedIn" className="w-14 h-14" />
              <img src={linkedinLogoDefault} alt="LinkedIn" className="w-14 h-14 absolute top-0 left-0 opacity-0 transition-opacity duration-300 hover:opacity-100" />
          </a>
      </div>
    </div>
  );
}

export default Landing;
