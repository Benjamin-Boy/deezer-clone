import Image from "next/image";
import Link from "next/link";

import ListTitle from "./../ListTitle";

import { IoMdPlay } from "react-icons/io";
import { VscHeart } from "react-icons/vsc";
import { BsThreeDots } from "react-icons/bs";
import { FaMicrophoneAlt } from "react-icons/fa";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useEffect } from "react";
import { getAlbums } from "../../features/albumSlice";

import defaultArtwork from "../../public/default-artwork.png";

import { Album } from "../../typings.d";

const ArtistLatestRelease = () => {
  const artistId = "clbnp526q0m7v0bvv35hppd1w";
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
    <div className="w-[75%]">
      <ListTitle title="Latest release" titlePath={`/album/${albumId}`} />
      <div className="flex p-6 bg-[#23232d] rounded-md">
        <div className="flex flex-col justify-between">
          <div className="relative w-[200px] group">
            <Link href={`/album/${albumId}`}>
              <Image
                src={album ? album.image.url : defaultArtwork}
                width={200}
                height={200}
                alt="Artist image"
                className="w-full group-hover:brightness-90"
              />
              <div className="flex gap-2 absolute bottom-3 left-3 w-full">
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
            </Link>
          </div>
          <div className="text-[#a2a2a2] text-display-5">@ 2022</div>
        </div>
        <div className="flex flex-col gap-4 grow pl-5">
          <div>
            <Link href={`/album/${albumId}`}>
              <h2 className="text-[#fff] text-display-2 hover:underline">
                {album.name}
              </h2>
            </Link>
            <h3 className="text-[#a2a2a2] text-display-4">
              {new Date(album.releaseDate).toLocaleDateString("en-GB")}
            </h3>
          </div>
          <div>
            {album.songs.slice(0, 6).map(({ id, name }) => {
              return (
                <div
                  key={id}
                  className="flex justify-between items-center hover:bg-[#16161d] p-2 group"
                >
                  <div className="flex items-center gap-4 ">
                    <div className="relative w-[40px] cursor-pointer">
                      <Image
                        src={album ? album.image.url : defaultArtwork}
                        width={40}
                        height={40}
                        alt="Album image"
                        className="border border-[#42424c]"
                      />
                      <div className="hidden absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] text-display-3 text-[#18181f] bg-[#fff] rounded-full p-2 cursor-pointer hover:brightness-95 group-hover:block">
                        <IoMdPlay />
                      </div>
                    </div>
                    <div className="text-[#fff] cursor-pointer hover:underline">
                      1. {name}
                    </div>
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
              );
            })}
          </div>
          <div>
            <Link href={`/album/${albumId}`}>
              <button className="text-[#fff] text-display-4 font-bold px-4 py-1 rounded-full border border-[#42424c] cursor-pointer hover:bg-[#34343b] transition duration-200">
                ACCESS ALBUM ({album.songs.length} TRACKS)
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistLatestRelease;
