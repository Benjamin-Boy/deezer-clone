import Image from "next/image";
import { useRouter } from "next/router";

import ListTitle from "../ListTitle";

import { IoMdPlay } from "react-icons/io";
import { VscHeart } from "react-icons/vsc";
import { BsThreeDots } from "react-icons/bs";
import { FaMicrophoneAlt } from "react-icons/fa";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useEffect } from "react";
import { getSongs } from "../../features/songSlice";

import { Song } from "../../typings.d";

import defaultArtwork from "../../public/default-artwork.png";

const ArtistTopTrackList = () => {
  const router = useRouter();
  const { id } = router.query;

  const { songs } = useAppSelector((state) => state.songs);
  const dispatch = useAppDispatch();

  const songArr: Song[] = [];

  songs.filter((song) => {
    song.artists.forEach((artist) => {
      if (artist.id === id) {
        songArr.push(song);
      }
    });
  });

  useEffect(() => {
    dispatch(getSongs());
  }, []);

  if (!songs) {
    return <h1>LOADING...</h1>;
  }

  return (
    <div className="w-[75%]">
      <ListTitle title="Top tracks" titlePath={`/artist/${id}/top_track`} />
      <div className="p-6 bg-[#23232d] rounded-md">
        {songArr.slice(0, 4).map(({ id, name, trackNumber, albums }) => {
          return (
            <div
              key={id}
              className="flex justify-between items-center hover:bg-[#16161d] p-2 group"
            >
              <div className="flex items-center gap-4 ">
                <div className="relative w-[40px] cursor-pointer">
                  <Image
                    src={
                      songs.length > 0 ? albums[0].image.url : defaultArtwork
                    }
                    width={40}
                    height={40}
                    alt="Album image"
                    className="border border-[#42424c]"
                  />
                  <div className="hidden absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] text-display-3 text-[#18181f] bg-[#fff] rounded-full p-2 cursor-pointer hover:brightness-95 group-hover:block">
                    <IoMdPlay />
                  </div>
                </div>
                <div className="text-[#fff] cursor-pointer hover:underline">
                  {trackNumber}. {name}
                </div>
              </div>
              <div className="flex items-center gap-2 text-display-3 text-[#fff]">
                <div className="rounded-full p-2 cursor-pointer hover:bg-[#42424c] transition duration-200">
                  <FaMicrophoneAlt />
                </div>
                <div className="rounded-full p-2 cursor-pointer hover:bg-[#42424c] transition duration-200">
                  <VscHeart />
                </div>
                <div className="rounded-full p-2 cursor-pointer hover:bg-[#42424c] transition duration-200">
                  <BsThreeDots />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArtistTopTrackList;
