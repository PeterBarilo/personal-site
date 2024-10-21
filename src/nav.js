import React, { useEffect, useState } from 'react';

function Navigation() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div> 
      <nav className={`font-custom text-terminal rounded-lg shadow-lg ${show ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 2s' }}>
        <div className=''>
          <ul className="mb-[3vw] text-l flex text-center ml-0 flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-row justify-center mt-10 xl:mt-24 lg:mt-24 md:mt-24 sm:mt-24">
            <li className='lg:mx-20 md:mx-10 sm:mx-5 mb-2 hover:text-hterminal transition-colors duration-500 relative'>
              <a href="/">About</a>
              <span className="line"></span>
            </li>
            <li className='lg:mx-20 md:mx-10 sm:mx-5 mb-2 hover:text-hterminal transition-colors duration-500 relative'>
              <a href="/projects">Projects</a>
              <span className="line"></span>
            </li>
            <li className='lg:mx-20 md:mx-10 sm:mx-5 mb-2 hover:text-hterminal transition-colors duration-500 relative'>
              <a href="/experience">Experience</a>
              <span className="line"></span>
            </li>
            <li className='lg:mx-20 md:mx-10 sm:mx-5 mb-2 hover:text-hterminal transition-colors duration-500 relative'>
              <a href="/qualifications">Qualifications</a>
              <span className="line"></span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
