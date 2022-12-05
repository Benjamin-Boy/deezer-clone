import ArtistItem from "./ArtistItem";

const FavouriteArtistsList = () => {
  const array = [1, 2, 3, 4, 5];
  // const filteredArray = [1, 2, 3, 4];

  return (
    <div className="w-full">
      <h1 className="text-display-2 text-[#fff] font-bold mb-5">
        Your favourite artists
      </h1>
      <div className={`grid grid-cols-4 2xl:grid-cols-5`}>
        {/* grid grid-cols-4 */}
        {/* flex justify-start gap-7 */}
        {array.map((item) => {
          return <ArtistItem key={item} />;
        })}
      </div>
    </div>
  );
};

export default FavouriteArtistsList;
