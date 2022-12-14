import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import useClickOutside from "../hooks/useClickOutside";

import { CiSearch } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";
import { AiFillClockCircle } from "react-icons/ai";
import { IoMdPlay } from "react-icons/io";
import { FiChevronRight } from "react-icons/fi";

import defaultProfile from "../public/default-avatar.jpg";

const TopBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let searchNode = useClickOutside(() => {
    setSearchOpen(false);
  });
  let notifNode = useClickOutside(() => {
    setNotifOpen(false);
  });
  let settingsNode = useClickOutside(() => {
    setSettingsOpen(false);
  });

  return (
    <div className="fixed top-0 left-[14rem] right-0 z-20 h-[50px] bg-[#121216] border-b border-[#42424c] flex justify-between items-center py-7 px-4">
      <div
        ref={searchNode}
        className="relative flex items-center gap-1 w-[60%]"
      >
        <div className="text-display-3 text-[#a2a2ad] mt-2">
          <CiSearch />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="outline-none bg-[#121216] text-white text-display-3 w-full px-3"
          onClick={() => {
            setSearchOpen(!searchOpen);
          }}
        />
        <div className="text-display-4 text-white bg-[#42424c] rounded-full p-1">
          <TfiClose />
        </div>
        {searchOpen && (
          <div className="flex flex-col gap-4 absolute top-[40px] bg-[#23232d] rounded-lg w-full px-4 py-4">
            <div className="flex justify-between">
              <h3 className="text-[#fff] text-display-3 font-bold px-2">
                Search history
              </h3>
              <button className="text-[#a2a2ad] text-display-5 hover:underline hover:text-[#fff]">
                Clear
              </button>
            </div>
            <div className="flex justify-between items-center text-[#d3d3d5] p-2 rounded-md cursor-pointer hover:bg-[#42424c] transition duration-200">
              <h3 className=" text-display-3">Johnny Clegg</h3>
              <div className=" text-display-3">
                <AiFillClockCircle />
              </div>
            </div>
            <h3 className="text-[#fff] text-display-3 font-bold  px-2">
              Trending searches
            </h3>
          </div>
        )}
      </div>
      <div className="relative flex justify-end items-center gap-4">
        <div ref={notifNode} className="relative">
          <div
            className="relative text-display-2 text-white cursor-pointer rounded-full p-1 hover:bg-[#42424c] transition duration-200"
            onClick={() => setNotifOpen(!notifOpen)}
          >
            <IoMdNotifications />
            <div className="absolute top-[-3px] right-[-5px] flex justify-center items-center bg-[#ef5466] rounded-full w-[18px] h-[18px]">
              <h5 className="text-display-5">6</h5>
            </div>
          </div>
          {notifOpen && (
            <div className="flex flex-col absolute top-[40px] right-[-3rem] bg-[#23232d] rounded-lg w-[375px]">
              <div className="flex justify-between border-b border-[#42424c] p-4">
                <h3 className="text-[#fff] text-display-3 font-bold px-2">
                  Notifications
                </h3>
              </div>
              <div className="flex flex-col text-[#d3d3d5] overflow-auto max-h-[450px]">
                {array.map((item) => {
                  return (
                    <div
                      key={item}
                      className="flex flex-col gap-4 px-4 pt-4 pb-2 mb-1 border-b border-[#42424c] hover:bg-[#42424c] transition duration-200"
                    >
                      <div className="flex items-center gap-4">
                        <div className="relative cursor-pointer group">
                          <Image
                            className="w-[55px] rounded-md group-hover:brightness-90 transition duration-200"
                            src={defaultProfile}
                            width={30}
                            placeholder="blur"
                            alt="avatar"
                          />
                          <div className="opacity-0 absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] text-[#23232d] bg-[#fff] text-display-3 p-3 rounded-full group-hover:opacity-100 hover:brightness-95 transition duration-200">
                            <IoMdPlay />
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <h2 className="text-[#fff] text-display-3 cursor-pointer hover:underline">
                            Track Name
                          </h2>
                          <h2 className="text-[#9b9baf] text-display-4">
                            Artist Name
                          </h2>
                        </div>
                      </div>
                      <div className="text-display-5">
                        9 HOURS AGO - NEW SINGLE
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <div ref={settingsNode} className="relative">
          <div
            className="cursor-pointer hover:brightness-105"
            onClick={() => {
              setSettingsOpen(!settingsOpen);
            }}
          >
            <Image
              className="rounded-full"
              src={defaultProfile}
              width={30}
              placeholder="blur"
              alt="avatar"
            />
          </div>
          {settingsOpen && (
            <div className="flex flex-col absolute top-[40px] right-0 bg-[#23232d] rounded-lg w-[375px]">
              <div className="flex items-center gap-3 border-b border-[#42424c] p-4 w-full">
                <div>
                  <Image
                    className="w-[45px] rounded-full group-hover:brightness-90 transition duration-200"
                    src={defaultProfile}
                    width={30}
                    placeholder="blur"
                    alt="avatar"
                  />
                </div>

                <Link
                  href={``}
                  className="cursor-pointer text-display-2 text-white hover:text-[#EF5466] transition duration-200 ease-in-out group w-full"
                >
                  <div className="flex justify-between">
                    <h3 className="text-display-3">Profile Name</h3>
                    <div className="group-hover:animate-wiggle mt-[2px]">
                      <FiChevronRight />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex flex-col border-b border-[#42424c] p-4 w-full">
                <Link
                  href={``}
                  className="cursor-pointer text-display-2 text-white transition duration-200 ease-in-out group w-full"
                >
                  <div className="flex justify-between px-4 py-2 rounded-md hover:bg-[#42424c] transition duration-200">
                    <h3 className="text-display-3">Account Settings</h3>
                    <div className="group-hover:animate-wiggle mt-[2px]">
                      <FiChevronRight />
                    </div>
                  </div>
                </Link>
                <Link
                  href={``}
                  className="cursor-pointer text-display-2 text-white transition duration-200 ease-in-out group w-full"
                >
                  <div className="flex justify-between px-4 py-2 rounded-md hover:bg-[#42424c] transition duration-200">
                    <h3 className="text-display-3">Manage my subscription</h3>
                    <div className="group-hover:animate-wiggle mt-[2px]">
                      <FiChevronRight />
                    </div>
                  </div>
                </Link>
                <Link
                  href={``}
                  className="cursor-pointer text-display-2 text-white transition duration-200 ease-in-out group w-full"
                >
                  <div className="flex justify-between px-4 py-2 rounded-md hover:bg-[#42424c] transition duration-200">
                    <h3 className="text-display-3">Manage my exclusions</h3>
                    <div className="group-hover:animate-wiggle mt-[2px]">
                      <FiChevronRight />
                    </div>
                  </div>
                </Link>
                <Link
                  href={``}
                  className="cursor-pointer text-display-2 text-white transition duration-200 ease-in-out group w-full"
                >
                  <div className="flex justify-between px-4 py-2 rounded-md hover:bg-[#42424c] transition duration-200">
                    <h3 className="text-display-3">Get a gift card</h3>
                    <div className="group-hover:animate-wiggle mt-[2px]">
                      <FiChevronRight />
                    </div>
                  </div>
                </Link>
                <Link
                  href={``}
                  className="cursor-pointer text-display-2 text-white transition duration-200 ease-in-out group w-full"
                >
                  <div className="flex justify-between px-4 py-2 rounded-md hover:bg-[#42424c] transition duration-200">
                    <h3 className="text-display-3">Activate a code</h3>
                    <div className="group-hover:animate-wiggle mt-[2px]">
                      <FiChevronRight />
                    </div>
                  </div>
                </Link>
                <Link
                  href={``}
                  className="cursor-pointer text-display-2 text-white transition duration-200 ease-in-out group w-full"
                >
                  <div className="flex justify-between px-4 py-2 rounded-md hover:bg-[#42424c] transition duration-200">
                    <h3 className="text-display-3">Log out</h3>
                  </div>
                </Link>
              </div>
              <div className="flex flex-col p-4 w-full">
                <div className="text-display-2 text-white w-full">
                  <div className="flex justify-between px-4 py-2">
                    <h3 className="text-display-3">Dark mode</h3>
                    <div className="relative w-[35px] h-[20px] bg-[#ef5466] rounded-full cursor-pointer">
                      <div className="absolute top-2/4 translate-y-[-50%] right-[2px] z-20 bg-[#fff] rounded-full w-[18px] h-[18px]"></div>
                    </div>
                  </div>
                </div>
                <Link
                  href={``}
                  className="cursor-pointer text-display-2 text-[#a2a2ad] transition duration-200 ease-in-out group w-full"
                >
                  <div className="flex justify-between px-2 py-1 rounded-md hover:bg-[#42424c] transition duration-200">
                    <h3 className="text-display-3 group-hover:text-[#fff] transition duration-200">
                      Support
                    </h3>
                    <div className="group-hover:animate-wiggle mt-[2px]">
                      <FiChevronRight />
                    </div>
                  </div>
                </Link>
                <Link
                  href={``}
                  className="cursor-pointer text-display-2 text-[#a2a2ad] transition duration-200 ease-in-out group w-full"
                >
                  <div className="flex justify-between px-2 py-1 rounded-md hover:bg-[#42424c] transition duration-200">
                    <h3 className="text-display-3 group-hover:text-[#fff] transition duration-200">
                      Community & feedback
                    </h3>
                    <div className="group-hover:animate-wiggle mt-[2px]">
                      <FiChevronRight />
                    </div>
                  </div>
                </Link>
                <Link
                  href={``}
                  className="cursor-pointer text-display-2 text-[#a2a2ad] transition duration-200 ease-in-out group w-full"
                >
                  <div className="flex justify-between px-2 py-1 rounded-md hover:bg-[#42424c] transition duration-200">
                    <h3 className="text-display-3 group-hover:text-[#fff] transition duration-200">
                      Plans
                    </h3>
                    <div className="group-hover:animate-wiggle mt-[2px]">
                      <FiChevronRight />
                    </div>
                  </div>
                </Link>
                <Link
                  href={``}
                  className="cursor-pointer text-display-2 text-[#a2a2ad] transition duration-200 ease-in-out group w-full"
                >
                  <div className="flex justify-between px-2 py-1 rounded-md hover:bg-[#42424c] transition duration-200">
                    <h3 className="text-display-3 group-hover:text-[#fff] transition duration-200">
                      Features
                    </h3>
                    <div className="group-hover:animate-wiggle mt-[2px]">
                      <FiChevronRight />
                    </div>
                  </div>
                </Link>
                <Link
                  href={``}
                  className="cursor-pointer text-display-2 text-[#a2a2ad] transition duration-200 ease-in-out group w-full"
                >
                  <div className="flex justify-between px-2 py-1 rounded-md hover:bg-[#42424c] transition duration-200">
                    <h3 className="text-display-3 group-hover:text-[#fff] transition duration-200">
                      About us
                    </h3>
                    <div className="group-hover:animate-wiggle mt-[2px]">
                      <FiChevronRight />
                    </div>
                  </div>
                </Link>
                <Link
                  href={``}
                  className="cursor-pointer text-display-2 text-[#a2a2ad] transition duration-200 ease-in-out group w-full"
                >
                  <div className="flex justify-between px-2 py-1 rounded-md hover:bg-[#42424c] transition duration-200">
                    <h3 className="text-display-3 group-hover:text-[#fff] transition duration-200">
                      Jobs
                    </h3>
                    <div className="group-hover:animate-wiggle mt-[2px]">
                      <FiChevronRight />
                    </div>
                  </div>
                </Link>
                <Link
                  href={``}
                  className="cursor-pointer text-display-2 text-[#a2a2ad] transition duration-200 ease-in-out group w-full"
                >
                  <div className="flex justify-between px-2 py-1 rounded-md hover:bg-[#42424c] transition duration-200">
                    <h3 className="text-display-3 group-hover:text-[#fff] transition duration-200">
                      Legal
                    </h3>
                    <div className="group-hover:animate-wiggle mt-[2px]">
                      <FiChevronRight />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
