import { FiChevronRight } from "react-icons/fi";

const PodcastsCategoriesList = () => {
  return (
    <>
      <div className="flex mb-5">
        <h1 className="text-display-2 text-[#fff] font-bold leading-none cursor-pointer">
          All categories
        </h1>
        <div className="text-[#fff] text-display-2 cursor-pointer mt-[2px]">
          <FiChevronRight />
        </div>
      </div>
      <div className="flex justify-start gap-7">
        <div className="flex justify-center items-center gap-2 w-[160px] h-[80px] bg-[#898383] rounded-md cursor-pointer">
          <h4 className="text-[#fff] font-bold">New podcasts</h4>
        </div>
      </div>
    </>
  );
};

export default PodcastsCategoriesList;
