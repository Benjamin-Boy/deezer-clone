import ListGenreItem from "./ListGenreItem";
import ListTitle from "./ListTitle";

const PodcastsByNetworkList = () => {
  const array = [1, 2, 3, 4, 5];
  return (
    <div className="w-full p-6">
      <ListTitle
        title="Podcasts by network"
        titlePath="/channels/module/81ad8f18-7160-4374-85b7-4129d5003462"
      />

      <div className="flex justify-start gap-7">
        {array.map((item) => {
          return <ListGenreItem key={item} type="network" />;
        })}
      </div>
    </div>
  );
};

export default PodcastsByNetworkList;
