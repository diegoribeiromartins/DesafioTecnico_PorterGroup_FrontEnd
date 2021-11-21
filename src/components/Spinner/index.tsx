import React from "react";
import { CgSpinner } from "react-icons/cg";

interface SpinnerType {
  size?: string | number;
  color?: string;
}

const Spinner: React.FC<SpinnerType> = ({
  size = "2rem",
  color = "#707070",
}) => {
  return <CgSpinner className="animate-spin" size={size} color={color} />;
};

export default Spinner;
