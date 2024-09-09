import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <>
      <h1>Something went wrong</h1>
      <p>{error.data || error.message}</p>
      {/* <Button onClick={() => navigate}>&larr; Go back</Button> */}
    </>
  );
};

export default Error;
