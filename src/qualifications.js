import React from 'react';
import Typewriter from 'typewriter-effect';
import { useEffect, useState } from 'react';
import comptia_pdf from './images/CompTIA Security+ ce certificate (1).pdf'
import comptia_badge from './images/SecurityPlus Logo Certified CE.png'
import aws_badge from './images/aws-certified-solutions-architect-associate.png'
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
        <div className='text-center mt-10 font-custom text-terminal rounded-lg text-2xl'>
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
                <div className='flex flex-col'>
                    <a href = 'https://www.credly.com/badges/72993a02-5cba-4252-8a2c-1908f7fc5b3d/public_url' target = "_blank" rel="noreferrer"><p className='mb-2 underline underline-offset-2 hover:text-hterminal'>AWS Solutions Architecht - Associate (2024)</p></a>
                    <img  className='w-28 justify-center place-self-center mt-2 mb-2' src={aws_badge} alt="Comptia Sec+ Badge"></img>
                </div>
                <div className='flex flex-col'>
                    <a href = {comptia_pdf} target = "_blank" rel="noreferrer"><p className='mb-2 underline underline-offset-2 hover:text-hterminal'>CompTIA Security+ (2024)</p></a>
                    <img className='w-28 justify-center	place-self-center mt-2 mb-2' src={comptia_badge} alt="Comptia Sec+ Badge"></img>
                </div>
                <hr className='mt-3 mb-3'/>
                <p className='mb-2'>USCD Online: Advanced Java Object Oriented Programming </p>
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
                <p className='mb-2'>CS 564: Databases</p>
                <p className='mb-2'>CS 540: Artificial Intelligence</p>
                <p className='mb-2'>CS 407: Foundations of Mobile Systems</p>
                <p className='mb-2'>CS 240: Discrete Mathematics</p>
            </div> 
        </div>
        </>
    )
}

export default Qualifications