import React from "react";
import MoviePoster from "../../containers/MoviePoster";
import Button from "../Button";
import MovieGender from "../MovieGender";
import MovieRating from "../MovieRating";

interface ExpandedMovieItemType {}

const ExpandedMovieItem: React.FC<ExpandedMovieItemType> = () => {
  return (
    <>
      <div className="w-full grid grid-cols-3 gap-10 items-center">
        <div className="col-span-2 text-right">
          <div>
            <MovieGender>Categoria</MovieGender>
          </div>

          <div className="text-4xl text-light my-3">
            Nome do Filme
            <span className="align-baseline text-sm ml-3 text-pink-400">
              2020
            </span>
          </div>

          <div>
            <MovieRating />
          </div>

          <div className="my-3">
            <Button
              inline={true}
              outline={true}
              borderColor="border-red-500"
              color="text-red-500"
              hover="hover:bg-red-500 hover:text-white"
              transition="transition duration-100 ease"
              size="sm"
              padding="py-1 px-6"
            >
              Mais detalhes
            </Button>
          </div>
        </div>

        <div>
          <MoviePoster />
        </div>
      </div>
    </>
  );
};

export default ExpandedMovieItem;
