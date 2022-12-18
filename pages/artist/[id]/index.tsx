import MainLayout from "../../../components/MainLayout";
import {
  ArtistIndexLayout,
  ArtistTopTrackList,
  ArtistAlbums,
  ArtistLatestRelease,
  ArtistPlaylistList,
  ArtistOnTour,
  ArtistSmiliarArtist,
} from "../../../components/artist";

const Artist = () => {
  return (
    <MainLayout>
      <ArtistIndexLayout>
        <div className="w-full p-6 flex flex-col gap-8">
          <div className="flex">
            <ArtistTopTrackList />
            <ArtistPlaylistList />
          </div>
          <div className="flex">
            <ArtistLatestRelease />
            <ArtistSmiliarArtist />
          </div>
          <div className="flex">
            <ArtistOnTour />
          </div>
        </div>
        <div className="w-full p-6 flex flex-col gap-8">
          <ArtistAlbums />
        </div>
      </ArtistIndexLayout>
    </MainLayout>
  );
};

export default Artist;
