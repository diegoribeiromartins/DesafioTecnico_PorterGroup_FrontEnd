import React from "react";

import Button from "../components/Button";

const Error404 = () => {
  return (
    <>
      <div id="page">
        <div>
          <div>Ops! Essa página não existe!</div>

          <div>
            <div>
              <Button>Voltar</Button>
            </div>

            <div>
              <Button>Ir para o início</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
