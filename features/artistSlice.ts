import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { gql } from "graphql-request";
import { client } from "../clients/graphql";

import { Artist } from "../typings.d";

export const getArtists = createAsyncThunk("artists/getArtists", async () => {
  const query = gql`
    query {
      artists {
        id
        followers
        name
        isOnTour
        image {
          url
        }
        albums {
          id
          name
          releaseDate
          followers
          image {
            url
          }
          artists {
            name
          }
          type
        }
        biography
      }
    }
  `;

  const response = await client.request(query);
  const artists = response.artists;

  return artists;
});

interface artistState {
  artists: Artist[];
  isLoading: boolean;
}

const initialState: artistState = {
  artists: [],
  isLoading: false,
};

const artistSlice = createSlice({
  name: "artists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArtists.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getArtists.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.artists = payload;
      }),
      builder.addCase(getArtists.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default artistSlice.reducer;
