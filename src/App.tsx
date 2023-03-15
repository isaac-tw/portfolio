import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import ProjectGrid from './components/ProjectGrid';
import About from './components/About';
import InfoGrid from './components/InfoPage';

// TODO:
// 1.Set route to get project -> /work/luggageplus
// 2.GIF
// 3.Under construction
// 4.Propotion

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/portfolio">
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<ProjectGrid />} />
            <Route path='about' element={<About />} />
            <Route path='*' element={<div>ERROR</div>} />
            <Route path='luggageplus' element={<InfoGrid />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
