import React from "react";
import { useNavigate } from "react-router-dom";
import Brand from "../components/Brand";

import Button from "../components/Button";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        id="page"
        className="flex flex-col justify-center items-center h-full w-full text-center"
      >
        <div className="w-full">
          <div className="flex justify-center">
            <div className="mb-10 w-2/12 text-center">
              <Brand />
            </div>
          </div>

          <div className="text-4xl mb-10">Ops! Essa página não existe!</div>

          <div className="flex justify-center items-stretch">
            <div className="md:w-3/12 lg:w-2/12 ml-2">
              <Button onClick={() => navigate("/")}>Ir para o início</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
