import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { RootState } from "../../store";

import Brand from "../Brand";
import { smooth } from "../../helpers/smooth";

const Nav = () => {
  const { navigation } = useSelector((state: RootState) => state);

  const brandState = classNames("w-2/12 lg:w-1/12");

  return (
    <nav className="py-5 m-none">
      <div className="container mx-auto">
        <div
          className={`flex items-center ${
            navigation.showMenu ? "justify-between" : "justify-center"
          }`}
        >
          <div className={brandState}>
            <Brand />
          </div>

          {navigation.showMenu && (
            <menu className="p-none m-none">
              <Link
                to="/"
                className="uppercase bg-white text-blue-700 rounded-full py-1 px-5 inline-block font-bold"
                onClick={() => smooth()}
              >
                Página Inicial
              </Link>
            </menu>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
