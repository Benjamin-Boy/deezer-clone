import FavouriteArtistsList from "./FavouriteArtistsList";
import GenreList from "./GenreList";
import NewReleasesList from "./NewReleasesList";
import StationsList from "./StationsList";
import FlowList from "./FlowList";
import RecentlyPlayedList from "./RecentlyPlayedList";

const MusicIndex = () => {
  return (
    <div className="mb-[5rem] mt-[50px] flex flex-col gap-4 bg-[#121216] p-5 w-full xl:px-24">
      <FlowList />
      <FavouriteArtistsList />
      <GenreList />
      <NewReleasesList />
      <RecentlyPlayedList />
      <StationsList />
    </div>
  );
};

export default MusicIndex;
