import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { _ } from "../../helpers/debug";

import Loading from "../../components/Loading";
import MovieBackDrop from "../../components/MovieBackDrop";
import MovieGender from "../../components/MovieGender";
import MovieRating from "../../components/MovieRating";

import { movieDetailsService } from "../../services/movieDetails.service";
import { RootState } from "../../store";
import { setLoading, setMovieDetail } from "../../store/movies";
import DetailList from "../../components/DetailList";
import MovieDetailScope from "../../components/MovieDetailScope";
import Fit from "../../components/Fit";

const MovieDetail = () => {
  const { movies } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const params = useParams();

  const getMovieDetails = async () => {
    try {
      dispatch(setLoading(true));
      _.group("getMovieDetails");
      _.log("Disparado a ação de busca de detalhes do filme");

      const request = await movieDetailsService(Number(params.id || 0));
      _.log("Resposta do request", request);

      dispatch(setMovieDetail(request.data));
    } catch (err) {
      _.error(err);
    } finally {
      _.groupEnd();
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (!movies.details || movies.details.id !== Number(params.id))
      getMovieDetails();

    return () => {
      dispatch(setMovieDetail(null));
    };
  }, []);

  return (
    <>
      {movies.loading && <Loading />}
      <Fit className="relative">
        <MovieBackDrop address={movies.details?.backdrop_path || ""} />
      </Fit>

      <MovieDetailScope className="relative container mx-auto bg-gray-100 p-6 text-gray-600 rounded shadow-xl z-10">
        {movies.details && (movies.details?.genres || []).length && (
          <div className="text-center mb-1">
            {(movies.details?.genres || []).map((item, index) => (
              <MovieGender color="red-600" key={index}>
                {item.name}
              </MovieGender>
            ))}
          </div>
        )}
        <div className="py-4 my-2 text-3xl font-thin text-red-600 text-center">
          {movies.details?.title || "Título do filme"}
          <small className="block text-xl font-bold text-gray-500">
            {movies.details?.tagline || "Tagline"}
          </small>
        </div>

        <div className="my-2 text-center">
          <MovieRating
            average={movies.details?.vote_average || 0}
            count={movies.details?.vote_count || 0}
            dark={true}
          />
        </div>

        <div className="text-md pb-4 mb-4">
          <label className="uppercase text-xs text-gray-400 block font-bold">
            Descrição
          </label>
          {movies.details?.overview || "Overview"}
        </div>

        <div>
          <DetailList
            data={[
              {
                label: "Título original",
                content: movies.details?.original_title || "",
              },
              {
                label: "Despesas",
                content: (movies.details?.budget || 0).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                }),
              },
              {
                label: "Receita",
                content: (movies.details?.revenue || 0).toLocaleString(
                  "pt-br",
                  {
                    style: "currency",
                    currency: "BRL",
                  }
                ),
              },
              {
                label: "Lançamento",
                content: new Date(
                  movies.details?.release_date || "2000-00-00"
                ).toLocaleDateString("pt-br", { dateStyle: "full" }),
              },
            ]}
          />
        </div>
      </MovieDetailScope>
    </>
  );
};

export default MovieDetail;
