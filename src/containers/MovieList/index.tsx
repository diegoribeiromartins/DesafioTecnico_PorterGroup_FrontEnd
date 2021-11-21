import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

import MovieItem from "../../components/MovieItem";
import NotFound from "../../components/NotFound";

const MovieList = () => {
  const { movies } = useSelector((state: RootState) => state);

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 items-stretch justify-center">
          {movies.list?.results.map((movie, index) => (
            <MovieItem movie={movie} key={index} />
          )) || <NotFound />}
        </div>
      </div>
    </>
  );
};

export default MovieList;
