import React from 'react';
import { Routes, Route } from "react-router-dom";
import Projects from './projects';
import Experience from './experience';
import Navigation from './nav';
import Qualifications from './qualifications';
import Landing from './landing';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/qualifications" element={<Qualifications />} />
        </Routes>
      </div>
      <Navigation />
    </>
  );
}

export default App;
