import { useRouteError } from "react-router-dom";

const error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>OOPS!!</h1>
      <h1>Something went Wrong</h1>
      <h1>
        {err.status} + {err.sstatusText}
      </h1>
    </div>
  );
};

export default error;
