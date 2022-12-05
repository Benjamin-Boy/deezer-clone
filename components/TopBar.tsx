import Image from "next/image";

import { CiSearch } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";
import { AiFillClockCircle } from "react-icons/ai";

import defaultProfile from "../public/default-avatar.jpg";

const TopBar = () => {
  return (
    <div className="fixed top-0 left-[14rem] right-0 z-20 h-[50px] bg-[#121216] border-b border-[#42424c] flex justify-between items-center py-7 px-4">
      <div className="relative flex items-center gap-1 w-[60%]">
        <div className="text-display-3 text-[#a2a2ad] mt-2">
          <CiSearch />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="outline-none bg-[#121216] text-white text-display-3 w-full px-3"
        />
        <div className="text-display-4 text-white bg-[#42424c] rounded-full p-1">
          <TfiClose />
        </div>
        {/* <div className="absolute top-[40px] bg-[#23232d] rounded-lg w-full px-4 py-4 flex flex-col gap-4">
          <div className="flex justify-between">
            <h3 className="text-[#fff] text-display-3 font-bold">
              Search history
            </h3>
            <h5 className="text-[#a2a2ad] text-display-5">Clear</h5>
          </div>
          <div className="flex justify-between text-[#d3d3d5]">
            <h3 className=" text-display-3">Johnny Clegg</h3>
            <div className=" text-display-3">
              <AiFillClockCircle />
            </div>
          </div>
          <h3 className="text-[#fff] text-display-3 font-bold">
            Trending searches
          </h3>
        </div> */}
      </div>
      <div className="flex justify-end items-center gap-4">
        <div className="text-display-2 text-white">
          <IoMdNotifications />
        </div>
        <Image
          className="rounded-full"
          src={defaultProfile}
          width={30}
          placeholder="blur"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default TopBar;
