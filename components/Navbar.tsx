import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import logoDark from "../public/deezer-logo-dark.png";
import logoLight from "../public/deezer-logo-light.png";

import { VscHeart } from "react-icons/vsc";
import { FaMicrophoneAlt } from "react-icons/fa";
import { RiRadio2Line } from "react-icons/ri";
import { SlGrid } from "react-icons/sl";
import { BsMusicNoteBeamed } from "react-icons/bs";

const Navbar = () => {
  const router = useRouter();

  const id = 0;

  return (
    <div className="fixed top-0 z-20 min-w-[14rem] h-screen bg-[#191922] border-r border-[#42424c]">
      <Link href="/">
        <Image
          className="pl-5 pt-3"
          src={logoLight}
          width={140}
          placeholder="blur"
          alt="Deezer logo"
        />
      </Link>
      <div className="mt-[16rem]">
        <ul className="flex flex-col gap-5">
          <Link href="/">
            <li
              className={`${
                router.pathname == "/" ? "navbar-active" : "border-transparent"
              } border-l-4 border-transparent pl-5 cursor-pointer hover:text-[#EF5466] text-white transition duration-200 ease-in-out`}
            >
              <div className="flex items-center gap-3">
                <div className="text-display-2">
                  <BsMusicNoteBeamed />
                </div>
                <h3 className="text-display-3 font-bold">Music</h3>
              </div>
            </li>
          </Link>
          <Link href="/podcasts">
            <li
              className={`${
                router.pathname == "/podcasts"
                  ? "navbar-active"
                  : "border-transparent"
              } border-l-4 border-transparent pl-5 cursor-pointer hover:text-[#EF5466] text-white transition duration-200 ease-in-out`}
            >
              <div className="flex items-center gap-3 text-display-2">
                <div className="text-display-2">
                  <FaMicrophoneAlt />
                </div>
                <h1 className="text-display-3 font-bold">Podcasts</h1>
              </div>
            </li>
          </Link>
          <Link href="/radio">
            <li
              className={`${
                router.pathname == "/radio"
                  ? "navbar-active"
                  : "border-transparent"
              } border-l-4 border-transparent pl-5 cursor-pointer hover:text-[#EF5466] text-white transition duration-200 ease-in-out`}
            >
              <div className="flex items-center gap-3 text-display-2">
                <div className="text-display-2">
                  <RiRadio2Line />
                </div>
                <h1 className="text-display-3 font-bold">Radio</h1>
              </div>
            </li>
          </Link>
          <Link href="/channels/explore">
            <li
              className={`${
                router.pathname == "/channels/explore"
                  ? "navbar-active"
                  : "border-transparent"
              } border-l-4 border-transparent pl-5 cursor-pointer hover:text-[#EF5466] text-white transition duration-200 ease-in-out`}
            >
              <div className="flex items-center gap-3 text-display-3">
                <div className="text-display-2">
                  <SlGrid />
                </div>
                <h1 className="text-display-3 font-bold">Explore</h1>
              </div>
            </li>
          </Link>

          <Link
            href={`/profile/${id}`}
            className={`${
              router.pathname == `/profile/[id]`
                ? "navbar-active"
                : "border-transparent"
            } border-l-4 border-transparent pl-5 cursor-pointer hover:text-[#EF5466] text-white transition duration-200 ease-in-out`}
          >
            <li>
              <div className="flex items-center gap-3 text-display-2">
                <div className="text-display-2">
                  <VscHeart />
                </div>
                <h1 className="text-display-3 font-bold">Favourites</h1>
              </div>
            </li>
          </Link>
          <ul className="mt-2 flex flex-col gap-3">
            <Link href={`/profile/${id}/loved`}>
              <li
                className={`cursor-pointer pl-14 py-1 border-l-4 text-display-5 text-[#a2a2ad] hover:text-[#ef5466] transition duration-200 ${
                  router.pathname == `/profile/[id]/loved`
                    ? "text-[#ef5466] border-[#ef5466]"
                    : "border-transparent"
                }`}
              >
                Favourite tracks
              </li>
            </Link>
            <Link href={`/profile/${id}/playlists`}>
              <li
                className={`cursor-pointer pl-14 py-1 border-l-4 text-display-5 text-[#a2a2ad] hover:text-[#ef5466] transition duration-200 ${
                  router.pathname == `/profile/[id]/playlists`
                    ? "text-[#ef5466] border-[#ef5466]"
                    : "border-transparent"
                }`}
              >
                Playlists
              </li>
            </Link>
            <Link href={`/profile/${id}/albums`}>
              <li
                className={`cursor-pointer pl-14 py-1 border-l-4 text-display-5 text-[#a2a2ad] hover:text-[#ef5466] transition duration-200 ${
                  router.pathname == `/profile/[id]/albums`
                    ? "text-[#ef5466] border-[#ef5466]"
                    : "border-transparent"
                }`}
              >
                Albums
              </li>
            </Link>
            <Link href={`/profile/${id}/artists`}>
              <li
                className={`cursor-pointer pl-14 py-1 border-l-4 text-display-5 text-[#a2a2ad] hover:text-[#ef5466] transition duration-200 ${
                  router.pathname == `/profile/[id]/artists`
                    ? "text-[#ef5466] border-[#ef5466]"
                    : "border-transparent"
                }`}
              >
                Artists
              </li>
            </Link>
            <Link href={`/profile/${id}/podcasts`}>
              <li
                className={`cursor-pointer pl-14 py-1 border-l-4 text-display-5 text-[#a2a2ad] hover:text-[#ef5466] transition duration-200 ${
                  router.pathname == `/profile/[id]/podcasts`
                    ? "text-[#ef5466] border-[#ef5466]"
                    : "border-transparent"
                }`}
              >
                Podcasts
              </li>
            </Link>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
