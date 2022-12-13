import GenreList from "./GenreList";
import FlowList from "./FlowList";

import ItemsList from "./ItemsList";

const MusicIndex = () => {
  return (
    <div className="w-full bg-[#121216]">
      <div className="mb-[5rem] mt-[50px] flex flex-col gap-4 min-w-[1000px] max-w-[90%] m-auto">
        <FlowList />

        <ItemsList
          title="Your favourite artists"
          type="artist"
          name="Artist Name"
          fansNb="10,000"
          pageScroll
        />

        <GenreList />

        <ItemsList
          title="New releases for you"
          type="album"
          name="Album Name"
          artistName="Artist Name"
          date="22/12/2022"
          titlePath="/channels/new"
          pageScroll
        />

        <ItemsList
          title="Recently played"
          type="artist"
          name="Artist Name"
          fansNb="10,000"
          pageScroll
        />

        <ItemsList
          title="Stations for you"
          type="radio"
          name="Radio Name"
          titlePath="/channels/radios"
          pageScroll
        />
      </div>
    </div>
  );
};

export default MusicIndex;
