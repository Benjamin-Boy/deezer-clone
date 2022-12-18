import MusicIndex from "../components/MusicIndex";
import MainLayout from "../components/MainLayout";

import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { useEffect } from "react";
import { getArtists } from "../features/artistSlice";

const Home = () => {
  const { artists } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getArtists());
  }, []);

  // console.log(artists);

  return (
    <MainLayout>
      <MusicIndex />
    </MainLayout>
  );
};

export default Home;
