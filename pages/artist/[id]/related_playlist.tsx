import ArtistIndexLayout from "../../../components/ArtistIndexLayout";
import MainLayout from "../../../components/MainLayout";
import ListItem from "../../../components/ListItem";

const RelatedPlaylists = () => {
  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <MainLayout>
      <ArtistIndexLayout>
        <div className="w-full p-6">
          <div className="flex justify-between">
            <h1 className="text-[#fff] text-display-1 font-bold mb-3">
              500 playlists
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-7 px-6">
          {array.map((item) => {
            return <ListItem key={item} type="playlist" name="Playlist Name" />;
          })}
        </div>
      </ArtistIndexLayout>
    </MainLayout>
  );
};

export default RelatedPlaylists;
