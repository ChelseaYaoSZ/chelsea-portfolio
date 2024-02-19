import React from "react";

const Myself = () => {
  return (
    <div className="flex flex-row w-full mb-24">
      {/* Left Portion */}
      <div className="w-5/12">
        <h2 className="text-3xl font-semibold mb-4">abit about Myself</h2>
      </div>

      {/* Right Portion */}
      <div className="w-7/12 font-bold text-xl">
        <p>
          Seeking a position that allows me to apply my software development
          expertise, combined with strong administrative and coordination
          skills, to innovate and solve complex challenges in the tech industry.
        </p>
      </div>
    </div>
  );
};

export default Myself;
