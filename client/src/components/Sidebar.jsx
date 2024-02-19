// Sidebar.jsx
import React from "react";
import WeatherComponent from "./WeatherComponent";
import NavbarComponent from "./NavbarComponent";
import SocialIconComponent from "./SocialIconComponent";

const Sidebar = () => {
  return (
    <div className="bg-lightBGColor flex flex-col justify-between h-screen p-5">
      <WeatherComponent />
      <NavbarComponent />
      <SocialIconComponent />
    </div>
  );
};

export default Sidebar;
