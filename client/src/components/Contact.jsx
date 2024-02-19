import React from "react";

const Contact = () => {
  return (
    <div className="bg-darkBGColor text-white p-16 font-josefin-sans px-56 h-full">
      {/* Header */}
      <div className="flex md:flex-row justify-between items-center mt-24">
        <h1 className="text-6xl font-bold">Contact me</h1>
      </div>
      <div className="w-full border-t border-blueGreyColor mt-6 mb-16"></div>

      {/* Get in touch */}
      <div className="flex flex-row w-full mb-24">
        <div className="w-1/2">
          <h2 className="text-3xl font-bold pb-12">Get in touch</h2>
          <p className="text-xl font-bold pb-4">Email: szyao416@gmail.com</p>
          <p className="text-xl font-bold pb-4">Phone: (555)927-5870</p>
        </div>
        {/* Contact form */}
        <div className="w-1/2 font-bold text-xl">
          <div className="flex-1 flex flex-col space-y-6">
            <div className="flex space-x-6">
              <input
                className="flex-1 bg-transparent border border-blueGreyColor p-2 rounded"
                type="text"
                placeholder="Name"
              />
              <input
                className="flex-1 bg-transparent border border-blueGreyColor p-2 rounded"
                type="email"
                placeholder="Email"
              />
            </div>
            <textarea
              className="bg-transparent border border-blueGreyColor p-2 rounded"
              rows="4"
              placeholder="Message"
            ></textarea>
            <button className="w-16 bg-transparent hover:bg-pinkColor border border-pinkColor p-2 rounded">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
