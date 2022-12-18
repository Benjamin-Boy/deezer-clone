import ArtistIndexLayout from "../../../components/ArtistIndexLayout";
import MainLayout from "../../../components/MainLayout";
import ArtistTopTrack from "../../../components/artist/ArtistTopTrack";

const TopTrack = () => {
  return (
    <MainLayout>
      <ArtistIndexLayout>
        <ArtistTopTrack />
      </ArtistIndexLayout>
    </MainLayout>
  );
};

export default TopTrack;
