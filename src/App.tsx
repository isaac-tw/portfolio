import React from 'react';
import NavBar from './components/NavBar';
import ProjectGrid from './components/ProjectGrid';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <ProjectGrid />
    </div>
  );
}

export default App;
