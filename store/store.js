import { configureStore } from "@reduxjs/toolkit";
import BodySlice from "./body-slice";

const store = configureStore({
  reducer: { selected: BodySlice.reducer },
});

export const { setBodyPart } = BodySlice.actions;

export default store;
