import React from "react";
import Button from "../Button";
import MovieRating from "../MovieRating";

interface MovieItemType {}

const MovieItem: React.FC<MovieItemType> = () => {
  return (
    <>
      <div className="grid grid-cols-5 gap-3 items-stretch justify-center">
        <div className="relative shadow-2xl">
          <div className="w-full px-2">
            <div className="text-center">
              <div className="font-light text-2xl drop-shadow-sm">
                Nome do filme
              </div>
              <div>
                <MovieRating />
              </div>
            </div>

            <div className="my-2">
              <Button
                flat={true}
                hover="hover:bg-yellow-200 hover:text-black"
                transition="transition duration-200 ease-in-out"
                padding="py-2"
                color="text-yellow-200"
              >
                Ver detalhes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieItem;
