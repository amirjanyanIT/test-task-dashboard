import { createSlice } from "@reduxjs/toolkit";

const analytics = createSlice({
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

export const { set: setAnalytics } = analytics.actions;

export const analyticsReducer = analytics.reducer;