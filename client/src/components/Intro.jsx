import React from "react";
import profileImage from "../assets/images/profile.jpg";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import pdfFile from "../assets/files/Resume-ShunziYao.pdf";

const Intro = () => {
  const text = useTypingEffect(
    ["code cool websites!", "have a cute westie dog!"],
    130
  );

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "Resume-ShunziYao.pdf";
    document.body.appendChild(link);
    console.log(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex w-full h-full bg-darkBGColor text-white">
      <div className="w-1/2 flex justify-center items-left px-20 flex-col gap-2 font-josefin-sans">
        <h1 className="text-4xl font-bold mb-2 relative">
          Hi! I'm{" "}
          <span className="relative">
            Chelsea
            <span className="absolute w-28 h-2 bg-pinkColor bottom-0 left-0 transform -translate-y-1/2 opacity-50"></span>
          </span>
          .
        </h1>

        <h2 className="text-2xl mb-2 font-bold">
          I <span> {text}</span>
          <span className="inline-block w-2 h-0.5 bg-white animate-blink-caret"></span>
        </h2>
        <br></br>
        <h2 className="text-2xl mb-4">
          I'm a software developer based out of Montreal, CANADA.
        </h2>
        <div className="flex justify-left gap-4">
          <NavLink
            to="/about"
            className="bg-blueGreyColor hover:bg-pinkColor text-white font-bold py-2 px-4 rounded inline-block"
          >
            <button onClick={handleDownload}>
              <FontAwesomeIcon icon={faDownload} className="pr-2" />
              Download CV
            </button>
          </NavLink>
          <button className="border-2 border-pinkColor hover:bg-pinkColor text-white font-bold py-2 px-4 rounded">
            <NavLink to="/contact">Contact Me</NavLink>
          </button>
        </div>
      </div>
      <div className="w-1/2 flex justify-end items-center overflow-hidden">
        <img
          src={profileImage}
          alt="Chelsea"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Intro;
