import Navbar from "../components/Navbar";
import Player from "../components/Player";
import TopBar from "../components/TopBar";
import MusicIndex from "../components/MusicIndex";

const Home = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="flex">
        <Navbar />

        <div className="ml-[14rem] w-screen">
          <TopBar />
          <MusicIndex />
        </div>
      </div>
      <Player />
    </div>
  );
};

export default Home;
