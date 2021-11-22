import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../components/Loading";
import Header from "../containers/Header";
import MovieList from "../containers/MovieList";
import { RootState } from "../store";
import { _ } from "../helpers/debug";

import { movieUpcomingService } from "../services/movieUpcoming.service";
import { setDetachMovie, setLoading, setMovies } from "../store/movies";
import Button from "../components/Button";

const Index = () => {
  const { movies } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const getMovies = async () => {
    try {
      dispatch(setLoading(true));
      _.group("GetMovies");
      _.log("Disparado a ação de getMovies");

      const page = (movies.list?.page || 0) + 1;

      const request = await movieUpcomingService(page);
      _.log("Resposta do request", request);

      dispatch(setMovies(request.data));
      if (!movies.detach) dispatch(setDetachMovie(request.data.results[0]));
    } catch (err) {
      _.error(err);
      return false;
    } finally {
      dispatch(setLoading(false));
      _.groupEnd();
    }
  };

  useEffect(() => {
    if (!movies.list) getMovies();
  }, []);

  return (
    <>
      {movies.loading && <Loading>Aguarde...</Loading>}
      <Header />
      <div id="page" className="py-10">
        <MovieList />

        <div className="pt-10 mt-10 text-center">
          <Button
            inline={true}
            outline={true}
            color="text-yellow-200"
            borderColor="border-yellow-200"
            size="xs"
            onClick={() => getMovies()}
          >
            Ver mais...
          </Button>
        </div>
      </div>
    </>
  );
};

export default Index;
