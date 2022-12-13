import Image from "next/image";
import Link from "next/link";

import { IoMdPlay } from "react-icons/io";
import { VscHeart } from "react-icons/vsc";
import { BsThreeDots } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

import defaultArtist from "../public/default-artwork.png";
import defaultAvatar from "../public/default-avatar.jpg";

const AlbumNav = () => {
  const id = 0;

  return (
    <div>
      <div className="flex items-start p-6 gap-8">
        <Image
          src={defaultArtist}
          placeholder="blur"
          alt="Profile image"
          className="rounded-md max-w-[235px] w-[20%]"
        />

        <div className="w-full flex flex-col gap-3">
          <h1 className="text-display-1 text-[#fff] font-bold leading-none py-1">
            Playlist Name
          </h1>
          <div className="flex items-center gap-2">
            <Image
              src={defaultAvatar}
              placeholder="blur"
              alt="User avatar"
              className="rounded-full w-[30px]"
            />
            <Link href={`/artist/${id}`}>
              <h3 className="text-display-3 text-[#fff] leading-none hover:underline">
                Creator Name
              </h3>
            </Link>
          </div>
          <div>
            <p className="text-display-3 text-[#c1c1ce] leading-none">
              1Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <h4 className="text-display-4 text-[#c1c1ce] leading-none">
              11 tracks - 49 minutes - 10,000 fans - Updated: 3 months ago
            </h4>
          </div>
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
      <div className="w-full px-6">
        <div className="flex items-center justify-start gap-2 w-[40%] bg-[#23232D] border border-[#42424c] rounded-md p-1 pr-8 hover:border-[#90909a] transition duration-300">
          <div className="text-[#90909a] text-display-3 cursor-text">
            <CiSearch />
          </div>

          <input
            type="text"
            placeholder="Search within tracks"
            className="bg-[#23232D] text-[#fff] outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default AlbumNav;
