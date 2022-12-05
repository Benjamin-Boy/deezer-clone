import Image from "next/image";

import { FiChevronRight } from "react-icons/fi";

import defaultArtwork from "../public/default-artwork.png";

const PodcastsByNetworkList = () => {
  return (
    <>
      <div className="flex mb-5">
        <h1 className="text-display-2 text-[#fff] font-bold leading-none cursor-pointer">
          Podcasts by network
        </h1>
        <div className="text-[#fff] text-display-2 cursor-pointer mt-[2px]">
          <FiChevronRight />
        </div>
      </div>
      <div className="flex justify-start gap-7">
        <div className="flex justify-center items-center gap-2 w-[160px] h-[80px] bg-[#b93232] rounded-md cursor-pointer">
          <Image
            src={defaultArtwork}
            width={30}
            placeholder="blur"
            alt="Artist image"
          />
        </div>
      </div>
    </>
  );
};

export default PodcastsByNetworkList;
