import { stringify } from "querystring";

export interface ListItem {
  title?: string;
  subtitle?: string;
  type?: string;
  name?: string;
  artists?: [Artist];
  trackNb?: number;
  fansNb?: string;
  date?: string;
  titlePath?: string;
  albumPath?: string;
  artistPath?: string;
  explicit?: boolean;
  data?: [];
  image: { url: string };
}

export interface ListTitle {
  title?: string;
  subtitle?: string;
  type?: string;
  titlePath?: string;
  pageScroll?: boolean;
}

export interface Song {
  id: string;
  name: string;
  duration: number;
  popularity: number;
  trackNumber: number;
  mp3?: {
    url: string;
  };
  artists: [Artist];
  albums: [Album];
}

export interface Album {
  id: string;
  name: string;
  releaseDate: string;
  followers: number;
  image: {
    url: string;
  };
  songs: [Song];
  artists: [Artist];
  genre: string;
  type: string;
}

export interface Artist {
  id: string;
  name: string;
  followers: number;
  image: {
    url: string;
  };
  albums: [Album];
  isOnTour: boolean;
  biography: string;
}
