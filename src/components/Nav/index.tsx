import React from "react";

import Brand from "../Brand";
import Button from "../Button";

const Nav = () => {
  return (
    <nav className="py-5 m-none">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="w-3/12 lg:w-2/12">
            <Brand />
          </div>

          <menu className="p-none m-none hidden">
            <Button>Página Inicial</Button>
          </menu>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
