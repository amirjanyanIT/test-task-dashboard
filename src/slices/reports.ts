import { createSlice } from "@reduxjs/toolkit";

const reports = createSlice({
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

export const { set: setReports } = reports.actions;

export const reportsReducer = reports.reducer;