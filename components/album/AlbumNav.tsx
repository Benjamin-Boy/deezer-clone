import Image from "next/image";
import Link from "next/link";

import { IoMdPlay } from "react-icons/io";
import { VscHeart } from "react-icons/vsc";
import { BsThreeDots } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useEffect } from "react";
import { getAlbums } from "../../features/albumSlice";

import defaultArtwork from "../../public/default-artwork.png";

import { Album } from "../../typings.d";

const AlbumNav = () => {
  const albumId = "clbnpn2jh0mpi0bwb69s9sh6z";

  const { albums } = useAppSelector((state) => state.albums);
  const dispatch = useAppDispatch();

  const album = albums.find((album: Album) => album.id === albumId);
  const artistId = album?.artists[0].id;

  useEffect(() => {
    dispatch(getAlbums());
  }, []);

  if (!album) {
    return <h1>LOADING...</h1>;
  }

  return (
    <div className="flex items-start p-6 gap-8">
      <Image
        src={album ? album.image.url : defaultArtwork}
        width={235}
        height={235}
        alt="Profile image"
        className="rounded-md max-w-[235px] w-[20%]"
      />

      <div className="w-full flex flex-col gap-3">
        <h1 className="text-display-1 text-[#fff] font-bold leading-none py-1">
          {album.name}
        </h1>
        <div className="flex items-center gap-2">
          <Image
            src={album ? album.image.url : defaultArtwork}
            width={30}
            height={30}
            alt="Profile image"
            className="rounded-full w-[30px]"
          />
          <Link href={`/artist/${artistId}`}>
            <h3 className="text-display-3 text-[#fff] leading-none hover:underline">
              {album.artists.map((artist) => artist.name)}
            </h3>
          </Link>
        </div>
        <h4 className="text-display-4 text-[#c1c1ce] leading-none">
          {album.songs.length} tracks -{" "}
          {Math.floor(
            album.songs
              .map((song) => song.duration)
              .reduce((prev, curr) => prev + curr) / 60
          )}{" "}
          minutes - {new Date(album.releaseDate).toLocaleDateString("en-GB")} -{" "}
          {album.followers} fans
        </h4>
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
  );
};

export default AlbumNav;
