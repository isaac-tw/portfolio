import { Outlet, ScrollRestoration } from 'react-router-dom';
import NavBar from './NavBar';

export default function Home(): JSX.Element {
  return (
    <div>
      <NavBar />
      <Outlet />
      <ScrollRestoration />
    </div>
  );
}
