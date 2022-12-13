import Image from "next/image";

import { useState } from "react";

import ProfileIndexLayout from "../../../components/ProfileIndexLayout";
import MainLayout from "../../../components/MainLayout";
import ListItem from "../../../components/ListItem";

import useClickOutside from "../../../hooks/useClickOutside";

import { CiSearch } from "react-icons/ci";
import { BsChevronDown } from "react-icons/bs";
import { TfiPlus } from "react-icons/tfi";

import defaultArtwork from "../../../public/default-artwork.png";

const Artists = () => {
  const [dropdownSortOpen, setDropdownSortOpen] = useState(false);
  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const sortNode = useClickOutside(() => {
    setDropdownSortOpen(false);
  });

  return (
    <MainLayout>
      <ProfileIndexLayout>
        <div className="w-full p-6">
          <div className="flex justify-between">
            <h1 className="text-[#fff] text-display-1 font-bold mb-3">
              35 artists
            </h1>
            <div className="flex justify-between items-center gap-3">
              <div className="flex items-center gap-2 bg-[#23232D] border border-[#42424c] rounded-md p-1 pr-8 hover:border-[#90909a] transition duration-300">
                <div className="text-[#90909a] text-display-3 cursor-text">
                  <CiSearch />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-[#23232D] text-[#fff] outline-none"
                />
              </div>

              <div ref={sortNode} className="flex justify-end">
                <div className="relative flex flex-col">
                  <button
                    className="bg-[#121216] text-[#fff] text-display-4 font-bold rounded-full border border-[#3e3e42] px-4 py-1 flex items-center gap-2 hover:bg-[#353539] transition duration-250"
                    onClick={() => setDropdownSortOpen(!dropdownSortOpen)}
                  >
                    RECENTLY ADDED
                    <BsChevronDown />
                  </button>
                  {dropdownSortOpen && (
                    <ul className="z-20 absolute top-8 w-full bg-[#23232d] text-[#fff] text-display-5 border border-[#3e3e42]">
                      <li className="text-[#a2a2ad] cursor-pointer hover:bg-[#505056] hover:text-[#fff] px-3 py-2">
                        Recently added
                      </li>
                      <li className="text-[#a2a2ad] cursor-pointer hover:bg-[#505056] hover:text-[#fff] px-3 py-2">
                        A-Z
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-7 px-6">
          <div className="flex flex-col gap-1 min-w-[165px] xl:w-[25%] max-w-[265px]">
            <div className="relative bg-[#42424C] rounded-full w-full cursor-pointer">
              <Image
                src={defaultArtwork}
                placeholder="blur"
                alt="Artist image"
                className={"opacity-0 w-full"}
              />
              <div className="text-display-1 text-[#a2a2ad] absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
                <TfiPlus />
              </div>
            </div>

            <button>
              <h3 className="text-[#fff] text-display-3 cursor-pointer hover:underline">
                Add artists
              </h3>
            </button>
          </div>

          {array.map((item) => {
            return (
              <ListItem
                key={item}
                type="artist"
                name="Artist Name"
                fansNb="10,000"
              />
            );
          })}
        </div>
      </ProfileIndexLayout>
    </MainLayout>
  );
};

export default Artists;
