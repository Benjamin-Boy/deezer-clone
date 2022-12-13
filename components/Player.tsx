import Image from "next/image";

import { IoMdPlay } from "react-icons/io";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { TbMicrophone2 } from "react-icons/tb";
import { TfiPlus } from "react-icons/tfi";
import { VscHeart } from "react-icons/vsc";
import { FaChromecast } from "react-icons/fa";
import { IoIosShuffle, IoIosRepeat } from "react-icons/io";
import { SlVolume2 } from "react-icons/sl";
import { RiEqualizerLine } from "react-icons/ri";

import defaultArtwork from "../public/default-artwork.png";
import Link from "next/link";

const Player = () => {
  const artistName = "Artist Name";
  const trackName = "Track Name";
  const albumId = 0;
  const artistId = 0;

  return (
    <div className="z-40 fixed bottom-0 flex justify-between items-center bg-[#23232D] border-t border-[#42424c] w-screen h-[80px] p-8 gap-20">
      <div className="flex items-center text-[#fff] gap-3">
        <div className="inactive cursor-pointer rounded-full p-1 text-display-2 hover:bg-[#42424c] transition duration-300">
          <AiFillStepBackward />
        </div>
        <div className="cursor-pointer rounded-full p-3 text-display-1 hover:bg-[#42424c] transition duration-300">
          <IoMdPlay />
        </div>
        <div className="cursor-pointer rounded-full p-1 text-display-2 hover:bg-[#42424c] transition duration-300">
          <AiFillStepForward />
        </div>
      </div>
      <div className="flex justify-between items-end w-[50%] gap-2">
        <div className="text-display-6 text-[#a2a2ad]">00:00</div>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex text-[#fff] items-center justify-between gap-4">
            <div className="relative flex items-center justify-between h-full">
              {/* <div className="absolute r-0 h-full w-[20px] bg-[#ee21e7]"></div> */}
              <h3 className="whitespace-nowrap">
                <Link href={`/album/${albumId}`} className="hover:underline">
                  {trackName}
                </Link>
                <span> . </span>
                <Link href={`/album/${artistId}`} className="hover:underline">
                  {artistName}
                </Link>
              </h3>
              {/* <div className="absolute l-0 h-full w-[20px] bg-[#ee21e7]"></div> */}
            </div>
            <div className="flex items-center gap-1 text-display-3">
              <div className="relative cursor-pointer rounded-full hover:bg-[#42424c] p-2 transition duration-300 group">
                <div className="hidden absolute left-2/4 translate-x-[-51%] top-[-33px] bg-[#383842] text-display-5 whitespace-nowrap py-1 px-2 group-hover:block group-hover:animate-tooltipAppear">
                  View lyrics
                  <div className="absolute left-2/4 bottom-[-10px] translate-x-[-50%] w-0 h-0 border-[5px] border-solid border-transparent border-t-[#383842]"></div>
                </div>
                <TbMicrophone2 />
              </div>
              <div className="cursor-pointer rounded-full hover:bg-[#42424c] p-2 transition duration-300">
                <TfiPlus />
              </div>
              <div className="relative cursor-pointer rounded-full hover:bg-[#42424c] p-2 transition duration-300 group">
                <div className="hidden absolute left-2/4 translate-x-[-51%] top-[-33px] bg-[#383842] text-display-5 whitespace-nowrap py-1 px-2 group-hover:block group-hover:animate-tooltipAppear">
                  Add to favourite tracks
                  <div className="absolute left-2/4 bottom-[-10px] translate-x-[-50%] w-0 h-0 border-[5px] border-solid border-transparent border-t-[#383842]"></div>
                </div>
                <VscHeart />
              </div>
            </div>
          </div>
          <div className="relative flex items-center h-[10px] cursor-pointer group">
            <div className="w-full h-[2px] bg-[#a2a2ad] group-hover:h-[4px] rounded-sm">
              <div className="hidden absolute bottom-[-4px] h-[18px] w-[18px] bg-[#fff] rounded-full border-1 border-[#a2a2ad] group-hover:block"></div>
            </div>
          </div>
        </div>
        <div className="text-display-6 text-[#a2a2ad]">03:26</div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex gap-1 text-display-3 text-[#fff]">
          <div className="relative cursor-pointer rounded-full hover:bg-[#42424c] p-2 transition duration-300 group">
            <div className="hidden absolute left-2/4 translate-x-[-51%] top-[-33px] bg-[#383842] text-display-5 whitespace-nowrap py-1 px-2 group-hover:block group-hover:animate-tooltipAppear">
              Chromecast
              <div className="absolute left-2/4 bottom-[-10px] translate-x-[-50%] w-0 h-0 border-[5px] border-solid border-transparent border-t-[#383842]"></div>
            </div>
            <FaChromecast />
          </div>
          <div className="relative cursor-pointer rounded-full hover:bg-[#42424c] p-2 transition duration-300 group">
            <div className="hidden absolute left-2/4 translate-x-[-51%] top-[-33px] bg-[#383842] text-display-5 whitespace-nowrap py-1 px-2 group-hover:block group-hover:animate-tooltipAppear">
              Repeat all tracks in list
              <div className="absolute left-2/4 bottom-[-10px] translate-x-[-50%] w-0 h-0 border-[5px] border-solid border-transparent border-t-[#383842]"></div>
            </div>
            <IoIosRepeat />
          </div>
          <div className="relative cursor-pointer rounded-full hover:bg-[#42424c] p-2 transition duration-300 group">
            <div className="hidden absolute left-2/4 translate-x-[-51%] top-[-33px] bg-[#383842] text-display-5 whitespace-nowrap py-1 px-2 group-hover:block group-hover:animate-tooltipAppear">
              Turn on shuffle
              <div className="absolute left-2/4 bottom-[-10px] translate-x-[-50%] w-0 h-0 border-[5px] border-solid border-transparent border-t-[#383842]"></div>
            </div>
            <IoIosShuffle />
          </div>
          <div className="relative cursor-pointer rounded-full hover:bg-[#42424c] p-2 transition duration-300 group">
            <div className="hidden absolute left-2/4 translate-x-[-51%] top-[-48px] w-[250px] rounded-lg bg-[#282832] text-display-5 whitespace-nowrap py-1 px-2 group-hover:block group-hover:animate-tooltipAppear">
              <div className="relative flex items-center h-[10px] py-4 px-3 cursor-pointer group">
                <div className="w-full h-[4px] bg-[#a2a2ad] rounded-sm">
                  <div className="h-full w-2/4 bg-[#fff] rounded-sm"></div>
                  <div className="absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] h-[18px] w-[18px] bg-[#fff] rounded-full border-1 border-[#a2a2ad]"></div>
                </div>
              </div>
              <div className="absolute left-2/4 bottom-[-10px] translate-x-[-50%] w-0 h-0 border-[5px] border-solid border-transparent border-t-[#383842]"></div>
            </div>
            <SlVolume2 />
          </div>
          <div className="cursor-pointer rounded-full hover:bg-[#42424c] p-2 transition duration-300">
            <RiEqualizerLine />
          </div>
        </div>
        <div className="border-l border-[#42424c] pl-6">
          <div className="flex items-center gap-4 text-[#fff] text-display-4 p-2 rounded-md hover:bg-[#42424c] cursor-pointer">
            <Image
              src={defaultArtwork}
              width={25}
              placeholder="blur"
              alt="Album artwork"
              className="rounded-sm"
            />
            <h4>Queue</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
