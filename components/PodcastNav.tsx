import Image from "next/image";
import Link from "next/link";

import { IoMdPlay } from "react-icons/io";
import { VscHeart } from "react-icons/vsc";
import { BsThreeDots } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";

import defaultArtist from "../public/default-artwork.png";

const PodcastNav = () => {
  const id = 0;

  return (
    <div className="flex items-start p-6 gap-8">
      <Image
        src={defaultArtist}
        placeholder="blur"
        alt="Podcast image"
        className="rounded-md max-w-[235px] w-[20%]"
      />

      <div className="w-full flex flex-col gap-3">
        <h1 className="text-display-1 text-[#fff] font-bold leading-none py-1">
          Podcast Name
        </h1>
        <p className="text-display-3 text-[#c1c1ce] leading-none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus
          pulvinar enim, sit amet euismod dolor vulputate non. Mauris nec cursus
          massa, non maximus leo.
        </p>
        <div className="flex items-center gap-4">
          <button className="bg-[#ef5466] text-[#fff] font-bold rounded-full py-3 px-12 flex items-center gap-8 hover:bg-[#d61e34] transition duration-300">
            <div className="text-display-4">
              <IoMdPlay />
            </div>
            <h1 className="leading-none">LISTEN</h1>
          </button>
          <button className="text-[#fff] text-display-2 p-2 rounded-full border border-[#42424c] cursor-pointer hover:bg-[#34343b] transition duration-200">
            <VscHeart />
          </button>
          <div className="text-[#fff] text-display-2 p-2 rounded-full border border-[#42424c] cursor-pointer hover:bg-[#34343b] transition duration-200">
            <RiShareForwardLine />
          </div>
          <button className="text-[#fff] text-display-2 p-2 rounded-full border border-[#42424c] cursor-pointer hover:bg-[#34343b] transition duration-200">
            <BsThreeDots />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PodcastNav;
