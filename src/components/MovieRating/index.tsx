import React from "react";

import { FaStar } from "react-icons/fa";

interface MovieRatingType {}

const MovieRating: React.FC<MovieRatingType> = () => {
  return (
    <>
      <div>
        <FaStar />
        <div>
          7<small>/10</small>
        </div>
      </div>
    </>
  );
};

export default MovieRating;
