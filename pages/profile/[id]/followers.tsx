import ProfileIndexLayout from "../../../components/ProfileIndexLayout";
import MainLayout from "../../../components/MainLayout";
import ListItem from "../../../components/ListItem";

import { CiSearch } from "react-icons/ci";

const Followers = () => {
  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <MainLayout>
      <ProfileIndexLayout>
        <div className="w-full p-6">
          <div className="flex justify-between">
            <h1 className="text-[#fff] text-display-1 font-bold mb-3">
              2 followers
            </h1>
            <div className="flex justify-between items-center gap-3">
              <div className="flex items-center gap-2 bg-[#23232D] border border-[#42424c] rounded-md p-1 pr-8 hover:border-[#90909a] transition duration-300">
                <div className="text-[#90909a] text-display-3 cursor-text">
                  <CiSearch />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-[#23232D] text-[#fff] outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-7 px-6">
          {array.map((item) => {
            return <ListItem key={item} type="artist" name="User Name" />;
          })}
        </div>
      </ProfileIndexLayout>
    </MainLayout>
  );
};

export default Followers;
