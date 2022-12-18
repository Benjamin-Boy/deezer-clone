import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { IoMdPlay } from "react-icons/io";
import { VscHeart } from "react-icons/vsc";
import { BsThreeDots } from "react-icons/bs";

import defaultArtist from "../../public/default-artwork.png";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useEffect } from "react";
import { getArtists } from "../../features/artistSlice";

import { Artist } from "../../typings.d";

const ArtistNav = () => {
  const router = useRouter();
  const { id } = router.query;

  const { artists } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const artist = artists.artists.find((artist: Artist) => artist.id === id);

  useEffect(() => {
    dispatch(getArtists());
  }, []);

  if (!artist) {
    return <h1>LOADING...</h1>;
  }

  return (
    <>
      <div className="flex items-center p-6 gap-8">
        <Image
          src={artist ? artist.image.url : defaultArtist}
          width={235}
          height={235}
          alt="Profile image"
          className="rounded-full max-w-[235px] w-[20%]"
        />

        <div className="flex flex-col gap-3">
          <h1 className="text-display-1 text-[#fff] font-bold leading-none">
            {artist.name}
          </h1>
          <h4 className="text-display-4 text-[#c1c1ce] leading-none">
            {artist.followers} fans
          </h4>
          <div className="flex items-center gap-4">
            <button className="bg-[#ef5466] text-[#fff] font-bold rounded-full py-2 px-6 flex items-center gap-2 hover:bg-[#d61e34] transition duration-300">
              <IoMdPlay />
              <h1>MIX</h1>
            </button>
            <button className="text-[#fff] text-display-2 p-2 rounded-full border border-[#42424c] cursor-pointer hover:bg-[#34343b] transition duration-200">
              <VscHeart />
            </button>
            <button className="text-[#fff] text-display-2 p-2 rounded-full border border-[#42424c] cursor-pointer hover:bg-[#34343b] transition duration-200">
              <BsThreeDots />
            </button>
          </div>
        </div>
      </div>

      <div className="px-6">
        <ul className="text-[#c1c1ce] flex gap-12 border-b border-[#222224]">
          <Link href={`/artist/${id}`}>
            <li
              className={`cursor-pointer pb-4 border-b-2 ${
                router.pathname == `/artist/[id]`
                  ? "text-[#fff] border-b-2 border-[#ef5466] hover:border-[#ef5466]"
                  : "border-transparent"
              } hover:text-[#fff] hover:border-[#c1c1ce] transition duration-250`}
            >
              Discography
            </li>
          </Link>
          <Link href={`/artist/${id}/top_track`}>
            <li
              className={`cursor-pointer pb-4 border-b-2 ${
                router.pathname == `/artist/[id]/top_track`
                  ? "text-[#fff] border-b-2 border-[#ef5466] hover:border-[#ef5466]"
                  : "border-transparent"
              } hover:text-[#fff] hover:border-[#c1c1ce] transition duration-250`}
            >
              Top tracks
            </li>
          </Link>
          <Link href={`/artist/${id}/related_artist`}>
            <li
              className={`cursor-pointer pb-4 border-b-2 ${
                router.pathname == `/artist/[id]/related_artist`
                  ? "text-[#fff] border-b-2 border-[#ef5466] hover:border-[#ef5466]"
                  : "border-transparent"
              } hover:text-[#fff] hover:border-[#c1c1ce] transition duration-250`}
            >
              Similar artists
            </li>
          </Link>
          <Link href={`/artist/${id}/related_playlist`}>
            <li
              className={`cursor-pointer pb-4 border-b-2 ${
                router.pathname == `/artist/[id]/related_playlist`
                  ? "text-[#fff] border-b-2 border-[#ef5466] hover:border-transparent"
                  : "border-transparent"
              } hover:text-[#fff] hover:border-[#c1c1ce] transition duration-250`}
            >
              Playlists
            </li>
          </Link>
          {artist.isOnTour && (
            <Link href={`/artist/${id}/concert`}>
              <li
                className={`cursor-pointer border-b-2 ${
                  router.pathname == `/artist/[id]/concert`
                    ? "text-[#fff] border-b-2 border-[#ef5466] hover:border-[#ef5466]"
                    : "border-transparent"
                } transition duration-250`}
              >
                {router.pathname != `/artist/[id]/concert` ? (
                  <button className="bg-[#ef5466] text-[#fff] font-bold rounded-sm py-2 px-3 mt-[-8px] flex items-center gap-2 hover:bg-[#d61e34] transition duration-200">
                    <h1>On tour</h1>
                  </button>
                ) : (
                  <div className="pb-4">On tour</div>
                )}
              </li>
            </Link>
          )}
          <Link href={`/artist/${id}/biography`}>
            <li
              className={`cursor-pointer pb-4 border-b-2 ${
                router.pathname == `/artist/[id]/biography`
                  ? "text-[#fff] border-b-2 border-[#ef5466] hover:border-[#ef5466]"
                  : "border-transparent"
              } hover:text-[#fff] hover:border-[#c1c1ce] transition duration-250`}
            >
              Bio
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default ArtistNav;
