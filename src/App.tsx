import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";

import AppProviders from "./AppProviders";
function App() {
  return (
    <>
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>
    </>
  );
}

export default App;
