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

const Player = () => {
  return (
    <div className="z-40 fixed bottom-0 flex justify-between items-center bg-[#23232D] border-t border-[#42424c] w-screen h-[80px] p-8 gap-20">
      <div className="flex text-[#fff] text-display-2 gap-6">
        <AiFillStepBackward />
        <IoMdPlay />
        <AiFillStepForward />
      </div>
      <div className="flex justify-between items-end w-[50%] gap-2">
        <div className="text-display-6 text-[#a2a2ad]">00:00</div>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex text-[#fff] items-center justify-between gap-4">
            <div className="relative flex items-center justify-between h-full">
              {/* <div className="absolute r-0 h-full w-[20px] bg-[#ee21e7]"></div> */}
              <h3 className="whitespace-nowrap">
                CP_009_Evidemment . Orelsan, Angèle
              </h3>
              {/* <div className="absolute l-0 h-full w-[20px] bg-[#ee21e7]"></div> */}
            </div>
            <div className="flex items-center gap-4 text-display-4">
              <div>
                <TbMicrophone2 />
              </div>
              <div>
                <TfiPlus />
              </div>
              <div>
                <VscHeart />
              </div>
            </div>
          </div>
          <div className="flex items-center h-[10px]">
            <div className="w-full h-[2px] bg-[#a2a2ad]"></div>
          </div>
        </div>
        <div className="text-display-6 text-[#a2a2ad]">03:26</div>
      </div>
      <div className="flex gap-4 text-display-4 text-[#fff]">
        <FaChromecast />
        <IoIosRepeat />
        <IoIosShuffle />
        <SlVolume2 />
        <RiEqualizerLine />
      </div>
      <div className="flex items-center gap-4 text-[#fff] text-display-5 border-l border-[#42424c] pl-6">
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
  );
};

export default Player;
