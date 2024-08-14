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
        <div className='text-center mt-5 font-custom text-terminal rounded-lg text-2xl'>
            <Typewriter
            onInit={(typewriter) => {
                typewriter.pasteString("> ").typeString("My Qualifications").pauseFor(500).start().typeString(": ").pauseFor(600).typeString(" ")
            }}
        />
        </div>
        <div className={`flex flex-col  text-center mx-[20vw] mt-[3vw] mb-[-9vw] text-terminal font-custom text-l ${show ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 2s' }}>
            <div className='p-4 m-2 border-2 border-hterminal hover:border-terminal bg-black hover:bg-gray rounded-lg mx-[5vw]'>
                <h2 className='text-md'>&gt; Certifications: </h2>
                <br></br>
                <p className='mb-2'>CompTIA Security+</p>
                <p className='mb-2'>USCD Online: Advanced Java Object Oriented Programming</p>
                <p className='mb-2'>Udemy: Python Mastery</p>
                <p className='mb-2'>Udemy: Machine Learning with Python</p>
            </div>
            <br></br>
            
            <div className='p-4 m-2 border-2 border-hterminal hover:border-terminal bg-black hover:bg-gray rounded-lg mx-[5vw]'>
                <h2 className='text-md '>&gt; Significant Classwork: </h2>
                <br></br>
                <p className='mb-2'>CS 577: Algorithms</p>
                <p className='mb-2'>CS 537: Operating Systems</p>
                <p className='mb-2'>CS 571: User Interfaces</p>
                <p className='mb-2'>CS 540: Artificial Intelligence</p>
                <p className='mb-2'>CS 407: Foundations of Mobile Systems</p>
                <p className='mb-2'>CS 240: Discrete Mathematics</p>
            </div>

        
        </div>
        </>
    )
}

export default Qualifications