import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { gql } from "graphql-request";
import { client } from "../clients/graphql";

import { Genre } from "../typings.d";

export const getGlobal = createAsyncThunk("global", async () => {
  const query = gql`
    query {
      __type(name: "Genre") {
        enumValues {
          name
        }
      }
    }
  `;

  const response = await client.request(query);
  const genres = response.__type.enumValues;

  return genres;
});

interface InitialState {
  genres: Genre[];
  isLoading: boolean;
}

const initialState: InitialState = {
  genres: [],
  isLoading: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGlobal.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getGlobal.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.genres = payload;
      }),
      builder.addCase(getGlobal.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default globalSlice.reducer;
