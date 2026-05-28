import { useEffect, useRef } from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import NavBar from './NavBar';

const IS_GA_ENABLED = typeof import.meta.env.VITE_GA_MEASUREMENT_ID === 'string'
  && import.meta.env.VITE_GA_MEASUREMENT_ID.length > 0;

function RoutePageviewTracker() {
  const location = useLocation();
  const isFirstRoute = useRef(true);

  useEffect(() => {
    if (!IS_GA_ENABLED) return;

    if (isFirstRoute.current) {
      isFirstRoute.current = false;
      return;
    }

    ReactGA.send({
      hitType: 'pageview',
      page: `${location.pathname}${location.search}`
    });
  }, [location.pathname, location.search]);

  return null;
}

export default function Home() {
  return (
    <div>
      <RoutePageviewTracker />
      <NavBar />
      <Outlet />
      <ScrollRestoration />
    </div>
  );
}
