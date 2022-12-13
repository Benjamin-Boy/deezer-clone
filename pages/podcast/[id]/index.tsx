import Image from "next/image";

import PodcastIndexLayout from "../../../components/PodcastIndexLayout";
import MainLayout from "../../../components/MainLayout";

import { IoMdPlay } from "react-icons/io";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsChevronExpand } from "react-icons/bs";
import { TbMicrophone2 } from "react-icons/tb";
import { VscHeart } from "react-icons/vsc";
import { BsThreeDots } from "react-icons/bs";

import defaultArtwork from "../../../public/default-artwork.png";

const Podcast = () => {
  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <MainLayout>
      <PodcastIndexLayout>
        <div className="px-6">
          <table>
            <tr className="text-[#a2a2ad] w-full border-b border-[#42424c] text-display-4">
              <th className="text-left px-2 py-4">
                <div className="inline-block cursor-pointer group">
                  <div className="flex items-center gap-1 ">
                    <div className="group-hover:underline">EPISODE</div>
                    <div className="opacity-0 text-display-3 group-hover:opacity-100 transition duration-150">
                      <BsChevronExpand />
                    </div>
                  </div>
                </div>
              </th>
              <th className="min-w-[125px] text-left px-2">
                <div className="inline-block cursor-pointer group">
                  <div className="flex items-center gap-1">
                    <div className="group-hover:underline">ADDED</div>
                    <div className="opacity-0 text-display-3 group-hover:opacity-100 transition duration-150">
                      <BsChevronExpand />
                    </div>
                  </div>
                </div>
              </th>
              <th className="min-w-[45px] text-left text-display-3 px-2">
                <div className="inline-block cursor-pointer group">
                  <div className="flex items-center gap-1">
                    <div className="group-hover:underline">
                      <AiOutlineClockCircle />
                    </div>
                    <div className="opacity-0 text-display-3 group-hover:opacity-100 transition duration-150">
                      <BsChevronExpand />
                    </div>
                  </div>
                </div>
              </th>
            </tr>
            {array.map((item) => {
              return (
                <tr key={item}>
                  <td className="flex justify-between items-center gap-2 p-2">
                    <div>
                      <Image
                        src={defaultArtwork}
                        placeholder="blur"
                        alt="Artist image"
                        className="min-w-[60px] max-w-[60px]"
                      />
                    </div>
                    <div>
                      <h4 className="text-display-4 text-[#fff]">
                        Podcast title
                      </h4>
                      <p className="text-display-4 text-[#a2a2ad]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed maximus a risus imperdiet fermentum. Sed in varius
                        neque, at condimentum libero. Quisque eu leo at nisi
                        cursus fermentum. Aliquam erat volutpat. Nulla
                        scelerisque, arcu vitae scelerisque rutrum, lacus ante
                        semper neque, et dictum sem nunc non justo.
                      </p>
                    </div>
                    <div className="text-display-4 text-[#a2a2ad]">
                      <BsThreeDots />
                    </div>
                  </td>
                  <td className="text-display-4 text-[#a2a2ad] p-2">
                    22/11/2022
                  </td>
                  <td className="text-display-4 text-[#a2a2ad] p-2">00:00</td>
                </tr>
              );
            })}
          </table>
        </div>
      </PodcastIndexLayout>
    </MainLayout>
  );
};

export default Podcast;
