import { combineReducers, configureStore } from "@reduxjs/toolkit";

import movies from "./movies";
import configuration from "./configuration";

const reducer = combineReducers({
  movies,
  configuration,
});

const store = configureStore({ reducer });

export default store;
export type RootState = ReturnType<typeof reducer>;
