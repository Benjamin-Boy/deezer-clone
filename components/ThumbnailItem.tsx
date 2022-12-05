import Image from "next/image";
import Link from "next/link";

import defaultArtwork from "../public/default-artwork.png";

const ThumbnailItem = () => {
  const id = 58021;

  return (
    <div className="flex flex-col items-center gap-2 w-[165px] md:w-[25%]">
      <div>
        <Image
          src={defaultArtwork}
          // width={165}
          placeholder="blur"
          alt="Artist image"
          className="rounded-md md:w-[265px]"
        />
      </div>
      <div className="flex flex-col items-center">
        <Link href={`/show/${id}`}>
          <h4 className="text-[#fff] text-display-3 hover:underline">
            Podcast Name
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default ThumbnailItem;
