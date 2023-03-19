import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from '../components/Home';
import ProjectGrid from '../components/ProjectGrid';
import About from '../components/About';
import InfoPage from '../components/InfoPage';

const routes = createRoutesFromElements(
  <Route path="/" element={<Home />}>
    <Route index element={<ProjectGrid />} />
    <Route path="about" element={<About />} />
    <Route path="*" element={<div>ERROR</div>} />
    <Route
      path="work/:projectId"
      element={<InfoPage />}
      loader={({ params }: any) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        params.projectId;
      }}
    />
  </Route>
);

const router = createBrowserRouter(
  routes,
  { basename: "/portfolio" },
);

export default router;
