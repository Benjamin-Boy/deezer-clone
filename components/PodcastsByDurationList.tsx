import ListGenreItem from "./ListGenreItem";
import ListTitle from "./ListTitle";

const PodcastsByDurationList = () => {
  const array = [10, 20, 30, 40];

  return (
    <div className="w-full p-6">
      <ListTitle title="Podcasts by duration" link={false} />
      <div className="flex justify-start gap-7">
        {array.map((item) => {
          return (
            <ListGenreItem key={item} type="duration" title={`< ${item} min`} />
          );
        })}
      </div>
    </div>
  );
};

export default PodcastsByDurationList;
