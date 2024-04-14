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
    <div className={`font-custom`}>
        <div className='fixed top-16 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-.75 text-terminal rounded-lg text-2xl'>
        <Typewriter
            onInit={(typewriter) => {
                typewriter.pasteString("> ").typeString("Peter Barilo").pauseFor(500).start().typeString(": ").pauseFor(600).typeString("Software Developer")
            }}
        />
        </div>
        <div className={`fixed top-40 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-.75 text-terminal text-l ${show ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 2s' }}>
            <h2 className='mt-48'>Hello!</h2>
            <br></br>
            <p>My name is Peter Barilo and I am a undergraduate studying computer science at the University of Wisconsin-Madison.</p>
            <p> &gt; grad. 2025</p>
            <br></br>
            <p>I am currently looking for a position as a <b>Software/Web Developer</b>, <b>Machine Learning Engineer</b>, or <b>Cybersecurity Analyst</b>.</p>

        
        </div>

        <div className={`flex justify-center space-x-20 mt-96 pt-14 ${show ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 2s' }}>
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
