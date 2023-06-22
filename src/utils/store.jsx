import panelSlice from "./panelSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    panel: panelSlice,
  },
});

export default store;
