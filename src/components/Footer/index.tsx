import React from "react";

import Brand from "../Brand";

function Footer() {
  return (
    <>
      <footer className="bg-gray-50 text-gray-400 shadow-inner shadow-xl mt-5">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-4 px-2">
            <div className="w-4/12 lg:w-1/12">
              <Brand color="medium" />
            </div>

            <div className="uppercase font-bold text-sm">
              Desenvolvido por{" "}
              <a
                href="https://wa.me/5521967104967"
                className="text-green-500 underline"
              >
                Diego R. Martins
              </a>
              .
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
