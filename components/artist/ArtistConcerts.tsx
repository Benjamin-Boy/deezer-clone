import { FiChevronRight } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

const ArtistConcerts = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-5">
        <h1 className="grow text-display-1 text-[#fff] font-bold leading-none">
          All tour dates
        </h1>

        <div className="flex items-center justify-start gap-2 w-[20%] bg-[#23232D] border border-[#42424c] rounded-md p-1 pr-8 hover:border-[#90909a] transition duration-300">
          <div className="text-[#90909a] text-display-3 cursor-text">
            <CiSearch />
          </div>

          <input
            type="text"
            placeholder="Search by city, country, venue or event..."
            className="bg-[#23232D] text-[#fff] outline-none w-full"
          />
        </div>
      </div>
      <div className="flex justify-between items-center gap-4 group rounded-md p-2 hover:bg-[#1a1a22] transition duration-200 cursor-pointer">
        <div className="flex items-center gap-4">
          <div className="w-[35px] h-[35px] flex flex-col rounded-md overflow-hidden">
            <div className="flex justify-center items-center w-full bg-[#EF5466] text-[#fff]">
              <h3 className="inline-block text-display-5">JUNE</h3>
            </div>
            <div className="flex justify-center items-center w-full grow bg-[#fff] text-[#a2a2ad]">
              <h3 className="inline-block text-display-4">10</h3>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-display-3 font-bold leading-none text-[#fff] group-hover:underline">
              Show Name
            </h1>
            <h4 className="text-display-4 text-[#a2a2ad]">Venue Name</h4>
          </div>
        </div>

        <div className="flex">
          <div className="group-hover:animate-wiggle mt-[2px] text-[#fff] text-display-1">
            <FiChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistConcerts;
