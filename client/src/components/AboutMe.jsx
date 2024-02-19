import React from "react";
import WorkingExperience from "./Resume/WorkinhExperience";
import Skills from "./Resume/Skills";
import Myself from "./Resume/Myself";
import Achievement from "./Resume/Achievement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pdfFile from "../assets/files/Resume-ShunziYao.pdf";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Project from "./Resume/Project";

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = pdfFile;
  link.download = "Resume-ShunziYao.pdf";
  document.body.appendChild(link);
  console.log(link);
  link.click();
  document.body.removeChild(link);
};

const AboutMe = () => {
  return (
    <div className="bg-darkBGColor text-white p-16 font-josefin-sans px-36">
      {/* Title */}
      <div className="flex md:flex-row justify-between items-center mt-24">
        <h1 className="text-6xl font-bold">About me</h1>
        {/* Download Button */}
        <div className="inline-block">
          <button
            onClick={handleDownload}
            className="bg-blueGreyColor hover:bg-pinkColor text-white font-bold py-2 px-4 rounded flex items-center"
          >
            <FontAwesomeIcon icon={faDownload} className="pr-2" />
            Download CV
          </button>
        </div>
      </div>

      {/* Line */}
      <div className="w-full border-t border-blueGreyColor mt-6 mb-16"></div>

      {/* Content */}
      <Myself />
      <WorkingExperience />
      <Skills />
      <Achievement />
      <Project />
    </div>
  );
};

export default AboutMe;
