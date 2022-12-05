import Image from "next/image";
import Link from "next/link";

import { FiChevronRight } from "react-icons/fi";
import { IoMdPlay } from "react-icons/io";
import { VscHeart } from "react-icons/vsc";
import { BsThreeDots } from "react-icons/bs";

import defaultArtwork from "../public/default-artwork.png";

const NewReleasesList = () => {
  const array = [1, 2, 3, 4];

  return (
    <div className="w-full">
      <Link
        href="/channels/explore"
        className="cursor-pointer text-display-2 text-white hover:text-[#EF5466] transition duration-200 ease-in-out group"
      >
        <div className="flex mb-5">
          <h1 className=" font-bold leading-none">New Releases for you</h1>
          <div className="group-hover:animate-wiggle mt-[2px]">
            <FiChevronRight />
          </div>
        </div>
      </Link>
      <div className="flex justify-start gap-7">
        {array.map((item) => {
          return (
            <div
              key={item}
              className="flex flex-col gap-2 min-w-[165px] xl:w-[25%]"
            >
              <Link href="/" className="relative group">
                <Image
                  src={defaultArtwork}
                  placeholder="blur"
                  alt="Artist image"
                  className="rounded-md w-full group-hover:brightness-90"
                />
                <div className="flex gap-2 absolute bottom-3 left-3 w-full group">
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
              <div className="flex flex-col items-start">
                <Link href="/">
                  <h3 className="text-[#fff] text-display-3 cursor-pointer hover:underline">
                    Album Name
                  </h3>
                </Link>
                <h5 className="text-[#a2a2ad] text-display-5">
                  by Artist Name
                </h5>
                <h6 className="text-[#a2a2ad] text-display-5">
                  Released on 12/02/222
                </h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewReleasesList;
