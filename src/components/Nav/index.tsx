import React from "react";

import Brand from "../Brand";
import Button from "../Button";

const Nav = () => {
  return (
    <nav>
      <div>
        <Brand />
      </div>

      <menu>
        <Button>Página Inicial</Button>
      </menu>
    </nav>
  );
};

export default Nav;
