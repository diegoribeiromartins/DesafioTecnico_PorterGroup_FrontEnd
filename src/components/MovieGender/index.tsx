import React from "react";
import classNames from "classnames";

interface MovieGenterType {
  color?: string;
}

const MovieGender: React.FC<MovieGenterType> = ({
  children,
  color = "white",
}) => {
  const classnames = classNames(
    `border-${color} text-${color}`,
    "rounded-full border-2 py-1 px-3 text-xs uppercase font-bold inline-block opacity-50 hover:opacity-100 cursor-default transition duration-100 ease-in-out m-1"
  );

  return (
    <>
      <span className={classnames}>{children}</span>
    </>
  );
};

export default MovieGender;
