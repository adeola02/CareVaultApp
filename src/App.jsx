import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
