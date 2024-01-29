import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="container-max px-4 my-4 text-center py-8 flex items-center justify-center">
      <div className="space-y-4">
        <h1 className="text-lg font-semibold">
          Oops!! Something went wrong!!😲
        </h1>
        <h3 className="text-lg font-semibold">
          {err.status} : {err.statusText}
        </h3>
        <Link
          className="font-bold  my-4"
          to="/"
        >
          <span className="underline text-red-700">Click here </span> to go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
