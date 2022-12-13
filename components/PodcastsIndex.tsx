import PopularPodcastsList from "./PopularPodcastsList";
import PodcastsCategoriesList from "./PodcastsCategoriesList";
import LatestPodcastsList from "./LatestPodcastsList";
import PodcastsForYouList from "./PodcastsForYouList";
import PodcastsByDurationList from "./PodcastsByDurationList";
import PodcastsByNetworkList from "./PodcastsByNetworkList";

const PodcastsIndex = () => {
  return (
    <div className="w-full bg-[#121216]">
      <div className="mb-[5rem] mt-[50px] flex flex-col gap-4 min-w-[1000px] max-w-[90%] m-auto">
        <PopularPodcastsList />
        <PodcastsCategoriesList />
        <LatestPodcastsList />
        <PodcastsForYouList />
        <PodcastsByDurationList />
        <PodcastsByNetworkList />
      </div>
    </div>
  );
};

export default PodcastsIndex;
