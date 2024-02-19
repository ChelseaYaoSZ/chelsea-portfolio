import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const SocialIconComponent = () => {
  const iconData = [
    { name: "LinkedIn", icon: faLinkedin, url: "https://www.linkedin.com/in/shunzi-yao/" },
    { name: "GitHub", icon: faGithub, url: "https://https://github.com/ChelseaYaoSZ.com" },
    { name: "Facebook", icon: faFacebook, url: "https://www.facebook.com" },
  ];

  return (
    <div className="flex flex-col items-center gap-2">
      {iconData.map((item, index) => (
        <a
          key={index}
          href={item.url}
          className="text-blueGreyColor hover:text-pinkColor"
        >
          <FontAwesomeIcon icon={item.icon} />
        </a>
      ))}
    </div>
  );
};

export default SocialIconComponent;
