import React, { ButtonHTMLAttributes } from "react";

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonType> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
