import React from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import { RootState } from "../../store";

interface MoviePosterType {
  file: string;
  rounded?: boolean;
}

const MoviePoster: React.FC<MoviePosterType> = ({ file, rounded = false }) => {
  const { configuration } = useSelector((state: RootState) => state);

  const classnames = classNames(
    "h-full transform scale-100 hover:scale-110 transition duration-100",
    {
      "rounded-md": rounded,
    }
  );

  return (
    <>
      <img
        src={`${configuration.data?.images.secure_base_url}original${file}`}
        className={classnames}
      />
    </>
  );
};

export default MoviePoster;
