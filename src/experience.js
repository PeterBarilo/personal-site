import React from 'react';
import Typewriter from 'typewriter-effect';
import { useEffect, useState } from 'react';
import ExperienceCard from './experienceCard';


function Experience() {

    const experience = [
      {
        name: 'Software Engineer',
        company: 'AbbVie',
        date:  'Jan 2025 - Present',
        description: "Developed and deployed scalable solutions using Python, AWS, and Docker with contributions to key projects. I integrated Large Language Models into analytical workflows by fine-tuning pre-trained models and optimizing infrastructure. I implemented CI/CD pipelines using AWS CodePipeline and Docker",
        link: "https://www.linkedin.com/company/abbvie/"
      },
      // {
      //   name: 'Database Researcher',
      //   company: 'University of Wisconsin-Madison',
      //   date:  'Nov 2024 - Present',
      //   description: "Developed and	Conducted research under Professor Xiangyao Yu on GPU-acceleration for the DuckDB database system, leveraging CUDA programming to optimize query processing and data management. I benchmarked the database to identify potential bottlenecks and performance issues, demonstrating significant speedup in high-concurrency workloads. I developed parallel algorithms for database operations such as sorting, joins, and aggregation, achieving up to 150% improvement in processing speed",
      //   link: "https://www.linkedin.com/school/uwmadison/"
      // },
        {
          name: 'Machine Learning and Java Instructor',
          company: 'iD Tech',
          date:  'May 2023 - Sep 2023',
          description: 'I led comprehensive instruction in Python-based Machine Learning and advanced Java for a clientele who collectively spent over $75,000. I further drove the enhancement of my managerial skills and leadership prowess, alongside the continuous expansion of technical proficiencies.',
          link: "https://www.linkedin.com/company/id-tech-camps/"
        },
        {
          name: 'Co-founder, Software Engineer',
          company: 'Developer Secure',
          date:  'Sep 2023 - June 2024',
          description: "I developed a business model that helps local comapnies with improving their online presence. We focuse on Web Development, ad creation, and SEO management.",
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
            <div className=' text-center mt-10 text-terminal rounded-lg  text-2xl'>
                <Typewriter
                onInit={(typewriter) => {
                    typewriter.pasteString("> ").typeString("My Experience").pauseFor(500).start().typeString(": ").pauseFor(600).typeString(" ")
                }}
            />
            </div>
            <div className={`flex flex-col mx-[20vw] mt-[3vw] mb-[-9vw] ${show ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 2s' }}>
        {experience.map((project, index) => (
          <ExperienceCard
            key={index}
            name={project.name}
            company={project.company}
            description={project.description}
            link={project.link}
            date={project.date}
          />
        ))}
      </div>
        </div>
    )
}

export default Experience