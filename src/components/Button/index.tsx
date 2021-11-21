import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  bg?: string;
  color?: string;
  rounded?: boolean;
}

const Button: React.FC<ButtonType> = ({
  children,
  bg = "bg-white",
  color = "text-black",
  rounded = true,
  ...props
}) => {
  return (
    <button
      className={classNames(
        "block",
        "p-3",
        "w-full",
        "uppercase",
        "font-bold",
        bg,
        color,
        {
          "rounded-full": rounded,
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
