import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { reducer as moviesReducer } from "./movies/state";

const rootReducer = combineReducers({
  moviesReducer,
});

const store = configureStore({ reducer: rootReducer });

export { store };
