import React from 'react';
import { RouterProvider } from "react-router-dom";
import router from './routes/configure'

// TODO:
// (DONE) 1. Set route to get project -> /work/luggageplus
// 2. GIF
// 3. Under construction
// 4. Propotion
// 5. Favicon
// 6. Error page
// 7. Linter

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
