import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { IoIosShuffle } from "react-icons/io";

import defaultProfile from "../public/default-avatar.jpg";

const ProfileNav = () => {
  const router = useRouter();
  const id = 0;

  return (
    <>
      <div className="flex items-center p-6 gap-8">
        <Image
          src={defaultProfile}
          placeholder="blur"
          alt="Profile image"
          className="rounded-full max-w-[235px] w-[20%]"
        />

        <div className="flex flex-col gap-3">
          <h1 className="text-display-1 text-[#fff] font-bold leading-none">
            Profile Name
          </h1>
          <h4 className="text-display-4 text-[#c1c1ce] leading-none">
            1 follower - 2 following
          </h4>
          <button className="bg-[#ef5466] text-[#fff] font-bold rounded-full py-2 px-6 flex items-center gap-2 hover:bg-[#d61e34] transition duration-300">
            <IoIosShuffle />
            <h1>SHUFFLE MY MUSIC</h1>
          </button>
        </div>
      </div>

      <div className="px-6">
        <ul className="text-[#c1c1ce] flex gap-12 border-b border-[#222224]">
          <Link href={`/profile/${id}`}>
            <li
              className={`cursor-pointer pb-4 border-b-2 ${
                router.pathname == `/profile/[id]`
                  ? "text-[#fff] border-b-2 border-[#ef5466]"
                  : "border-transparent"
              } hover:text-[#fff] hover:border-[#c1c1ce] transition duration-250`}
            >
              Highlights
            </li>
          </Link>
          <Link href={`/profile/${id}/loved`}>
            <li
              className={`cursor-pointer pb-4 border-b-2 ${
                router.pathname == `/profile/[id]/loved`
                  ? "text-[#fff] border-b-2 border-[#ef5466]"
                  : "border-transparent"
              } hover:text-[#fff] hover:border-[#c1c1ce] transition duration-250`}
            >
              Favourite tracks
            </li>
          </Link>
          <Link href={`/profile/${id}/playlists`}>
            <li
              className={`cursor-pointer pb-4 border-b-2 ${
                router.pathname == `/profile/[id]/playlists`
                  ? "text-[#fff] border-b-2 border-[#ef5466]"
                  : "border-transparent"
              } hover:text-[#fff] hover:border-[#c1c1ce] transition duration-250`}
            >
              Playlists
            </li>
          </Link>
          <Link href={`/profile/${id}/albums`}>
            <li
              className={`cursor-pointer pb-4 border-b-2 ${
                router.pathname == `/profile/[id]/albums`
                  ? "text-[#fff] border-b-2 border-[#ef5466]"
                  : "border-transparent"
              } hover:text-[#fff] hover:border-[#c1c1ce] transition duration-250`}
            >
              Albums
            </li>
          </Link>
          <Link href={`/profile/${id}/artists`}>
            <li
              className={`cursor-pointer pb-4 border-b-2 ${
                router.pathname == `/profile/[id]/artists`
                  ? "text-[#fff] border-b-2 border-[#ef5466]"
                  : "border-transparent"
              } hover:text-[#fff] hover:border-[#c1c1ce] transition duration-250`}
            >
              Artists
            </li>
          </Link>
          <Link href={`/profile/${id}/history`}>
            <li
              className={`cursor-pointer pb-4 border-b-2 ${
                router.pathname == `/profile/[id]/history`
                  ? "text-[#fff] border-b-2 border-[#ef5466]"
                  : "border-transparent"
              } hover:text-[#fff] hover:border-[#c1c1ce] transition duration-250`}
            >
              Listening history
            </li>
          </Link>
          <Link href={`/profile/${id}/podcasts`}>
            <li
              className={`cursor-pointer pb-4 border-b-2 ${
                router.pathname == `/profile/[id]/podcasts`
                  ? "text-[#fff] border-b-2 border-[#ef5466]"
                  : "border-transparent"
              } hover:text-[#fff] hover:border-[#c1c1ce] transition duration-250`}
            >
              Podcasts
            </li>
          </Link>
          <Link href={`/profile/${id}/personal_song`}>
            <li
              className={`cursor-pointer pb-4 border-b-2 ${
                router.pathname == `/profile/[id]/personal_song`
                  ? "text-[#fff] border-b-2 border-[#ef5466]"
                  : "border-transparent"
              } hover:text-[#fff] hover:border-[#c1c1ce] transition duration-250`}
            >
              My MP3s
            </li>
          </Link>
          <Link href={`/profile/${id}/following`}>
            <li
              className={`cursor-pointer pb-4 border-b-2 ${
                router.pathname == `/profile/[id]/following`
                  ? "text-[#fff] border-b-2 border-[#ef5466]"
                  : "border-transparent"
              } hover:text-[#fff] hover:border-[#c1c1ce] transition duration-250`}
            >
              Following
            </li>
          </Link>
          <Link href={`/profile/${id}/followers`}>
            <li
              className={`cursor-pointer pb-4 border-b-2 ${
                router.pathname == `/profile/[id]/followers`
                  ? "text-[#fff] border-b-2 border-[#ef5466]"
                  : "border-transparent"
              } hover:text-[#fff] hover:border-[#c1c1ce] transition duration-250`}
            >
              Followers
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default ProfileNav;
