import ArtistIndexLayout from "../../../components/ArtistIndexLayout";
import MainLayout from "../../../components/MainLayout";
import ArtistBiography from "../../../components/ArtistBiography";

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
