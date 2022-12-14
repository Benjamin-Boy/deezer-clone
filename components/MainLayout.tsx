import Navbar from "../components/Navbar";
import Player from "../components/Player";
import TopBar from "../components/TopBar";
import Queue from "../components/Queue";

import { useState } from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [queueOpen, setQueueOpen] = useState(true);

  return (
    <div className="relative flex flex-col overflow-x-hidden">
      <div className="flex">
        {queueOpen && <Queue />}
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
