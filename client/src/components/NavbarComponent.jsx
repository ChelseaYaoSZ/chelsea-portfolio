import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faPlane,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const NavbarComponent = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const location = useLocation();

  const iconData = [
    { name: "Home", icon: faHome, path: "/" },
    { name: "Resume", icon: faUser, path: "/about" },
    { name: "Photo", icon: faPlane, path: "/project" },
    { name: "Contact", icon: faEnvelope, path: "/contact" },
  ];

  return (
    <nav className="flex flex-col items-center gap-8 font-josefin-sans font-bold">
      {iconData.map((item) => (
        <NavLink
          key={item.name}
          exact="true"
          to={item.path}
          className={`hover:text-pinkColor ${
            location.pathname === item.path
              ? "text-pinkColor"
              : "text-blueGreyColor"
          } ${hoveredIcon === item.name ? "text-l" : "text-2xl"}`}
          onMouseEnter={() => setHoveredIcon(item.name)}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          {hoveredIcon === item.name ? (
            item.name
          ) : (
            <FontAwesomeIcon icon={item.icon} />
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavbarComponent;
