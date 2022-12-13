import ListTitle from "./ListTitle";
import ListItem from "./ListItem";

import { BsChevronDown } from "react-icons/bs";

const ArtistAlbums = () => {
  const albumsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div>
      <div className="flex justify-between items-center gap-2">
        <h1 className="text-display-2 text-[#fff] font-bold leading-none">
          Albums
        </h1>
        <div className="grow border-b border-[#42424c]"></div>
        <div className="flex">
          <div className="flex justify-end">
            <div className="flex flex-col">
              <button className="bg-[#121216] text-[#fff] text-display-4 font-bold rounded-full border border-[#3e3e42] px-4 py-1 flex items-center gap-2 hover:bg-[#353539] transition duration-250">
                TYPE
                <BsChevronDown />
              </button>
              <ul className="hidden bg-[#23232d] text-[#fff] text-display-5 border border-[#3e3e42]">
                <li className="text-[#a2a2ad] cursor-pointer hover:bg-[#505056] hover:text-[#fff] px-3 py-2">
                  Type
                </li>
                <li className="text-[#a2a2ad] cursor-pointer hover:bg-[#505056] hover:text-[#fff] px-3 py-2">
                  A-Z
                </li>
                <li className="text-[#a2a2ad] cursor-pointer hover:bg-[#505056] hover:text-[#fff] px-3 py-2">
                  Release date
                </li>
                <li className="text-[#a2a2ad] cursor-pointer hover:bg-[#505056] hover:text-[#fff] px-3 py-2">
                  Most played
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="relative flex flex-col">
              <button className="bg-[#121216] text-[#fff] text-display-4 font-bold rounded-full border border-[#3e3e42] px-4 py-1 flex items-center gap-2 hover:bg-[#353539] transition duration-250">
                GRID
                <BsChevronDown />
              </button>
              <ul className="hidden z-20 absolute top-8 w-full bg-[#23232d] text-[#fff] text-display-5 border border-[#3e3e42]">
                <li className="text-[#a2a2ad] cursor-pointer hover:bg-[#505056] hover:text-[#fff] px-3 py-2">
                  Grid
                </li>
                <li className="text-[#a2a2ad] cursor-pointer hover:bg-[#505056] hover:text-[#fff] px-3 py-2">
                  List
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-7 pt-8 mb-8">
        {albumsArray.map((item) => {
          return (
            <ListItem
              key={item}
              type="album"
              name="Album Name"
              artistName="Artist Name"
              date="22/12/2022"
            />
          );
        })}
      </div>

      <div className="flex justify-between items-center gap-2">
        <h1 className="text-display-2 text-[#fff] font-bold leading-none">
          EPs
        </h1>
        <div className="grow border-b border-[#42424c]"></div>
      </div>
      <div className="flex flex-wrap justify-between gap-7 pt-8 mb-8">
        {albumsArray.map((item) => {
          return (
            <ListItem
              key={item}
              type="album"
              name="Album Name"
              artistName="Artist Name"
              date="22/12/2022"
            />
          );
        })}
      </div>

      <div className="flex justify-between items-center gap-2">
        <h1 className="text-display-2 text-[#fff] font-bold leading-none">
          Singles
        </h1>
        <div className="grow border-b border-[#42424c]"></div>
      </div>
      <div className="flex flex-wrap justify-between gap-7 pt-8 mb-8">
        {albumsArray.map((item) => {
          return (
            <ListItem
              key={item}
              type="album"
              name="Album Name"
              artistName="Artist Name"
              date="22/12/2022"
            />
          );
        })}
      </div>

      <div className="flex justify-between items-center gap-2">
        <h1 className="text-display-2 text-[#fff] font-bold leading-none">
          Featured in
        </h1>
        <div className="grow border-b border-[#42424c]"></div>
      </div>
      <div className="flex flex-wrap justify-between gap-7 pt-8 mb-8">
        {albumsArray.map((item) => {
          return (
            <ListItem
              key={item}
              type="album"
              name="Album Name"
              artistName="Artist Name"
              date="22/12/2022"
              explicit
            />
          );
        })}
      </div>
    </div>
  );
};

export default ArtistAlbums;
