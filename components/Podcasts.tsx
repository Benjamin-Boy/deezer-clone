import PopularPodcastsList from "./PopularPodcastsList";
import PodcastsCategoriesList from "./PodcastsCategoriesList";
import LatestPodcastsList from "./LatestPodcastsList";
import PodcastsForYouList from "./PodcastsForYouList";
import PodcastsByDurationList from "./PodcastsByDurationList";
import PodcastsByNetworkList from "./PodcastsByNetworkList";

const PodcastsIndex = () => {
  return (
    <div className="mb-[5rem] mt-[50px] flex flex-col gap-4 bg-[#121216] p-5">
      <PopularPodcastsList />
      <PodcastsCategoriesList />
      <LatestPodcastsList />
      <PodcastsForYouList />
      <PodcastsByDurationList />
      <PodcastsByNetworkList />
    </div>
  );
};

export default PodcastsIndex;
