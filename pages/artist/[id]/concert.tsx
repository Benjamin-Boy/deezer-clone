import ArtistIndexLayout from "../../../components/ArtistIndexLayout";
import MainLayout from "../../../components/MainLayout";
import ArtistConcerts from "../../../components/ArtistConcerts";

const Concerts = () => {
  return (
    <MainLayout>
      <ArtistIndexLayout>
        <div className="w-full p-6 flex flex-col gap-8">
          <ArtistConcerts />
        </div>
      </ArtistIndexLayout>
    </MainLayout>
  );
};

export default Concerts;
