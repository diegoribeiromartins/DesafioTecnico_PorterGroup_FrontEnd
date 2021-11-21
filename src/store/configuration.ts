import { createSlice } from "@reduxjs/toolkit";

import { ConfigurationType } from "../types/Configuration.interface";

export interface InitialStateType {
  loading: boolean;
  data: ConfigurationType | null;
}

const initialState: InitialStateType = {
  loading: false,
  data: null,
};

const slice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setLoading(state, { payload = false }) {
      state.loading = payload;
    },
    setConfiguration(state, { payload = null }) {
      state.data = payload;
    },
  },
});

export default slice.reducer;
export const { setLoading, setConfiguration } = slice.actions;
