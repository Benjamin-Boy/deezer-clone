import ArtistNav from "./ArtistNav";

const ArtistIndexLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full bg-[#121216]">
      <div className="mb-[5rem] mt-[50px] flex flex-col gap-4 min-w-[1000px] max-w-[90%] m-auto">
        <ArtistNav />
        {children}
      </div>
    </div>
  );
};

export default ArtistIndexLayout;
