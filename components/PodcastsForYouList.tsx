import Image from "next/image";

import { AiOutlineClockCircle } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

import defaultArtwork from "../public/default-artwork.png";

const PodcastsForYouList = () => {
  return (
    <>
      <h2 className="text-display-2 text-[#fff] font-bold">Episodes for you</h2>
      <div>
        <table className="w-full">
          <tr className="text-[#a2a2ad] w-full border-b border-[#42424c] text-display-4">
            <th className="text-left px-2 py-4">EPISODE</th>
            <th className="w-[120px] text-left">PODCAST</th>
            <th className="w-[120px] text-left">ADDED</th>
            <th className="w-[40px] text-left text-display-3">
              <AiOutlineClockCircle />
            </th>
          </tr>
          <tr>
            <td className="flex justify-between items-center gap-2 p-2">
              <div>
                <Image
                  src={defaultArtwork}
                  width={165}
                  placeholder="blur"
                  alt="Artist image"
                />
              </div>
              <div>
                <h4 className="text-display-4 text-[#fff]">Podcast title</h4>
                <p className="text-display-4 text-[#a2a2ad] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  maximus a risus imperdiet fermentum. Sed in varius neque, at
                  condimentum libero. Quisque eu leo at nisi cursus fermentum.{" "}
                </p>
              </div>
              <div className="text-display-4 text-[#a2a2ad]">
                <BsThreeDots />
              </div>
            </td>
            <td className="text-display-4 text-[#a2a2ad]">Podcast show name</td>
            <td className="text-display-4 text-[#a2a2ad]">22/11/2022</td>
            <td className="text-display-4 text-[#a2a2ad]">00:00</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default PodcastsForYouList;
