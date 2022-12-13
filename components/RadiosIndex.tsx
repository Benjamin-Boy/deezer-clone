import ListItem from "./ListItem";

import { useState } from "react";

import useClickOutside from "../hooks/useClickOutside";

import { BsChevronDown } from "react-icons/bs";

const RadiosIndex = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  let domNode = useClickOutside(() => {
    setDropdownOpen(false);
  });

  return (
    <div className="w-full bg-[#121216]">
      <div className="mb-[5rem] mt-[50px] flex flex-col gap-4 min-w-[1000px] max-w-[90%] m-auto p-6">
        <div className="flex flex-col mb-5">
          <h1 className="text-display-1 text-[#fff] font-bold leading-none">
            Radio
          </h1>
        </div>

        <div className="flex justify-end">
          <div ref={domNode} className="relative flex flex-col">
            <button
              className="bg-[#121216] text-[#fff] text-display-4 font-bold rounded-full border border-[#3e3e42] px-4 py-1 flex items-center gap-2 hover:bg-[#353539] transition duration-250"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              RECOMMENDED
              <BsChevronDown />
            </button>
            {dropdownOpen && (
              <ul className="absolute top-7 w-full z-20 bg-[#23232d] text-[#fff] text-display-5 border border-[#3e3e42]">
                <li className="text-[#a2a2ad] cursor-pointer hover:bg-[#505056] hover:text-[#fff] px-3 py-2">
                  Recommanded
                </li>
                <li className="text-[#a2a2ad] cursor-pointer hover:bg-[#505056] hover:text-[#fff] px-3 py-2">
                  Talk
                </li>
                <li className="text-[#a2a2ad] cursor-pointer hover:bg-[#505056] hover:text-[#fff] px-3 py-2">
                  Pop
                </li>
                <li className="text-[#a2a2ad] cursor-pointer hover:bg-[#505056] hover:text-[#fff] px-3 py-2">
                  Rock
                </li>
                <li className="text-[#a2a2ad] cursor-pointer hover:bg-[#505056] hover:text-[#fff] px-3 py-2">
                  Rap/Hip Hop
                </li>
                <li className="text-[#a2a2ad] cursor-pointer hover:bg-[#505056] hover:text-[#fff] px-3 py-2">
                  Jazz
                </li>
                <li className="text-[#a2a2ad] cursor-pointer hover:bg-[#505056] hover:text-[#fff] px-3 py-2">
                  Classical
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="flex justify-center gap-7 flex-wrap">
          {array.map((item) => {
            return <ListItem key={item} type="radioPage" name="Radio Name" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RadiosIndex;
