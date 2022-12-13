import Image from "next/image";
import ListTitle from "./ListTitle";

import { IoMdPlay } from "react-icons/io";
import { VscHeart } from "react-icons/vsc";
import { BsThreeDots } from "react-icons/bs";
import { FaMicrophoneAlt } from "react-icons/fa";

import defaultArtwork from "../public/default-artwork.png";

const ArtistTopTrackList = () => {
  const id = 0;
  const topTrackArray = [1, 2, 3, 4];

  return (
    <div className="w-[75%]">
      <ListTitle title="Top tracks" titlePath={`/artist/${id}/top_tracks`} />
      <div className="p-6 bg-[#23232d] rounded-md">
        {topTrackArray.map((item) => {
          return (
            <div
              key={item}
              className="flex justify-between items-center hover:bg-[#16161d] p-2 group"
            >
              <div className="flex items-center gap-4 ">
                <div className="relative w-[40px] cursor-pointer">
                  <Image
                    src={defaultArtwork}
                    placeholder="blur"
                    alt="Album image"
                    className="border border-[#42424c]"
                  />
                  <div className="hidden absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] text-display-3 text-[#18181f] bg-[#fff] rounded-full p-2 cursor-pointer hover:brightness-95 group-hover:block">
                    <IoMdPlay />
                  </div>
                </div>
                <div className="text-[#fff] cursor-pointer hover:underline">
                  1. Track Name
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
