import { createSlice } from "@reduxjs/toolkit";

const panelSlice = createSlice({
  name: "panel",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toogleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export default panelSlice.reducer;
export const { toogleMenu, closeMenu } = panelSlice.actions;
