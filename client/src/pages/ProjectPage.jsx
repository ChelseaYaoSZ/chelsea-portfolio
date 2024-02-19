import React from "react";
import Sidebar from "../components/Sidebar";
import TravelImage from "../components/TravelImage";

const ProjectPage = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="fixed top-0 left-0 h-full w-[75px]">
        <Sidebar />
      </div>
      <div  className="ml-[75px] flex-1 overflow-auto">
        <TravelImage />
      </div>
    </div>
  );
};

export default ProjectPage;
