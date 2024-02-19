import React from "react";
import Sidebar from "../components/Sidebar";
import AboutMe from "../components/AboutMe";

const AboutMePage = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="fixed top-0 left-0 h-full w-[75px]">
        <Sidebar />
      </div>
      <div className="ml-[75px] flex-1 overflow-auto">
        <AboutMe />
      </div>
    </div>
  );
};

export default AboutMePage;
