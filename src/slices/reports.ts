import { createSlice } from "@reduxjs/toolkit";

export interface ReportsStateI {
  data: {
    id: string;
    userId: string;
    title: string;
    content: string;
  }[];
  status: "fulfilled" | "pending";
}

const reports = createSlice({
  name: "Reports",
  initialState: {
    data: [],
    status: "fulfilled",
  } as ReportsStateI ,
  reducers: {
    set: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { set: setReports } = reports.actions;

export const reportsReducer = reports.reducer;
