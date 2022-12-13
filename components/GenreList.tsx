import ListTitle from "./ListTitle";
import ListGenreItem from "./ListGenreItem";

const GenreList = () => {
  const array = [1, 2, 3, 4, 5];

  return (
    <div className="w-full p-6">
      <ListTitle title="Genre" titlePath="/channels/explore" />

      <div className="flex justify-start gap-7">
        {array.map((item) => {
          return <ListGenreItem key={item} type="genre" title="Genre" />;
        })}
      </div>
    </div>
  );
};

export default GenreList;
