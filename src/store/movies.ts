import { createSlice } from "@reduxjs/toolkit";
import { ApiPaginationResponseType } from "../types/ApiResponse.interface";

import { MovieType } from "../types/Movies.interface";

export interface InitialStateType {
  loading: boolean;
  list: ApiPaginationResponseType<MovieType> | null;
  details: MovieType | null;
  detach: MovieType | null;
}

const initialState: InitialStateType = {
  loading: false,
  list: null,
  details: null,
  detach: null,
};

const slice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setLoading(state, { payload = false }) {
      state.loading = payload;
    },
    setMovies(state, { payload = [] }) {
      if (state.list) {
        state.list.results = [...state.list.results, ...payload.results];
        state.list.page = payload.page;
      } else {
        state.list = payload;
      }
    },
    setMovieDetail(state, { payload = null }) {
      state.details = payload;
    },
    setDetachMovie(state, { payload = null }) {
      state.detach = payload;
    },
  },
});

export default slice.reducer;
export const { setLoading, setMovies, setMovieDetail, setDetachMovie } =
  slice.actions;
