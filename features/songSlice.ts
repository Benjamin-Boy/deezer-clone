import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { gql } from "graphql-request";
import { client } from "../clients/graphql";

import { Song } from "../typings.d";

export const getSongs = createAsyncThunk("songs/getSongs", async () => {
  const query = gql`
    query {
      songs(first: 50) {
        id
        name
        duration
        popularity
        trackNumber
        albums {
          id
          name
          image {
            url
          }
        }
        artists {
          id
        }
        mp3 {
          url
        }
      }
    }
  `;

  const response = await client.request(query);
  const songs = response.songs;

  return songs;
});

interface InitialState {
  songs: Song[];
  isLoading: boolean;
}

const initialState: InitialState = {
  songs: [],
  isLoading: false,
};

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSongs.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getSongs.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.songs = payload;
      }),
      builder.addCase(getSongs.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default songSlice.reducer;
