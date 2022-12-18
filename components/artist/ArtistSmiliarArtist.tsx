import Image from "next/image";
import ListTitle from "./../ListTitle";

import { IoMdPlay } from "react-icons/io";
import { VscHeart } from "react-icons/vsc";
import { BsThreeDots } from "react-icons/bs";

import defaultArtwork from "../../public/default-artwork.png";

const ArtistSmiliarArtist = () => {
  const id = 0;
  const artistsArray = [1, 2, 3, 4, 5, 6];

  return (
    <div className="w-[25%] md:min-w-[380px] pl-10">
      <ListTitle
        title="Similar artists"
        titlePath={`/artist/${id}/related_artists`}
      />
      <div className="flex flex-col gap-5">
        {artistsArray.map((item) => {
          return (
            <div
              key={item}
              className="flex justify-between items-center group/playlist"
            >
              <div className="relative w-[55px] cursor-pointer group/image">
                <Image
                  src={defaultArtwork}
                  placeholder="blur"
                  alt="Album image"
                  className="rounded-full"
                />
                <div className="hidden absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] text-display-2 text-[#18181f] bg-[#fff] rounded-full p-3 cursor-pointer hover:brightness-95 group-hover/image:block">
                  <IoMdPlay />
                </div>
              </div>
              <div className="grow pl-4">
                <h3 className="inline-block text-[#fff] text-display-3 cursor-pointer hover:underline">
                  Playlist Name
                </h3>

                <h4 className="text-[#a2a2a2] text-display-4 cursor-default">
                  50 tracks - 10,000 fans
                </h4>
              </div>
              <div className="flex gap-4  p-4">
                <div className="hidden text-[#a2a2a2] text-display-3 cursor-pointer rounded-full p-1 hover:text-[#fff] hover:bg-[#42424c] transition duration-200 group-hover/playlist:block">
                  <BsThreeDots />
                </div>
                <div className="text-[#a2a2a2] text-display-3 cursor-pointer rounded-full p-1 hover:text-[#fff] hover:bg-[#42424c] transition duration-200">
                  <VscHeart />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="text-[#fff] text-display-4 font-bold px-4 py-1 my-4 rounded-full border border-[#42424c] cursor-pointer hover:bg-[#34343b] transition duration-200">
        SEE MORE ARTISTS
      </button>
    </div>
  );
};

export default ArtistSmiliarArtist;
