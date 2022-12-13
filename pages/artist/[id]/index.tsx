import ArtistIndexLayout from "../../../components/ArtistIndexLayout";
import MainLayout from "../../../components/MainLayout";
import ArtistTopTrackList from "../../../components/ArtistTopTrackList";
import ArtistPlaylistList from "../../../components/ArtistPlaylistList";
import ArtistLatestRelease from "../../../components/ArtistLatestRelease";
import ArtistSmiliarArtist from "../../../components/ArtistSmiliarArtist";
import ArtistAlbums from "../../../components/ArtistAlbums";
import ArtistOnTour from "../../../components/ArtistOnTour";

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
