import { useRouter } from "next/router";

import ListItem from "../ListItem";

import { BsChevronDown } from "react-icons/bs";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useEffect } from "react";
import { getArtists } from "../../features/artistSlice";

import { Artist } from "../../typings.d";

const ArtistAlbums = () => {
  const router = useRouter();
  const artistId = router.query.id;

  const { artists } = useAppSelector((state) => state.artists);
  const dispatch = useAppDispatch();

  const artist = artists.find((artist: Artist) => artist.id === artistId);

  // console.log(artist);

  const albums = artist?.albums.filter((album) => album.type === "Album");
  const eps = artist?.albums.filter((album) => album.type === "Ep");
  const singles = artist?.albums.filter((album) => album.type === "Single");
  const featurings = artist?.albums.filter(
    (album) => album.type === "Featuring"
  );

  // artist?.albums.forEach((album) => {
  //   if (album.type === "Album") {
  //     albums.push(albums)
  //   }
  // });

  useEffect(() => {
    dispatch(getArtists());
  }, []);

  if (!artist) {
    return <h1>LOADING...</h1>;
  }

  return (
    <div>
      {artist && albums!.length > 0 && (
        <>
          <div className="flex justify-between items-center gap-2">
            <h1 className="text-display-2 text-[#fff] font-bold leading-none">
              Albums
            </h1>
            <div className="grow border-b border-[#42424c]"></div>
            <div className="flex">
              <div className="flex justify-end">
                <div className="flex flex-col">
                  <button className="bg-[#121216] text-[#fff] text-display-4 font-bold rounded-full border border-[#3e3e42] px-4 py-1 flex items-center gap-2 hover:bg-[#353539] transition duration-250">
                    TYPE
                    <BsChevronDown />
                  </button>
                  <ul className="hidden bg-[#23232d] text-[#fff] text-display-5 border border-[#3e3e42]">
                    <li className="text-[#a2a2ad] cursor-pointer hover:bg-[#505056] hover:text-[#fff] px-3 py-2">
                      Type
                    </li>
                    <li className="text-[#a2a2ad] cursor-pointer hover:bg-[#505056] hover:text-[#fff] px-3 py-2">
                      A-Z
                    </li>
                    <li className="text-[#a2a2ad] cursor-pointer hover:bg-[#505056] hover:text-[#fff] px-3 py-2">
                      Release date
                    </li>
                    <li className="text-[#a2a2ad] cursor-pointer hover:bg-[#505056] hover:text-[#fff] px-3 py-2">
                      Most played
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="relative flex flex-col">
                  <button className="bg-[#121216] text-[#fff] text-display-4 font-bold rounded-full border border-[#3e3e42] px-4 py-1 flex items-center gap-2 hover:bg-[#353539] transition duration-250">
                    GRID
                    <BsChevronDown />
                  </button>
                  <ul className="hidden z-20 absolute top-8 w-full bg-[#23232d] text-[#fff] text-display-5 border border-[#3e3e42]">
                    <li className="text-[#a2a2ad] cursor-pointer hover:bg-[#505056] hover:text-[#fff] px-3 py-2">
                      Grid
                    </li>
                    <li className="text-[#a2a2ad] cursor-pointer hover:bg-[#505056] hover:text-[#fff] px-3 py-2">
                      List
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between gap-7 pt-8 mb-8">
            {albums?.map(({ id, name, artists, releaseDate, image }) => {
              return (
                <ListItem
                  key={id}
                  type="album"
                  name={name}
                  artists={artists}
                  date={releaseDate}
                  image={image}
                  albumPath={`/album/${id}`}
                  artistPath={`/artist/${artistId}`}
                />
              );
            })}
          </div>
        </>
      )}

      {artist && eps!.length > 0 && (
        <>
          <div className="flex justify-between items-center gap-2">
            <h1 className="text-display-2 text-[#fff] font-bold leading-none">
              EPs
            </h1>
            <div className="grow border-b border-[#42424c]"></div>
          </div>
          <div className="flex flex-wrap justify-between gap-7 pt-8 mb-8">
            {eps?.map(({ id, name, artists, releaseDate, image }) => {
              return (
                <ListItem
                  key={id}
                  type="album"
                  name={name}
                  artists={artists}
                  date={releaseDate}
                  image={image}
                  albumPath={`/album/${id}`}
                  artistPath={`/artist/${artistId}`}
                />
              );
            })}
          </div>
        </>
      )}

      {artist && singles!.length > 0 && (
        <>
          <div className="flex justify-between items-center gap-2">
            <h1 className="text-display-2 text-[#fff] font-bold leading-none">
              Singles
            </h1>
            <div className="grow border-b border-[#42424c]"></div>
          </div>
          <div className="flex flex-wrap justify-between gap-7 pt-8 mb-8">
            {singles?.map(({ id, name, artists, releaseDate, image }) => {
              return (
                <ListItem
                  key={id}
                  type="album"
                  name={name}
                  artists={artists}
                  date={releaseDate}
                  image={image}
                  albumPath={`/album/${id}`}
                  artistPath={`/artist/${artistId}`}
                />
              );
            })}
          </div>
        </>
      )}

      {artist && featurings!.length > 0 && (
        <>
          <div className="flex justify-between items-center gap-2">
            <h1 className="text-display-2 text-[#fff] font-bold leading-none">
              Featured in
            </h1>
            <div className="grow border-b border-[#42424c]"></div>
          </div>
          <div className="flex flex-wrap justify-between gap-7 pt-8 mb-8">
            {featurings?.map(({ id, name, artists, releaseDate, image }) => {
              return (
                <ListItem
                  key={id}
                  type="album"
                  name={name}
                  artists={artists}
                  date={releaseDate}
                  image={image}
                  albumPath={`/album/${id}`}
                  artistPath={`/artist/${artistId}`}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ArtistAlbums;
