import React from "react";

import { FaStar } from "react-icons/fa";

interface MovieRatingType {}

const MovieRating: React.FC<MovieRatingType> = () => {
  return (
    <>
      <div className="inline-flex mx-4 items-center">
        <FaStar color="yellow" />
        <div className="text-yellow-200 text-md ml-2 align-baseline font-bold">
          7
          <small className="text-sm text-white ml-1 inline-block"> de 10</small>
        </div>
      </div>
    </>
  );
};

export default MovieRating;
