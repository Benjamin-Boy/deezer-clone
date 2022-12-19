import Link from "next/link";
import Image from "next/image";

import { ListTitle } from "../typings.d";

import defaultArtwork from "../public/default-artwork.png";

const ListGenreItem = ({ type, title }: ListTitle) => {
  return (
    <Link
      href="/"
      className={`flex justify-center items-center gap-2 min-w-[165px] min-h-[85px] w-[18.5%] max-w-[265px] bg-[#898383] rounded-md cursor-pointer hover:brightness-75 transition duration-300 before:pt-[50%]`}
    >
      {type !== "radio" ? (
        <h4 className="text-[#fff] text-display-3 xl:text-display-2 font-bold ">
          {title}
        </h4>
      ) : (
        <h4 className="text-[#fff] text-display-3 xl:text-display-2 font-bold ">
          <Image src={defaultArtwork} width={30} alt="Genre image" />
        </h4>
      )}
    </Link>
  );
};

export default ListGenreItem;
