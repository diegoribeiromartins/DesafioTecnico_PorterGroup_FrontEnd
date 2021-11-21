import { combineReducers, configureStore } from "@reduxjs/toolkit";

import movies from "./movies";
import configuration from "./configuration";
import navigation from "./navigation";

const reducer = combineReducers({
  movies,
  configuration,
  navigation,
});

const store = configureStore({ reducer });

export default store;
export type RootState = ReturnType<typeof reducer>;
