import React from "react";
import MoviePoster from "../../containers/MoviePoster";
import Button from "../Button";
import MovieRating from "../MovieRating";

interface ExpandedMovieItemType {}

const ExpandedMovieItem: React.FC<ExpandedMovieItemType> = () => {
  return (
    <>
      <div>
        <div>
          <div>
            <span>Categoria do Filme</span>
          </div>

          <div>
            Nome do Filme
            <span>2020</span>
          </div>

          <div>
            <MovieRating />
          </div>

          <div>
            <Button>Mais detalhes</Button>
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
