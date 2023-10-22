import { createSlice } from "@reduxjs/toolkit";

export const reports = createSlice({
  name: "Reports",
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

export const { set } = reports.actions

export default reports.reducer