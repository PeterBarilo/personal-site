import React from 'react';
import Typewriter from 'typewriter-effect';
import { useEffect, useState } from 'react';

function Qualifications() {

    const [show, setShow] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShow(true);
      }, 1000); 
      return () => clearTimeout(timer);
    }, []);

    return(
        <>
        <div className='font-custom fixed top-16 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-.75 text-terminal rounded-lg text-2xl'>
            <Typewriter
            onInit={(typewriter) => {
                typewriter.pasteString("> ").typeString("My Qualifications").pauseFor(500).start().typeString(": ").pauseFor(600).typeString(" ")
            }}
        />
        </div>
        <div className={`font-custom fixed top-40 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-.75 text-terminal text-l ${show ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 2s' }}>
            <h2 className='text-md mt-96'>&gt; Certifications: </h2>
            <br></br>
            <p className='mb-2'>CompTIA Security+</p>
            <p className='mb-2'>USCD Online: Advanced Java Object Oriented Programming</p>
            <p className='mb-2'>Udemy: Python Mastery</p>
            <p className='mb-2'>Udemy: Machine Learning with Python</p>
            <br></br>
            <h2 className='text-md mt-5'>&gt; Significant Classwork: </h2>
            <br></br>
            <p className='mb-2'>CS 577: Algorithms</p>
            <p className='mb-2'>CS 537: Operating Systems</p>
            <p className='mb-2'>CS 571: User Interfaces</p>
            <p className='mb-2'>CS 540: Artificial Intelligence</p>
            <p className='mb-2'>CS 407: Foundations of Mobile Systems</p>


        
        </div>
        </>
    )
}

export default Qualifications