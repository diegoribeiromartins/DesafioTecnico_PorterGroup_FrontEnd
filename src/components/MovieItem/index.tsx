import React from "react";
import classNames from "classnames";

import { MovieType } from "../../types/Movies.interface";
import MovieRating from "../MovieRating";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import styled from "styled-components";
import { smooth } from "../../helpers/smooth";
import { Link } from "react-router-dom";

interface MovieItemType {
  movie: MovieType;
}

const BackDrop = styled.div<{ path: string }>`
  background: linear-gradient(
      0deg,
      rgba(16, 30, 48, 1) 25%,
      rgba(16, 30, 48, 0) 100%
    ),
    url(${(props) => props.path});
  background-size: cover;
  background-position: top;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  position: absolute;
  z-index: 1;
`;

const MovieItem: React.FC<MovieItemType> = ({ movie }) => {
  const { configuration } = useSelector((state: RootState) => state);

  const elementClasses = classNames("relative shadow-2xl h-96");

  return (
    <>
      <div className={elementClasses}>
        <BackDrop
          path={
            configuration.data?.images.secure_base_url +
            "original" +
            movie.poster_path
          }
        />
        <div className="w-full absolute bottom-0 left-0 px-2 z-10">
          <div className="text-center">
            <div className="font-light text-2xl drop-shadow-sm mb-5">
              {movie.title}
            </div>
            <div>
              <MovieRating
                average={movie.vote_average}
                count={movie.vote_count}
              />
            </div>
          </div>

          <div className="my-5">
            <Link
              className="block cursor-pointer uppercase font-bold rounded text-center text-yellow-200 py-2 hover:bg-yellow-200 hover:text-black transition duration-200 ease-in-out"
              to={`/movie/${movie.id}`}
              onClick={() => smooth()}
            >
              Ver detalhes
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieItem;
