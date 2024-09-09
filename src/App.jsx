import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router";
import SignUp from "./Auth/SignUp";


const App = () => {
  return (
    <>
      <RouterProvider router={router} 
      
      />
    </>
  );
};

export default App;
