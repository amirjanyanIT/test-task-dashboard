import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
interface DataI {
  id: number;
  name: string;
  image: string;
  email: string;
}

export interface UsersStateI {
  data: DataI[];
  status: "fulfilled" | "pending" | "rejected";
}

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const { data } = await axios("/users");
  return data as DataI[];
});

const users = createSlice({
  name: "Users",
  initialState: {
    data: [],
    status: "fulfilled",
  } as UsersStateI,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => { state.status = "pending"  })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.data = action.payload
    })
    builder.addCase(fetchUsers.rejected, (state) => { state.status = "rejected"  })
  }
});

export const usersReducer = users.reducer;
