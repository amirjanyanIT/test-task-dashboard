import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface DataI {
  id: string;
  userId: number;
  title: string;
  content: string;
}

export interface ReportsStateI {
  data: DataI[];
  status: "fulfilled" | "pending" | "rejected";
}

export const fetchReports = createAsyncThunk("reports/fetchReports", async () => {
  const { data } = await axios("/reports");
  return data as DataI[];
});

const reports = createSlice({
  name: "Reports",
  initialState: {
    data: [],
    status: "fulfilled",
  } as ReportsStateI ,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReports.pending, (state) => { state.status = "pending"  })
    builder.addCase(fetchReports.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.data = action.payload
    })
    builder.addCase(fetchReports.rejected, (state) => { state.status = "rejected"  })
  }
});

export const reportsReducer = reports.reducer;
