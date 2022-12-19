import { useEffect } from "react";

import ListTitle from "./ListTitle";
import ListGenreItem from "./ListGenreItem";

import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { getGlobal } from "../features/globalSlice";

const GenreList = () => {
  const { genres } = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();

  console.log(genres);

  useEffect(() => {
    dispatch(getGlobal());
  }, []);

  return (
    <div className="w-full p-6">
      <ListTitle
        title="Genre"
        titlePath="/channels/explore"
        pageScroll={genres.length > 5 ? true : false}
      />

      <div className="flex justify-start gap-7">
        {genres.slice(0, 5).map(({ name }, index) => {
          return <ListGenreItem key={index} type="genre" title={name} />;
        })}
      </div>
    </div>
  );
};

export default GenreList;
