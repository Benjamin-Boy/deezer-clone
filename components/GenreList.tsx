import Link from "next/link";

import { FiChevronRight } from "react-icons/fi";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const GenreList = () => {
  const array = [1, 2, 3, 4];

  return (
    <div className="w-full">
      <div className="flex justify-between mb-5">
        <Link
          href="/channels/explore"
          className="cursor-pointer text-display-2 text-white hover:text-[#EF5466] transition duration-200 ease-in-out group"
        >
          <div className="flex items-baseline gap-2">
            <h1 className="font-bold leading-none">Genres</h1>
            <div className="text-display-4 font-bold group-hover:animate-wiggle mt-[2px]">
              <BsChevronRight />
            </div>
          </div>
        </Link>
        <div className="flex text-display-4 text-white gap-8">
          <BsChevronLeft />
          <BsChevronRight />
        </div>
      </div>

      <div className="flex justify-start gap-7">
        {array.map((item) => {
          return (
            <div
              key={item}
              className="flex justify-center items-center gap-2 w-[165px] h-[85px] bg-[#898383] rounded-md cursor-pointer hover:brightness-75 transition duration-300"
            >
              <h4 className="text-[#fff] font-bold">Genre</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GenreList;
