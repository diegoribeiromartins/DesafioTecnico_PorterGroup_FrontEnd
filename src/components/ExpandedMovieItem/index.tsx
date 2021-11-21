import React from "react";
import { useNavigate } from "react-router-dom";

import MoviePoster from "../../containers/MoviePoster";
import Button from "../Button";
import MovieGender from "../MovieGender";
import MovieRating from "../MovieRating";

import { MovieType } from "../../types/Movies.interface";
import MovieBackDrop from "../MovieBackDrop";

interface ExpandedMovieItemType {
  detach: MovieType;
}

const ExpandedMovieItem: React.FC<ExpandedMovieItemType> = ({ detach }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full relative py-20">
        <MovieBackDrop address={detach.backdrop_path || ""} />
        <div className="container mx-auto grid grid-cols-3 gap-10 items-center">
          <div className="col-span-2 text-right z-10">
            <div className="text-4xl text-light my-3">
              {detach?.title || ""}
              {detach?.release_date && (
                <span className="block text-sm ml-3 text-pink-400">
                  {new Date(detach.release_date).toLocaleDateString("pt-br", {
                    year: "numeric",
                  })}
                </span>
              )}
            </div>

            <div>
              <MovieRating
                average={detach?.vote_average || 0}
                count={detach?.vote_count || 0}
              />
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
                onClick={() => navigate(`/movie/${detach?.id}`)}
              >
                Mais detalhes
              </Button>
            </div>
          </div>

          <div className="h-72 w-full">
            <MoviePoster file={detach.poster_path} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpandedMovieItem;
