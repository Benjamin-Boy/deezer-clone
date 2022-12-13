import ListTitle from "./ListTitle";

const PodcastsCategoriesList = () => {
  const array = [1, 2, 3, 4, 5];

  return (
    <div className="w-full p-6">
      <ListTitle
        title="All categories"
        titlePath="/channels/explore/podcasts-explore"
      />

      <div className="flex justify-start gap-7">
        {array.map((item) => {
          return (
            <div
              key={item}
              className="flex justify-center items-center gap-2 min-w-[165px] min-h-[85px] w-[25%] bg-[#898383] rounded-md cursor-pointer hover:brightness-75 transition duration-300 before:pt-[50%]"
            >
              <h4 className="text-[#fff] text-display-3 xl:text-display-2 font-bold ">
                Category
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PodcastsCategoriesList;
