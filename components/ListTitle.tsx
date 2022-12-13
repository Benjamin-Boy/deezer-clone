import Link from "next/link";

import { FiChevronRight } from "react-icons/fi";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

import { Props } from "../typings.d";

const ListTitle = ({ title, subtitle, titlePath, pageScroll }: Props) => {
  return (
    <>
      {titlePath ? (
        <div className="flex justify-between items-center mb-5">
          <Link
            href={`${titlePath}`}
            className="cursor-pointer text-display-2 text-white hover:text-[#EF5466] transition duration-200 ease-in-out group"
          >
            <div className="flex ">
              <h1 className=" font-bold leading-none">{title}</h1>
              <div className="group-hover:animate-wiggle mt-[2px]">
                <FiChevronRight />
              </div>
              <h4 className="text-display-4 text-[#a2a2ad] mb-5">{subtitle}</h4>
            </div>
          </Link>
          {pageScroll && (
            <div className="flex text-display-4 text-white gap-8">
              <BsChevronLeft />
              <BsChevronRight />
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-between items-center mb-5">
          <div className="flex flex-col">
            <h1 className="text-display-2 text-[#fff] font-bold leading-none">
              {title}
            </h1>
            <h4 className="text-display-4 text-[#a2a2ad] ">{subtitle}</h4>
          </div>
          {pageScroll && (
            <div className="flex text-display-4 text-white gap-8">
              <BsChevronLeft />
              <BsChevronRight />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ListTitle;
