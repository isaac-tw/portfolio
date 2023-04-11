import React, { createContext, useReducer } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/configure";
import dialogReducer from "./components/shared/Dialog/reducer";
import { dialog as initialState } from "./initialStates";

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
// (DONE) 12. Lazyload offset
// (DONE) 13. Change @media to @mixin

type InitialStateType = {
  open: boolean;
  title: string | null;
  bodyComponent: React.ElementType | null;
}

export const ReducerContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});

export default function App() {
  const [state, dispatch] = useReducer(dialogReducer, initialState);
  return (
    <div className="App">
      <ReducerContext.Provider value={{state, dispatch}}>
        <RouterProvider router={router} />
      </ReducerContext.Provider>
    </div>
  );
}
