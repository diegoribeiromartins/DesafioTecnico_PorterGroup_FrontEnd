import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  bg?: string;
  color?: string;
  borderColor?: string;
  rounded?: boolean;
  outline?: boolean;
  flat?: boolean;
  inline?: boolean;
  hover?: string;
  focus?: string;
  transition?: string;
  size?: string;
  padding?: false | string;
}

const Button: React.FC<ButtonType> = ({
  children,
  bg = "bg-white",
  color = "text-black",
  borderColor = "border-white",
  size = "md",
  rounded = true,
  outline = false,
  flat = false,
  inline = false,
  padding = false,
  hover = "",
  focus = "",
  transition = "",
  ...props
}) => {
  const classes = classNames(
    inline ? "inline-block" : "block w-full",
    padding ? padding : "py-3 px-6",
    `text-${size}`,
    "uppercase",
    "font-bold",
    flat
      ? "bg-transparent border-none"
      : outline
      ? `bg-transparent border-2 ${borderColor}`
      : bg,
    color,
    hover,
    focus,
    transition,
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
