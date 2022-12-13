import Navbar from "../components/Navbar";
import Player from "../components/Player";
import TopBar from "../components/TopBar";
// import RadiosIndex from "../components/RadiosIndex";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="flex">
        <Navbar />

        <div className="ml-[14rem] w-screen">
          <TopBar />
          {children}
        </div>
      </div>
      <Player />
    </div>
  );
};

export default MainLayout;
