import React, { useEffect } from "react";
import { ToggleNoScrollToElement } from "../../helpers/element-scroll";
import Spinner from "../Spinner";

interface LoadingType {}

const Loading: React.FC<LoadingType> = ({ children }) => {
  useEffect(() => {
    const bodyEl = document.querySelector("body");
    if (bodyEl) ToggleNoScrollToElement(bodyEl);

    return () => {
      if (bodyEl) ToggleNoScrollToElement(bodyEl);
    };
  }, []);

  return (
    <div className="w-full h-full z-50 fixed top-0 left-0 bg-white flex justify-center items-center flex-col bg-white">
      <Spinner />
      {children && (
        <div className="font-bold text-md uppercase w-full text-center text-gray-500 mt-8">
          {children}
        </div>
      )}
    </div>
  );
};

export default Loading;
