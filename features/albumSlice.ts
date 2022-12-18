import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { gql } from "graphql-request";
import { client } from "../clients/graphql";
import { Album } from "../typings.d";

export const getAlbums = createAsyncThunk("albums/getAlbums", async () => {
  const query = gql`
    query {
      albums(first: 50) {
        id
        name
        releaseDate
        followers
        image {
          url
        }
        songs(first: 50) {
          id
          name
          duration
          popularity
          trackNumber
          mp3 {
            url
          }
        }
        artists {
          id
          name
        }
      }
    }
  `;

  const response = await client.request(query);
  const albums = response.albums;

  return albums;
});

interface InitialState {
  albums: [Album];
  isLoading: boolean;
}

const initialState: InitialState = {
  albums: [
    {
      id: "",
      name: "Album Name",
      releaseDate: "",
      followers: 0,
      image: {
        url: "",
      },
      songs: [
        {
          id: "",
          name: "Track Name",
          duration: 0,
          popularity: 0,
          trackNumber: 0,
          mp3: {
            url: "",
          },
        },
      ],
      artists: [
        {
          id: "",
          name: "",
        },
      ],
      genre: "",
    },
  ],
  isLoading: false,
};

const albumSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAlbums.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getAlbums.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.albums = payload;
      }),
      builder.addCase(getAlbums.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default albumSlice.reducer;
