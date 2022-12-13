import ListTitle from "./ListTitle";
import ListPodcastItem from "./ListPodcastItem";

const LatestPodcastsList = () => {
  return (
    <div className="w-full p-6">
      <ListTitle
        title="Your latest episodes"
        subtitle="Based on your library"
        link={false}
      />
      <div>
        <ListPodcastItem />
      </div>
    </div>
  );
};

export default LatestPodcastsList;
