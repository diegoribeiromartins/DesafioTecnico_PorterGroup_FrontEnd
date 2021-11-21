import React from "react";

import { FaStar } from "react-icons/fa";

interface MovieRatingType {
  average: number;
  count: number;
}

const MovieRating: React.FC<MovieRatingType> = ({ average, count }) => {
  return (
    <>
      <div className="inline-block mx-4 items-center">
        <div className="flex items-center">
          <FaStar color="yellow" />
          <div className="text-yellow-200 text-md ml-2 align-baseline font-bold">
            {average}
            <small className="text-sm text-white ml-1 inline-block">
              {" "}
              de 10
            </small>
          </div>
        </div>
        <div className="mt-2 text-white text-opacity-70 text-xs">
          {count} {count === 1 ? "voto" : "votos"}
        </div>
      </div>
    </>
  );
};

export default MovieRating;
