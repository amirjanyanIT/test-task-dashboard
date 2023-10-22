import { createSlice } from "@reduxjs/toolkit";

export const analytics = createSlice({
  name: "Users",
  initialState: {
    data: [],
    status: "fulfilled",
  },
  reducers: {
    set: (state, action) => {
      state.data = action.payload;
    },
  },
});


export default analytics.reducer