// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// const AdminRoute = ({ element, children }) => {
//   const isAdmin = useSelector((state) => state.app?.user?.isAdmin);

//   return isAdmin ? (
//     children ? (
//       <>{children}</>
//     ) : (
//       <>{children}</>
//     )
//   ) : (
//     <Navigate to={"/log-in"} />
//   );
// };

// export default AdminRoute;


import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const isAdmin = useSelector((state) => state.app?.user?.isAdmin);

  return isAdmin ? children : <Navigate to="/log-in" />;
};

export default AdminRoute;
