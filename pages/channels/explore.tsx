import Navbar from "../../components/Navbar";
import Player from "../../components/Player";
import TopBar from "../../components/TopBar";
// import PodcastsIndex from "../components/Podcasts";

const explore = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="flex">
        <Navbar />

        <div className="ml-[14rem] w-screen">
          <TopBar />
          EXPLORE
        </div>
      </div>
      <Player />
    </div>
  );
};

export default explore;
