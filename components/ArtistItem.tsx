import Image from "next/image";
import Link from "next/link";

import { IoMdPlay } from "react-icons/io";
import { VscHeart } from "react-icons/vsc";

import defaultArtist from "../public/default-avatar.jpg";

const ArtistItem = () => {
  const id = 80906;

  return (
    <div className="flex flex-col items-center gap-2 w-[165px] xl:w-[265px]">
      <Link href="/" className="relative group">
        <Image
          src={defaultArtist}
          placeholder="blur"
          alt="Artist image"
          className="rounded-full w-full group-hover:brightness-90"
        />
        <div className="flex justify-center gap-2 absolute bottom-5 left-2/4 translate-x-[-50%] w-full group">
          <div className="opacity-0 bg-[#fff] text-display-3 p-3 rounded-full hover:brightness-[0.98] group-hover:opacity-100 transition duration-250">
            <IoMdPlay />
          </div>
          <div className="opacity-0 bg-[#fff] text-display-3 p-3 rounded-full hover:brightness-[0.98] group-hover:opacity-100 transition duration-250">
            <VscHeart />
          </div>
        </div>
      </Link>
      <div className="flex flex-col items-center">
        <Link href={`/artist/${id}`}>
          <h4 className="text-[#fff] text-display-3 hover:underline">
            Artist Name
          </h4>
        </Link>
        <h5 className="text-[#a2a2ad] text-display-4">10,000 fans</h5>
      </div>
    </div>
  );
};

export default ArtistItem;
