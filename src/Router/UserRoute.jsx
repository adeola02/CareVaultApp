import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { userLoggedIn } from "../Global/slice";

const UserRoute = ({ element, children }) => {
  const isLoggedIn = useSelector((state) => state?.app?.user?.isLoggedIn);
  const loggedInUser = useSelector((state) => state?.app?.loggedInUser);
  console.log(loggedInUser);
  console.log(isLoggedIn);
  // const isLoggedIn = useSelector((state) => state?.app?.user?.isLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("userii");
    dispatch(userLoggedIn(isLoggedIn));
  }, []);

  // console.log(isLoggedIn);
  return loggedInUser ? (
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
