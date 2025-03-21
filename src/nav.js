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
        <ul className="mb-[3vw] text-l flex text-center ml-0 flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-row justify-center mt-10 xl:mt-48 lg:mt-28 md:mt-28 sm:mt-28">
  <li className="lg:mx-20 md:mx-10 sm:mx-5 mb-2 relative group">
    <a href="/" className="relative z-10 text-terminal group-hover:text-terminal transition-colors duration-500">
      About
    </a>
    {window.location.pathname === "/" && (
      <span className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-hterminal rounded-full"></span>
    )}
    <span className="absolute inset-0 bg-hterminal opacity-0 group-hover:opacity-100 group-hover:-inset-1 transition-all duration-500"></span>
  </li>
  <li className="lg:mx-20 md:mx-10 sm:mx-5 mb-2 relative group">
    <a href="/projects" className="relative z-10 text-terminal group-hover:text-terminal transition-colors duration-500">
      Projects
    </a>
    {window.location.pathname === "/projects" && (
      <span className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-hterminal rounded-full"></span>
    )}
    <span className="absolute inset-0 bg-hterminal opacity-0 group-hover:opacity-100 group-hover:-inset-1 transition-all duration-500"></span>
  </li>
  <li className="lg:mx-20 md:mx-10 sm:mx-5 mb-2 relative group">
    <a href="/experience" className="relative z-10 text-terminal group-hover:text-terminal transition-colors duration-500">
      Experience
    </a>
    {window.location.pathname === "/experience" && (
      <span className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-hterminal rounded-full"></span>
    )}
    <span className="absolute inset-0 bg-hterminal opacity-0 group-hover:opacity-100 group-hover:-inset-1 transition-all duration-500"></span>
  </li>
  <li className="lg:mx-20 md:mx-10 sm:mx-5 mb-2 relative group">
    <a href="/qualifications" className="relative z-10 text-terminal group-hover:text-terminal transition-colors duration-500">
      Qualifications
    </a>
    {window.location.pathname === "/qualifications" && (
      <span className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-hterminal rounded-full"></span>
    )}
    <span className="absolute inset-0 bg-hterminal opacity-0 group-hover:opacity-100 group-hover:-inset-1 transition-all duration-500"></span>
  </li>
</ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
