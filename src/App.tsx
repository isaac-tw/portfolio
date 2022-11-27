import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import ProjectGrid from './components/ProjectGrid';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/portfolio">
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<ProjectGrid />} />
            <Route path='about' element={<About />} />
            <Route path='*' element={<div>ERROR</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
