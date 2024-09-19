import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const UserRoute = ({ element, children }) => {
  const isLoggedIn = useSelector((state) => state?.app?.user?.isLoggedIn);
  // const isLoggedIn = useSelector((state) => state?.app?.user?.isLoggedIn);
console.log(isLoggedIn)
  return isLoggedIn ? (
    children ? (
      <>{children}</>
    ) : (
      <>{element}</>
    )
  ) : (
    <Navigate to="/log-in" />
  );
};

export default UserRoute;
