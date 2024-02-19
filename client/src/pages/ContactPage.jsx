import React from "react";
import Sidebar from "../components/Sidebar";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="fixed top-0 left-0 h-full w-[75px]">
        <Sidebar />
      </div>
      <div className="ml-[75px] flex-1 overflow-auto ">
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
