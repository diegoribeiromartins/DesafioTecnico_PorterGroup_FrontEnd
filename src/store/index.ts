import { combineReducers, configureStore } from "@reduxjs/toolkit";

import movies, { InitialStateType as MoviesType } from "./movies";

const reducer = combineReducers({
  movies,
});

const store = configureStore({ reducer });

export default store;
export type RootState = ReturnType<typeof reducer>;
