import ArtistItem from "./ArtistItem";

const RecentlyPlayedList = () => {
  const array = [1, 2, 3, 4];

  return (
    <div className="w-full">
      <h1 className="text-display-2 text-[#fff] font-bold mb-5">
        Recently played
      </h1>
      <div className="flex justify-start gap-7">
        {array.map((item) => {
          return <ArtistItem key={item} />;
        })}
      </div>
    </div>
  );
};

export default RecentlyPlayedList;
