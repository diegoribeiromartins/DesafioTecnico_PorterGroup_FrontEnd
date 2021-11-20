import React from "react";
import Button from "../Button";
import MovieRating from "../MovieRating";

interface MovieItemType {}

const MovieItem: React.FC<MovieItemType> = () => {
  return (
    <>
      <div>
        <div>
          <div>Nome do filme</div>
          <div>
            <MovieRating />
          </div>
        </div>

        <div>
          <Button>Ver detalhes</Button>
        </div>
      </div>
    </>
  );
};

export default MovieItem;
