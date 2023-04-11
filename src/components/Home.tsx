import React from 'react';
import { Outlet, ScrollRestoration } from "react-router-dom";
import NavBar from './NavBar';
import Dialog from './shared/Dialog/Dialog'

export default function Home() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Dialog />
      <ScrollRestoration />
    </div>
  );
}
