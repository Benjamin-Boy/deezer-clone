import AlbumIndexLayout from "../../../components/album/AlbumIndexLayout";
import AlbumTrackList from "../../../components/album/AlbumTrackList";
import MainLayout from "../../../components/MainLayout";

const Album = () => {
  return (
    <MainLayout>
      <AlbumIndexLayout>
        <AlbumTrackList />
      </AlbumIndexLayout>
    </MainLayout>
  );
};

export default Album;
