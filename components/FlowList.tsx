import Image from "next/image";

import { IoMdPlay } from "react-icons/io";

import defaultArtist from "../public/default-avatar.jpg";

const FlowList = () => {
  const flow = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="w-full">
      <h2 className="text-display-2 text-[#fff] font-bold">
        Flow: play how you feel
      </h2>
      <h4 className="text-display-4 text-[#a2a2ad] mb-5">
        An infinite, personalized mix of the music you love and new discoveries
      </h4>
      <div className="flex justify-start gap-4">
        {flow.map((item) => {
          return (
            <div
              key={item}
              className="flex flex-col items-center gap-2 w-[90px] md:w-[155px]"
            >
              <div className="relative group">
                <Image
                  src={defaultArtist}
                  // width={90}
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
