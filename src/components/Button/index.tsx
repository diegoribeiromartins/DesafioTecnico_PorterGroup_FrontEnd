import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  bg?: string;
  color?: string;
  borderColor?: string;
  rounded?: boolean;
  outline?: boolean;
}

const Button: React.FC<ButtonType> = ({
  children,
  bg = "bg-white",
  color = "text-black",
  borderColor = "border-white",
  rounded = true,
  outline = false,
  ...props
}) => {
  const classes = classNames(
    "block",
    "p-3",
    "w-full",
    "uppercase",
    "font-bold",
    outline ? `bg-transparent border-2 ${borderColor}` : bg,
    color,
    {
      "rounded-full": rounded,
    }
  );

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
