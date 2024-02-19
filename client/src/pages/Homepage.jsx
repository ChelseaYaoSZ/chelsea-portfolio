import React from "react";
import Sidebar from "../components/Sidebar";
import Intro from "../components/Intro";
import Dog from "../components/Dog";

const Homepage = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="flex-shrink-0 w-[75px]">
        <Sidebar />
      </div>
      <div className="flex-1 h-screen">
        <Intro />
      </div>
      <div>
        <Dog />
      </div>
    </div>
  );
};

export default Homepage;
