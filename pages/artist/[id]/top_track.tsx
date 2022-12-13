import Image from "next/image";

import ArtistIndexLayout from "../../../components/ArtistIndexLayout";
import MainLayout from "../../../components/MainLayout";

import { IoMdPlay } from "react-icons/io";
import { RiShareForwardLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsChevronExpand } from "react-icons/bs";
import { TbMicrophone2 } from "react-icons/tb";
import { VscHeart } from "react-icons/vsc";
import { BsThreeDots } from "react-icons/bs";

import defaultArtwork from "../../../public/default-artwork.png";

const TopTrack = () => {
  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <MainLayout>
      <ArtistIndexLayout>
        <div className="w-full p-6">
          <h1 className="text-[#fff] text-display-1 font-bold mb-3">
            Top tracks
          </h1>
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-start gap-2 w-[40%] bg-[#23232D] border border-[#42424c] rounded-md p-1 pr-8 hover:border-[#90909a] transition duration-300">
              <div className="text-[#90909a] text-display-3 cursor-text">
                <CiSearch />
              </div>

              <input
                type="text"
                placeholder="Search within tracks"
                className="bg-[#23232D] text-[#fff] outline-none w-full"
              />
            </div>
          </div>
        </div>
        <div className="px-6">
          <table className="w-full">
            <tr className="text-[#a2a2ad] w-full border-b border-[#42424c] text-display-4">
              <th className="text-left px-2 py-4 grow">
                <div className="inline-block cursor-pointer group">
                  <div className="flex items-center gap-1 ">
                    <div className="group-hover:underline">TRACK</div>
                    <div className="opacity-0 text-display-3 group-hover:opacity-100 transition duration-150">
                      <BsChevronExpand />
                    </div>
                  </div>
                </div>
              </th>
              <th className="text-left px-2 py-4 w-[15%]">
                <div className="inline-block cursor-pointer group">
                  <div className="flex items-center gap-1 ">
                    <div className="group-hover:underline">ALBUM</div>
                    <div className="opacity-0 text-display-3 group-hover:opacity-100 transition duration-150">
                      <BsChevronExpand />
                    </div>
                  </div>
                </div>
              </th>
              <th className="text-left px-2 py-4 w-[5%]">
                <div className="inline-block cursor-pointer group">
                  <div className="flex items-center gap-1 ">
                    <div className="group-hover:underline text-display-3">
                      <AiOutlineClockCircle />
                    </div>
                    <div className="opacity-0 text-display-3 group-hover:opacity-100 transition duration-150">
                      <BsChevronExpand />
                    </div>
                  </div>
                </div>
              </th>
              <th className="text-left px-2 py-4 w-[5%]">
                <div className="inline-block cursor-pointer group">
                  <div className="flex items-center gap-1">
                    <div className="group-hover:underline">POP.</div>
                    <div className="opacity-0 text-display-3 group-hover:opacity-100 transition duration-150">
                      <BsChevronExpand />
                    </div>
                  </div>
                </div>
              </th>
              <th className="text-left px-2 py-4 w-[5%]">
                <div className="inline-block cursor-pointer group">
                  <div className="flex items-center gap-1 ">
                    <div className="group-hover:underline">
                      <input
                        type="checkbox"
                        className="cursor-pointer appearance-none h-[20px] w-[20px] rounded-sm border border-[#42424c]"
                      />
                    </div>
                    <div className="opacity-0 text-display-3 group-hover:opacity-100 transition duration-150">
                      <BsChevronExpand />
                    </div>
                  </div>
                </div>
              </th>
            </tr>
            {array.map((item) => {
              return (
                <tr
                  key={item}
                  className="bg-transparent hover:bg-[#18181f] group"
                >
                  <td className="text-left flex items-center p-2">
                    <div className="inline-block w-full">
                      <div className="flex justify-between items-center gap-4 text-[#fff] ">
                        <div className="flex items-center gap-4">
                          <div className="relative w-[40px]">
                            <Image
                              src={defaultArtwork}
                              placeholder="blur"
                              alt="Album image"
                              className="w-[40px] rounded-sm"
                            />
                            <div className="hidden absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] text-[#18181f] bg-[#fff] rounded-full p-2 cursor-pointer group-hover:block">
                              <IoMdPlay />
                            </div>
                          </div>
                          <div>
                            <h3 className="cursor-pointer hover:underline">
                              1. Track Name
                            </h3>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-display-3">
                          <div className="p-2 rounded-full cursor-pointer hover:bg-[#34343b]">
                            <TbMicrophone2 />
                          </div>
                          <div className="p-2 rounded-full cursor-pointer hover:bg-[#34343b]">
                            <VscHeart />
                          </div>
                          <div className="p-2 rounded-full cursor-pointer hover:bg-[#34343b]">
                            <BsThreeDots />
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-[#fff] p-2 cursor-pointer hover:underline">
                    Album Name
                  </td>
                  <td className="text-[#a2a2ad] p-2">00:00</td>
                  <td className="p-2">
                    <div className="flex gap-[0.1rem] p-2">
                      <div className="h-[15px] w-[2px] bg-[#a2a2ad]"></div>
                      <div className="h-[15px] w-[2px] bg-[#a2a2ad]"></div>
                      <div className="h-[15px] w-[2px] bg-[#a2a2ad]"></div>
                      <div className="h-[15px] w-[2px] bg-[#a2a2ad]"></div>
                      <div className="h-[15px] w-[2px] bg-[#a2a2ad]"></div>
                    </div>
                  </td>
                  <td className="p-2">
                    <input
                      type="checkbox"
                      className="cursor-pointer appearance-none h-[20px] w-[20px] rounded-sm border border-[#42424c]"
                    />
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </ArtistIndexLayout>
    </MainLayout>
  );
};

export default TopTrack;
