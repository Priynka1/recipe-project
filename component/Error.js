import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <div className="error-div">
        <h1>{err.status}</h1>
        <h2>{err.statusText}</h2>
        <h3>{err.error.message}</h3>
        <h4>{err.data}</h4>
      </div>
    </>
  );
};
export default Error;
