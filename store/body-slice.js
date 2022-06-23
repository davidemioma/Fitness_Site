import { createSlice } from "@reduxjs/toolkit";

const BodySlice = createSlice({
  name: "cart",
  initialState: {
    bodyPart: "all",
  },
  reducers: {
    setBodyPart(state, action) {
      state.bodyPart = action.payload;
    },
  },
});

export default BodySlice;
