import ListPodcastItem from "./ListPodcastItem";
import ListTitle from "./ListTitle";

const PodcastsForYouList = () => {
  return (
    <div className="w-full p-6">
      <ListTitle title="Episodes for you" link={false} />
      <div>
        <ListPodcastItem />
      </div>
    </div>
  );
};

export default PodcastsForYouList;
