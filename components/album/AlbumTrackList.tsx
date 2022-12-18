import Image from "next/image";

import { IoMdPlay } from "react-icons/io";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsChevronExpand } from "react-icons/bs";
import { TbMicrophone2 } from "react-icons/tb";
import { VscHeart } from "react-icons/vsc";
import { BsThreeDots } from "react-icons/bs";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useEffect } from "react";
import { getAlbums } from "../../features/albumSlice";

import { Album } from "../../typings.d";
import { durationFormat } from "../../services/durationFormat";
import { trackPopularity } from "../../services/trackPopularity";

import defaultArtwork from "../../public/default-artwork.png";

const AlbumTrackList = () => {
  const albumId = "clbnpn2jh0mpi0bwb69s9sh6z";

  const { albums } = useAppSelector((state) => state.albums);
  const dispatch = useAppDispatch();

  const album = albums.find((album: Album) => album.id === albumId);

  useEffect(() => {
    dispatch(getAlbums());
  }, []);

  if (!album) {
    return <h1>LOADING...</h1>;
  }

  return (
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
        {album.songs.map(({ id, name, duration, trackNumber, popularity }) => {
          return (
            <tr key={id} className="bg-transparent hover:bg-[#18181f] group">
              <td className="text-left flex items-center p-2">
                <div className="inline-block w-full">
                  <div className="flex justify-between items-center gap-4 text-[#fff] ">
                    <div className="flex items-center gap-4">
                      <div className="relative w-[40px]">
                        <Image
                          src={album ? album.image.url : defaultArtwork}
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
              <td className="text-[#a2a2ad] p-2">{durationFormat(duration)}</td>
              <td className="p-2">
                {/* <div className="flex gap-[0.1rem] p-2">
                  {trackPopularity(popularity) as React.ReactNode}
                </div> */}
                <div className="flex gap-[0.1rem] p-2">
                  {[...Array(popularity)].map((_, index) => {
                    return (
                      <div
                        key={index}
                        className="h-[15px] w-[2px] bg-[#fff]"
                      ></div>
                    );
                  })}

                  {Array.from({ length: 5 - popularity }).map((_, index) => {
                    return (
                      <div
                        key={index}
                        className="h-[15px] w-[2px] bg-[#a2a2ad]"
                      ></div>
                    );
                  })}
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
  );
};

export default AlbumTrackList;
