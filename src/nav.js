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
      <nav className={`font-custom fixed bottom-16 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-.75 text-terminal rounded-lg shadow-lg ${show ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 2s' }}>
        <div className='flex justify-center'>
          <ul className="text-l flex justify-center space-x-40 ">
            <li className='hover:text-hterminal transition-colors duration-500 relative'>
              <a href="/">About</a>
              <span className="line"></span>
            </li>
            <li className='hover:text-hterminal transition-colors duration-500 relative'>
              <a href="/projects">Projects</a>
              <span className="line"></span>
            </li>
            <li className='hover:text-hterminal transition-colors duration-500 relative'>
              <a href="/experience">Experience</a>
              <span className="line"></span>
            </li>
            <li className='hover:text-hterminal transition-colors duration-500 relative'>
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
