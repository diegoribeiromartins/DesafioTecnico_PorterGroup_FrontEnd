import React from "react";
import Brand from "../components/Brand";

import Button from "../components/Button";

const Error404 = () => {
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
            <div className="w-2/12 mr-2">
              <Button>Voltar</Button>
            </div>

            <div className="w-2/12 ml-2">
              <Button>Ir para o início</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
