import Image from "next/image";
import Link from "next/link";

import { FiChevronRight } from "react-icons/fi";
import { IoIosRadio } from "react-icons/io";

import defaultArtwork from "../public/default-artwork.png";

const StationsList = () => {
  const array = [1, 2, 3, 4];

  return (
    <div className="w-full">
      <Link
        href="/channels/explore"
        className="cursor-pointer text-display-2 text-white hover:text-[#EF5466] transition duration-200 ease-in-out group"
      >
        <div className="flex mb-5">
          <h1 className="font-bold leading-none">Stations for you</h1>
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
              className="flex flex-col gap-2 w-[165px] md:w-[25%]"
            >
              <div>
                <Image
                  src={defaultArtwork}
                  // width={165}
                  placeholder="blur"
                  alt="Artist image"
                  className="rounded-md w-[265px]"
                />
              </div>
              <div className="flex flex-col items-start">
                <div className="flex gap-1 text-[#a2a2ad]">
                  <h5 className="text-display-5">ON AIR </h5>
                  <IoIosRadio />
                </div>
                <h4 className="text-[#fff] text-display-3">Radio Name</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StationsList;
