import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useEffect } from "react";
import { getSongs } from "../../features/songSlice";

import { IoMdPlay } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsChevronExpand } from "react-icons/bs";
import { TbMicrophone2 } from "react-icons/tb";
import { VscHeart } from "react-icons/vsc";
import { BsThreeDots } from "react-icons/bs";

import { Song } from "../../typings.d";

import { durationFormat } from "../../services/durationFormat";

import defaultArtwork from "../../public/default-artwork.png";

const ArtistTopTrack = () => {
  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const router = useRouter();
  const { id } = router.query;

  const { songs } = useAppSelector((state) => state.songs);
  const dispatch = useAppDispatch();

  const songArr: Song[] = [];

  songs.filter((song) => {
    song.artists.forEach((artist) => {
      if (artist.id === id) {
        songArr.push(song);
      }
    });
  });

  useEffect(() => {
    dispatch(getSongs());
  }, []);

  if (!songs) {
    return <h1>LOADING...</h1>;
  }

  return (
    <>
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
          {songArr.map(
            ({ id, name, trackNumber, duration, popularity, albums }) => {
              return (
                <tr
                  key={id}
                  className="bg-transparent hover:bg-[#18181f] group"
                >
                  <td className="text-left flex items-center p-2">
                    <div className="inline-block w-full">
                      <div className="flex justify-between items-center gap-4 text-[#fff] ">
                        <div className="flex items-center gap-4">
                          <div className="relative w-[40px]">
                            <Image
                              src={
                                songs.length > 0
                                  ? albums[0].image.url
                                  : defaultArtwork
                              }
                              width={40}
                              height={40}
                              alt="Album image"
                              className="w-[40px] rounded-sm"
                            />
                            <div className="hidden absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] text-[#18181f] bg-[#fff] rounded-full p-2 cursor-pointer group-hover:block">
                              <IoMdPlay />
                            </div>
                          </div>
                          <div>
                            <h3 className="cursor-pointer hover:underline">
                              {trackNumber}. {name}
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
                    <Link href={`/album/${albums[0].id}`}>
                      {albums[0].name}
                    </Link>
                  </td>
                  <td className="text-[#a2a2ad] p-2">
                    {durationFormat(duration)}
                  </td>
                  <td className="p-2">
                    <div className="flex gap-[0.1rem] p-2">
                      {[...Array(popularity)].map((_, index) => {
                        return (
                          <div
                            key={index}
                            className="h-[15px] w-[2px] bg-[#fff]"
                          ></div>
                        );
                      })}

                      {Array.from({ length: 5 - popularity }).map(
                        (_, index) => {
                          return (
                            <div
                              key={index}
                              className="h-[15px] w-[2px] bg-[#a2a2ad]"
                            ></div>
                          );
                        }
                      )}
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
            }
          )}
        </table>
      </div>
    </>
  );
};

export default ArtistTopTrack;
