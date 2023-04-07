import React from 'react';
import { RouterProvider } from "react-router-dom";
import router from './routes/configure'

// TODO:
// (DONE) 1. Set route to get project -> /work/luggageplus
// (DONE) 2. GIF
// (DONE) 3. Under construction
// (DONE) 4. Propotion
// (DONE) 5. Favicon
// (DONE) 6. Error page
// 7. Linter
// 8. Remove all default stuffs
// 9. Update all ts in codebase
// 10. mailto
// 11. reCAPTCHA
// 12. Lazyload offset
// 13. Change @media to mixin

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
