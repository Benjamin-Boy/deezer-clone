import Image from "next/image";
import Link from "next/link";

import ListTitle from "./ListTitle";

import { IoMdPlay } from "react-icons/io";
import { VscHeart } from "react-icons/vsc";
import { BsThreeDots } from "react-icons/bs";
import { FaMicrophoneAlt } from "react-icons/fa";

import defaultArtwork from "../public/default-artwork.png";

const ArtistLatestRelease = () => {
  const id = 0;
  const albumId = 0;
  const albumTrackArray = [1, 2, 3, 4, 5, 6];

  return (
    <div className="w-[75%]">
      <ListTitle title="Latest release" titlePath={`/album/${albumId}`} />
      <div className="flex p-6 bg-[#23232d] rounded-md">
        <div className="flex flex-col justify-between">
          <div className="relative w-[200px] group">
            <Link href={`/album/${albumId}`}>
              <Image
                src={defaultArtwork}
                placeholder="blur"
                alt="Artist image"
                className="w-full group-hover:brightness-90"
              />
              <div className="flex gap-2 absolute bottom-3 left-3 w-full">
                <div className="bg-[#fff] text-display-3 p-3 rounded-full hover:brightness-[0.98]">
                  <IoMdPlay />
                </div>
                <div className="opacity-0 bg-[#fff] text-display-3 p-3 rounded-full hover:brightness-[0.98] group-hover:opacity-100 transition duration-250">
                  <VscHeart />
                </div>
                <div className="opacity-0 bg-[#fff] text-display-3 p-3 rounded-full hover:brightness-[0.98] group-hover:opacity-100 transition duration-250">
                  <BsThreeDots />
                </div>
              </div>
            </Link>
          </div>
          <div className="text-[#a2a2a2] text-display-5">@ 2022</div>
        </div>
        <div className="flex flex-col gap-4 grow pl-5">
          <div>
            <h2 className="text-[#fff] text-display-2">Album Name</h2>
            <h3 className="text-[#a2a2a2] text-display-4">22/12/2022</h3>
          </div>
          <div>
            {albumTrackArray.map((item) => {
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
          <div>
            <button className="text-[#fff] text-display-4 font-bold px-4 py-1 rounded-full border border-[#42424c] cursor-pointer hover:bg-[#34343b] transition duration-200">
              ACCESS ALBUM (11 TRACKS)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistLatestRelease;
