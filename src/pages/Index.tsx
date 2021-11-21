import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../components/Loading";
import Header from "../containers/Header";
import MovieList from "../containers/MovieList";
import { RootState } from "../store";
import { _ } from "../helpers/debug";

import { movieUpcomingService } from "../services/movieUpcoming.service";
import { setDetachMovie, setLoading, setMovies } from "../store/movies";

const Index = () => {
  const { movies } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const getMovies = async () => {
    try {
      dispatch(setLoading(true));
      _.group("GetMovies");
      _.log("Disparado a ação de getMovies");

      const request = await movieUpcomingService();
      _.log("Resposta do request", request);

      dispatch(setMovies(request.data));
      dispatch(setDetachMovie(request.data.results[0]));
    } catch (err) {
      _.error(err);
      return false;
    } finally {
      dispatch(setLoading(false));
      _.groupEnd();
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      {movies.loading && <Loading>Aguarde...</Loading>}
      <Header />
      <div id="page" className="py-10">
        <MovieList />
      </div>
    </>
  );
};

export default Index;
