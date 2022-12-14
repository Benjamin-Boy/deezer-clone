import Image from "next/image";
import Link from "next/link";

import { IoMdPlay } from "react-icons/io";
import { VscHeart } from "react-icons/vsc";
import { BsThreeDots, BsChevronDown } from "react-icons/bs";
import { FaMicrophoneAlt } from "react-icons/fa";
import { TfiPlus, TfiMusic, TfiClose } from "react-icons/tfi";

import defaultArtwork from "../public/default-artwork.png";

const Queue = () => {
  const albumId = 0;
  const artistId = 0;
  const albumTrackArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  return (
    <div
      //   ref={queueOpenNode}
      className="z-30 absolute top-0 left-0 flex flex-col w-full bottom-10 bg-[#121216] rounded-md overflow-hidden"
    >
      <div className="flex justify-end items-center pr-10 h-[55px]">
        <div className="relative text-display-4 text-[#fff] p-2 cursor-pointer rounded-full hover:bg-[#383842] group">
          <BsChevronDown />
          <div className="hidden absolute z-30 left-2/4 translate-x-[-51%] bottom-[-33px] text-[#fff] bg-[#383842] text-display-5 whitespace-nowrap py-1 px-2 group-hover:block group-hover:animate-tooltipAppearBottom">
            Close
            <div className="absolute left-2/4 top-[-10px] translate-x-[-50%] w-0 h-0 border-[5px] border-solid border-transparent border-b-[#383842]"></div>
          </div>
        </div>
      </div>
      <div className="flex px-24 pt-8">
        <div className="grow min-w-[310px] pr-12 flex flex-col">
          <div className="relative">
            <Image
              src={defaultArtwork}
              placeholder="blur"
              alt="Artist image"
              className="w-full"
            />
            <div className="absolute top-4 left-4 bg-[#121216] rounded-sm py-[0.05rem] px-[0.5rem]">
              <h5 className="text-display-5 text-[#a2a2a2]">EXPLICIT</h5>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 pt-5">
            <div className="flex gap-2">
              <div className="relative text-[#fff] text-display-3 p-2 cursor-pointer rounded-full hover:bg-[#383842] group">
                <FaMicrophoneAlt />
                <div className="hidden absolute z-30 left-2/4 translate-x-[-51%] top-[-33px] text-[#fff] bg-[#383842] text-display-5 whitespace-nowrap py-1 px-2 group-hover:block group-hover:animate-tooltipAppear">
                  View Lyrics
                  <div className="absolute left-2/4 bottom-[-10px] translate-x-[-50%] w-0 h-0 border-[5px] border-solid border-transparent border-t-[#383842]"></div>
                </div>
              </div>
              <div className="text-[#fff] text-display-3 p-2 cursor-pointer rounded-full hover:bg-[#383842]">
                <TfiPlus />
              </div>
              <div className="relative text-[#fff] text-display-3 p-2 cursor-pointer rounded-full hover:bg-[#383842] group">
                <VscHeart />
                <div className="hidden absolute z-30 left-2/4 translate-x-[-51%] top-[-33px] text-[#fff] bg-[#383842] text-display-5 whitespace-nowrap py-1 px-2 group-hover:block group-hover:animate-tooltipAppear">
                  Add to favourite tracks
                  <div className="absolute left-2/4 bottom-[-10px] translate-x-[-50%] w-0 h-0 border-[5px] border-solid border-transparent border-t-[#383842]"></div>
                </div>
              </div>
              <div className="text-[#fff] text-display-3 p-2 cursor-pointer rounded-full hover:bg-[#383842]">
                <BsThreeDots />
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex justify-center items-center gap-4">
                <div className="relative bg-[#121216] rounded-sm border border-[#a2a2a2] px-[0.3rem] py-[0.1rem] group">
                  <h5 className="text-display-5 text-[#a2a2a2] leading-none">
                    E
                  </h5>
                  <div className="hidden absolute z-30 left-2/4 translate-x-[-51%] top-[-33px] text-[#fff] bg-[#383842] text-display-5 whitespace-nowrap py-1 px-2 group-hover:block group-hover:animate-tooltipAppear">
                    EXPLICIT
                    <div className="absolute left-2/4 bottom-[-10px] translate-x-[-50%] w-0 h-0 border-[5px] border-solid border-transparent border-t-[#383842]"></div>
                  </div>
                </div>
                <Link href={`/album/${albumId}`}>
                  <h3 className="inline-block text-display-3 font-bold leading-none text-[#fff] hover:underline">
                    Track Name
                  </h3>
                </Link>
              </div>
              <Link href={`/artist/${artistId}`}>
                <h4 className="inline-block text-display-4 text-[#a2a2a2] hover:underline">
                  Artist Name
                </h4>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[60%] flex flex-col grow pl-5">
          <div className="flex justify-between items-center pb-3 border-b border-[#2f2f2f]">
            <div className="flex items-center gap-1">
              <h3 className="text-[#fff] text-display-4">Queue</h3>
              <h3 className="text-[#a2a2a2] text-display-4">
                &#183; 60 tracks &#183; 3 hrs 12 minutes
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-[#fff] text-display-4">
                Automated recommendations
              </h3>
              <div className="relative w-[30px] h-[15px] bg-[#ef5466] rounded-full cursor-pointer">
                <div className="absolute top-2/4 translate-y-[-50%] right-[2px] z-20 bg-[#fff] rounded-full w-[13px] h-[13px]"></div>
              </div>
              <div className="text-[#fff] bg-[#52525d] rounded-full p-2 cursor-pointer hover:bg-[#747484] transition duration-200">
                <TfiMusic />
              </div>
            </div>
          </div>
          <div className="max-h-[calc(100vh-210px)] overflow-y-scroll">
            {albumTrackArray.map((item) => {
              return (
                <div
                  key={item}
                  className="flex justify-between items-center gap-4 hover:bg-[#16161d] p-2 group"
                >
                  <div className="">
                    <div className="relative w-[40px] cursor-pointer">
                      <Image
                        src={defaultArtwork}
                        placeholder="blur"
                        alt="Album image"
                        className="border border-[#42424c]"
                      />
                      <div className="hidden absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] text-display-3 text-[#18181f] bg-[#fff] rounded-full p-2 cursor-pointer hover:brightness-95 group-hover:block">
                        <IoMdPlay />
                      </div>
                    </div>
                  </div>
                  <div className="grow flex justify-between items-center gap-4">
                    <div className="text-[#fff] cursor-pointer hover:underline">
                      1. Track Name
                    </div>
                    <div className="flex items-center gap-2 text-display-3 text-[#fff]">
                      <div className="rounded-full p-2 cursor-pointer hover:bg-[#42424c] transition duration-200">
                        <FaMicrophoneAlt />
                      </div>
                      <div className="rounded-full p-2 cursor-pointer hover:bg-[#42424c] transition duration-200">
                        <VscHeart />
                      </div>
                      <div className="rounded-full p-2 cursor-pointer hover:bg-[#42424c] transition duration-200">
                        <BsThreeDots />
                      </div>
                    </div>
                  </div>
                  <div className="text-[#fff] p-2 cursor-pointer hover:underline w-[15%]">
                    Artist Name
                  </div>
                  <td className="text-[#a2a2ad] p-2 w-[7%]">00:00</td>
                  <div className="text-[#a2a2a2] text-display-3  w-[5%]">
                    <button>
                      <TfiClose />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Queue;
