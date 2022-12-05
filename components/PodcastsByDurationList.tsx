const PodcastsByDurationList = () => {
  return (
    <>
      <h1 className="text-display-2 text-[#fff] font-bold mb-5">
        Podcasts by duration
      </h1>
      <div className="flex justify-start gap-7">
        <div className="flex justify-center items-center gap-2 w-[160px] h-[80px] bg-[#b93232] rounded-md cursor-pointer">
          <h4 className="text-[#fff] font-bold">10 min</h4>
        </div>
      </div>
    </>
  );
};

export default PodcastsByDurationList;
