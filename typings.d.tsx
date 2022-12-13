export interface Props {
  title?: string;
  subtitle?: string;
  type?: string;
  name?: string;
  artistName?: string;
  trackNb?: number;
  fansNb?: string;
  date?: string;
  titlePath?: string;
  itemPath?: string;
  pageScroll?: boolean;
  explicit?: boolean;
}

export interface Array {
  artists: [Props];
}
