import { useRouter } from "next/router";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useEffect } from "react";
import { getArtists } from "../../features/artistSlice";

import { Artist } from "../../typings.d";

const ArtistBiography = () => {
  const router = useRouter();
  const artistId = router.query.id;

  const { artists } = useAppSelector((state) => state.artists);
  const dispatch = useAppDispatch();

  const artist = artists.find((artist: Artist) => artist.id === artistId);

  useEffect(() => {
    dispatch(getArtists());
  }, []);

  if (!artist) {
    return <h1>LOADING...</h1>;
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center gap-2 ">
        <h1 className="text-display-1 text-[#fff] font-bold mb-5">Biography</h1>
      </div>
      <div className="p-6 bg-[#23232d] rounded-md text-[#fff]">
        <h1 className="text-display-1 font-bold">{artist.name}</h1>
        <p className="">{artist.biography}</p>
      </div>
    </div>
  );
};

export default ArtistBiography;
