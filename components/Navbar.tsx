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

  const id = 18007111;

  return (
    <div className="fixed top-0 z-20 min-w-[14rem] h-screen bg-[#191922] border-r border-[#42424c]">
      <Image
        className="pl-5 pt-3"
        src={logoLight}
        width={140}
        placeholder="blur"
        alt="Deezer logo"
      />
      <div className="mt-[16rem]">
        <ul className="flex flex-col gap-5">
          <Link href="/">
            <li
              className={`${
                router.pathname == "/" ? "active" : "border-transparent"
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
                router.pathname == "/podcasts" ? "active" : "border-transparent"
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
                router.pathname == "/radio" ? "active" : "border-transparent"
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
                  ? "active"
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
              router.pathname == `/profile/${id}`
                ? "active"
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
          <ul className="mt-4 pl-14 flex flex-col gap-5">
            <li className="text-display-5 text-[#a2a2ad] cursor-pointer hover:text-[#EF5466] transition duration-200 ease-in-out">
              Favourite tracks
            </li>
            <li className="text-display-5 text-[#a2a2ad] cursor-pointer hover:text-[#EF5466] transition duration-200 ease-in-out">
              Playlists
            </li>
            <li className="text-display-5 text-[#a2a2ad] cursor-pointer hover:text-[#EF5466] transition duration-200 ease-in-out">
              Albums
            </li>
            <li className="text-display-5 text-[#a2a2ad] cursor-pointer hover:text-[#EF5466] transition duration-200 ease-in-out">
              Artists
            </li>
            <li className="text-display-5 text-[#a2a2ad] cursor-pointer hover:text-[#EF5466] transition duration-200 ease-in-out">
              Podcasts
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
