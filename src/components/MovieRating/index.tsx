import React from "react";

import { FaStar } from "react-icons/fa";

interface MovieRatingType {
  average: number;
  count: number;
  dark?: boolean;
}

const MovieRating: React.FC<MovieRatingType> = ({
  average,
  count,
  dark = false,
}) => {
  return (
    <>
      <div className="inline-block mx-4 items-center">
        <div className="flex items-center">
          <FaStar color={dark ? "black" : "yellow"} />
          <div
            className={`text-${
              dark ? "black" : "yellow-200"
            } text-md ml-2 align-baseline font-bold`}
          >
            {average}
            <small
              className={`text-sm text-${
                dark ? "black" : "white"
              } ml-1 inline-block`}
            >
              {" "}
              de 10
            </small>
          </div>
        </div>
        <div
          className={`mt-2 text-${
            dark ? "black" : "white"
          } text-opacity-70 text-xs text-center font-medium`}
        >
          {count} {count === 1 ? "voto" : "votos"}
        </div>
      </div>
    </>
  );
};

export default MovieRating;
