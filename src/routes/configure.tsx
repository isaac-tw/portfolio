import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';

import {
  projects,
  misc
} from '../data/projects';
import AboutSection from '../components/AboutSection';
import ErrorPage from '../components/ErrorPage';
import Home from '../components/Home';
import InfoPage, {
  loader as infoPageLoader
} from '../components/InfoPage';
import ProjectGrid from '../components/ProjectGrid';

const routes = createRoutesFromElements(
  <Route path="/" element={<Home />}>
    <Route index element={<ProjectGrid projects={projects} />} />
    <Route path="misc" element={<ProjectGrid projects={misc} />} />
    <Route path="about" element={<AboutSection />} />
    <Route
      path="work/:projectId"
      element={<InfoPage />}
      loader={infoPageLoader}
      errorElement={<ErrorPage subject="Project" />}
    />
    <Route path="*" element={<ErrorPage subject="Page" />} />
  </Route>
);

const router = createBrowserRouter(
  routes,
  { basename: '/' }
);

export default router;
