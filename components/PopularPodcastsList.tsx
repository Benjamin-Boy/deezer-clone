import ListTitle from "./ListTitle";
import ListItem from "./ListItem";

const PopularPodcastsList = () => {
  const array = [1, 2, 3, 4, 5];

  return (
    <div className="w-full p-6">
      <ListTitle
        title="Popular Podcasts"
        titlePath="/channels/module/ae860663-f70a-45b8-8ffd-1d7fab5070b7"
      />

      <div className="flex justify-start gap-7">
        {array.map((item) => {
          return <ListItem key={item} type="podcast" title="Podcast Name" />;
        })}
      </div>
    </div>
  );
};

export default PopularPodcastsList;
