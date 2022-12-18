import ListTitle from "./../ListTitle";

import { FiChevronRight } from "react-icons/fi";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useEffect } from "react";
import { getArtists } from "../../features/artistSlice";

import defaultArtwork from "../../public/default-artwork.png";

import { Artist } from "../../typings.d";

const ArtistOnTour = () => {
  const id = "clbnp526q0m7v0bvv35hppd1w";

  const { artists } = useAppSelector((state) => state.artists);
  const dispatch = useAppDispatch();

  const artist = artists.find((artist: Artist) => artist.id === id);

  useEffect(() => {
    dispatch(getArtists());
  }, []);

  if (!artist) {
    return <h1>LOADING...</h1>;
  }

  return (
    <>
      {artist.isOnTour && (
        <div className="w-full">
          <ListTitle title="Artist Name on tour" />
          <div className="flex justify-between items-center gap-4 group bg-[#23232d] rounded-md p-4 hover:bg-[#1a1a22] transition duration-200 cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-[65px] h-[65px] flex flex-col rounded-md overflow-hidden">
                <div className="flex justify-center items-center w-full bg-[#EF5466] text-[#fff] p-1">
                  <h3 className="inline-block text-display-4">DEC</h3>
                </div>
                <div className="flex justify-center items-center w-full grow bg-[#fff] text-[#a2a2ad]">
                  <h3 className="inline-block text-display-2">10</h3>
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-display-3 font-bold leading-none text-[#fff] group-hover:underline">
                  Show Name
                </h1>
                <h4 className="text-display-4 text-[#a2a2ad]">Venue Name</h4>
              </div>
            </div>

            <div className="flex">
              <div className="group-hover:animate-wiggle mt-[2px] text-[#fff] text-display-1">
                <FiChevronRight />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ArtistOnTour;
