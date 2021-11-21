import React from "react";
import { MovieType } from "../../types/Movies.interface";
import Button from "../Button";
import MovieRating from "../MovieRating";

interface MovieItemType {
  movie: MovieType;
}

const MovieItem: React.FC<MovieItemType> = ({ movie }) => {
  return (
    <>
      <div className="relative shadow-2xl">
        <div className="w-full px-2">
          <div className="text-center">
            <div className="font-light text-2xl drop-shadow-sm">
              {movie.title}
            </div>
            <div>
              <MovieRating
                average={movie.vote_average}
                count={movie.vote_count}
              />
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
    </>
  );
};

export default MovieItem;
