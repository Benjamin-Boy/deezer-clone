import { useState } from "react";

import ProfileIndexLayout from "../../../components/ProfileIndexLayout";
import MainLayout from "../../../components/MainLayout";
import ListItem from "../../../components/ListItem";

import useClickOutside from "../../../hooks/useClickOutside";

import { CiSearch } from "react-icons/ci";
import { BsChevronDown } from "react-icons/bs";

const Albums = () => {
  const [dropdownSortOpen, setDropdownSortOpen] = useState(false);
  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
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
              35 albums
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
                        A-Z (Album)
                      </li>
                      <li className="text-[#a2a2ad] cursor-pointer hover:bg-[#505056] hover:text-[#fff] px-3 py-2">
                        A-Z (Artist)
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-7 px-6">
          {array.map((item) => {
            return (
              <ListItem
                key={item}
                type="album"
                name="Album Name"
                artistName="Artist Name"
              />
            );
          })}
        </div>
      </ProfileIndexLayout>
    </MainLayout>
  );
};

export default Albums;
