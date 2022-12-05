import Image from "next/image";
import Link from "next/link";

import ThumbnailItem from "./ThumbnailItem";

import { FiChevronRight } from "react-icons/fi";

import defaultArtwork from "../public/default-artwork.png";

const PopularPodcastsList = () => {
  const array = [1, 2, 3, 4];
  const id = "ae860663-f70a-45b8-8ffd-1d7fab5070b7";

  return (
    <>
      <Link
        href="/"
        className="cursor-pointer text-display-2 text-white hover:text-[#EF5466] transition duration-200 ease-in-out group"
      >
        <div className="flex mb-5">
          <h1 className="text-display-2 text-[#fff] font-bold leading-none cursor-pointer">
            Popular Podcasts
          </h1>
          <div className="text-[#fff] text-display-2 cursor-pointer mt-[2px]">
            <FiChevronRight />
          </div>
        </div>
      </Link>
      <div className="flex justify-start gap-7">
        {array.map((item) => {
          return <ThumbnailItem key={item} />;
        })}
      </div>
    </>
  );
};

export default PopularPodcastsList;
