import MainLayout from "../../../components/MainLayout";
import { ArtistIndexLayout, ArtistBiography } from "../../../components/artist";

const Artist = () => {
  return (
    <MainLayout>
      <ArtistIndexLayout>
        <div className="w-full p-6 flex flex-col gap-8">
          <ArtistBiography />
        </div>
      </ArtistIndexLayout>
    </MainLayout>
  );
};

export default Artist;
