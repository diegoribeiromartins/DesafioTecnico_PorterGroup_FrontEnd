import { createSlice } from "@reduxjs/toolkit";

import { ConfigurationType } from "../types/Configuration.interface";

export interface InitialStateType {
  showMenu: boolean;
}

const initialState: InitialStateType = {
  showMenu: false,
};

const slice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setShowMenu(state, { payload = false }) {
      state.showMenu = payload;
    },
  },
});

export default slice.reducer;
export const { setShowMenu } = slice.actions;
