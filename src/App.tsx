import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/configure';

function App(): JSX.Element {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
