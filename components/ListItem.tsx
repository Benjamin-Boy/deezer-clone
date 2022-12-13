import Image from "next/image";
import Link from "next/link";

import { IoMdPlay } from "react-icons/io";
import { VscHeart } from "react-icons/vsc";
import { BsThreeDots } from "react-icons/bs";
import { IoIosRadio } from "react-icons/io";

import defaultArtwork from "../public/default-artwork.png";

import { Props } from "../typings.d";

const ListItem = ({
  type,
  name,
  artistName,
  trackNb,
  fansNb,
  date,
  itemPath,
  explicit,
}: Props) => {
  const id = 0;

  return (
    <div className="flex flex-col gap-1 min-w-[165px] xl:w-[25%] max-w-[265px]">
      {/* Image if type is album, artist or playlist */}
      {type !== "radio" && type !== "radioPage" && (
        <Link href={`${itemPath}`} className="relative group">
          <Image
            src={defaultArtwork}
            placeholder="blur"
            alt="Artist image"
            className={`${
              type === "artist" ? "rounded-full" : "rounded-md"
            } w-full group-hover:brightness-90`}
          />
          {(type === "playlist" ||
            type === "playlistPage" ||
            type === "album" ||
            type === "podcast" ||
            type === "artistPage") && (
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
          )}
          {type === "artist" && (
            <div className="flex justify-center gap-2 absolute bottom-5 left-2/4 translate-x-[-50%] w-full group">
              <div className="opacity-0 bg-[#fff] text-display-3 p-3 rounded-full hover:brightness-[0.98] group-hover:opacity-100 transition duration-250">
                <IoMdPlay />
              </div>
              <div className="opacity-0 bg-[#fff] text-display-3 p-3 rounded-full hover:brightness-[0.98] group-hover:opacity-100 transition duration-250">
                <VscHeart />
              </div>
            </div>
          )}
        </Link>
      )}
      {/* Image if type is radio on home page */}
      {type === "radio" && (
        <div className="relative bg-[#23232d] rounded-[1.2rem] p-5 xl:rounded-[2rem] hover:brightness-90 transition duration-300">
          <Image
            src={defaultArtwork}
            placeholder="blur"
            alt="Artist image"
            className="w-full"
          />
          <div className="absolute bottom-4 left-4 bg-[#fff] text-display-3 p-3 rounded-full cursor-pointer hover:brightness-[0.98] transition duration-250">
            <IoMdPlay />
          </div>
        </div>
      )}
      {/* Image if type is radio on radio page */}
      {type === "radioPage" && (
        <div className="relative bg-[#23232d] rounded-[1.2rem] p-5 xl:rounded-[2rem] hover:brightness-90 transition duration-300 max-w-[265px]">
          <Image
            src={defaultArtwork}
            placeholder="blur"
            alt="Artist image"
            className="w-full"
          />
          <div className="absolute bottom-4 left-4 bg-[#fff] text-display-3 p-3 rounded-full cursor-pointer hover:brightness-[0.98] transition duration-250">
            <IoMdPlay />
          </div>
        </div>
      )}
      <div className="flex flex-col items-start">
        {/* Infos if type is radio */}
        {type === "radio" ||
          (type === "radioPage" && (
            <div>
              <div className="flex gap-1 text-[#a2a2ad]">
                <h5 className="text-display-5">ON AIR </h5>
                <IoIosRadio />
              </div>
              <h3 className="text-[#fff] text-display-3 cursor-pointer hover:underline">
                {name}
              </h3>
            </div>
          ))}
        {/* Infos if type is playlist */}
        {type === "playlist" && (
          <div>
            <Link href={`/playlist/${id}`}>
              <h3 className="text-[#fff] text-display-3 cursor-pointer hover:underline">
                {name}
              </h3>
            </Link>
            <h5 className="text-[#a2a2ad] text-display-4">
              {trackNb} tracks - {fansNb} fans
            </h5>
          </div>
        )}
        {/* Infos if type is playlist on the playlist page */}
        {type === "playlistPage" && (
          <div>
            <Link href={`/playlist/${id}`}>
              <h3 className="text-[#fff] text-display-3 cursor-pointer hover:underline">
                {name}
              </h3>
            </Link>
            <h5 className="text-[#a2a2ad] text-display-4">public</h5>
          </div>
        )}
        {/* Infos if type is album */}
        {type === "album" && (
          <div>
            <Link href={`/album/${id}`}>
              <h3 className="text-[#fff] text-display-3 cursor-pointer hover:underline">
                {name}
              </h3>
            </Link>
            <Link href={`/artist/${id}`}>
              <h5 className="text-[#a2a2ad] text-display-4">
                by <span className="hover:underline">{artistName}</span>
              </h5>
            </Link>
            {date && (
              <h6 className="text-[#a2a2ad] text-display-5">
                Released on {date}
              </h6>
            )}
          </div>
        )}
      </div>
      {/* Infos if type is artist */}
      {type === "artist" && (
        <div className="flex flex-col items-center">
          <Link href={`/artist/${id}`}>
            <h3 className="text-[#fff] text-display-3 cursor-pointer hover:underline">
              {name}
            </h3>
          </Link>
          {fansNb && (
            <h5 className="text-[#a2a2ad] text-display-4">{fansNb} fans</h5>
          )}
        </div>
      )}
      {type === "podcast" && (
        <div className="flex flex-col">
          <Link href={`/podcast/${id}`}>
            <h3 className="text-[#fff] text-display-3 cursor-pointer hover:underline">
              {name}
            </h3>
          </Link>
        </div>
      )}
      {explicit && (
        <div>
          <h5 className="inline-block text-[#a2a2ad] text-display-5 py-0 px-2 rounded-sm border border-[#a2a2ad]">
            EXPLICIT
          </h5>
        </div>
      )}
    </div>
  );
};

export default ListItem;
