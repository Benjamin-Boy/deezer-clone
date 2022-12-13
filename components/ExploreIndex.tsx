import ListGenreItem from "./ListGenreItem";
import ListTitle from "./ListTitle";

const ExploreIndex = () => {
  const arrayCat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const arrayGenre = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const arrayPodcast = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="w-full bg-[#121216]">
      <div className="mb-[5rem] mt-[50px] flex flex-col gap-4 min-w-[1000px] max-w-[90%] m-auto p-6">
        <div className="flex flex-col mb-12">
          <h1 className="text-display-1 text-[#fff] font-bold leading-none">
            All Channels
          </h1>
        </div>

        <ListTitle title="Categories" link={false} />
        <div className="flex justify-center gap-7 flex-wrap">
          {arrayCat.map((item) => {
            return (
              <ListGenreItem key={item} type="duration" title="Category" />
            );
          })}
        </div>

        <ListTitle title="Genre" link={false} />
        <div className="flex justify-center gap-7 flex-wrap">
          {arrayGenre.map((item) => {
            return <ListGenreItem key={item} type="duration" title="Genre" />;
          })}
        </div>

        <ListTitle title="Podcasts by category" link={false} />
        <div className="flex justify-center gap-7 flex-wrap">
          {arrayPodcast.map((item) => {
            return <ListGenreItem key={item} type="duration" title="Podcast" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ExploreIndex;
