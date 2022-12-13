import ProfileIndexLayout from "../../../components/ProfileIndexLayout";
import MainLayout from "../../../components/MainLayout";

import ItemsList from "../../../components/ItemsList";

const Profile = () => {
  const id = 0;
  const artistId = 0;
  const albumId = 0;
  const podcastId = 0;

  return (
    <MainLayout>
      <ProfileIndexLayout>
        <div>
          <ItemsList
            title="Recently played"
            type="artist"
            name="Artist Name"
            fansNb="10,000"
          />

          <div>Playlists</div>

          <ItemsList
            title="Albums"
            type="album"
            name="Album Name"
            artistName="Artist Name"
            titlePath={`/profile/${id}/albums`}
            itemPath={`/album/${albumId}`}
          />

          <ItemsList
            title="Artists"
            type="artist"
            name="Artist Name"
            fansNb="10,000"
            titlePath={`/profile/${id}/artists`}
            itemPath={`/artist/${artistId}`}
          />

          <ItemsList
            title="Podcasts"
            type="podcast"
            name="Podcast Name"
            titlePath={`/profile/${id}/shows`}
            itemPath={`/podcast/${podcastId}`}
          />
        </div>
      </ProfileIndexLayout>
    </MainLayout>
  );
};

export default Profile;
