import React from 'react';
import Typewriter from 'typewriter-effect';
import { useEffect, useState } from 'react';
import ExperienceCard from './experienceCard';


function Experience() {

    const experience = [
        {
          name: 'Machine Learning and Java Instructor',
          company: 'iD Tech',
          description: 'Led comprehensive training sessions in Python-based Machine Learning and advanced Java, cultivating a highly satisfied clientele who collectively spent over $75,000. Drove the enhancement of managerial skills and leadership prowess, alongside the continuous expansion of technical proficiencies.',
          link: "https://www.linkedin.com/company/id-tech-camps/"
        },
        {
          name: 'Co-founder, Software Engineer',
          company: 'Developer Secure',
          description: "I developed a business model that helps local comapnies with improving their online presence. We focused on Web Development, ad creation, and SEO management.",
          link: "https://www.linkedin.com/company/developer-secure/"
        },
      ];

      const [show, setShow] = useState(false);

      useEffect(() => {
        const timer = setTimeout(() => {
          setShow(true);
        }, 1000); 
        return () => clearTimeout(timer);
      }, []);

    return(
        <div className="font-custom text-terminal">
            <div className=' fixed top-16 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-.75 rounded-lg text-2xl'>
                <Typewriter
                onInit={(typewriter) => {
                    typewriter.pasteString("> ").typeString("My Experience").pauseFor(500).start().typeString(": ").pauseFor(600).typeString(" ")
                }}
            />
            </div>
            <div className={`fixed top-96 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-1/2 max-h-128 overflow-y-auto ${show ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 2s' }}>
        {experience.map((project, index) => (
          <ExperienceCard
            key={index}
            name={project.name}
            company={project.company}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
        </div>
    )
}

export default Experience