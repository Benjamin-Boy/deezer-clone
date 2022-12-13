import Image from "next/image";

import ListTitle from "./ListTitle";

import { IoMdPlay } from "react-icons/io";

import defaultArtist from "../public/default-avatar.jpg";

const FlowList = () => {
  const flow = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="w-full p-6">
      <ListTitle
        title="Flow: play how you feel"
        subtitle="An infinite, personalized mix of the music you love and new discoveries"
        link={false}
      />
      <div className="flex justify-center gap-8">
        {flow.map((item) => {
          return (
            <div
              key={item}
              className="flex flex-col items-center gap-2 min-w-[75px]"
            >
              <div className="relative group">
                <Image
                  src={defaultArtist}
                  placeholder="blur"
                  alt="Artist image"
                  className="rounded-full"
                />
                <div className="opacity-0 group-hover:opacity-100 cursor-pointer absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] bg-[#fff] text-display-4 rounded-full p-2 transition duration-500">
                  <IoMdPlay />
                </div>
                <div className="group-hover:opacity-0 absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] cursor-pointer transition transition-500">
                  <h3 className="text-[#fff] text-display-3 font-bold">flow</h3>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h5 className="text-[#fff] text-display-5">Flow</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlowList;
