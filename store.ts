import { configureStore } from "@reduxjs/toolkit";
import artistReducer from "./features/artistSlice";
import albumReducer from "./features/albumSlice";
import songReducer from "./features/songSlice";
import globalReducer from "./features/globalSlice";

export const store = configureStore({
  reducer: {
    global: globalReducer,
    artists: artistReducer,
    albums: albumReducer,
    songs: songReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
