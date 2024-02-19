import React from "react";

const Achievement = () => {
  return (
    <div className="flex flex-row w-full mb-24">
      {/* Left Portion */}
      <div className="w-5/12">
        <h2 className="text-3xl font-semibold mb-4">Achievement</h2>
      </div>

      {/* Right Portion */}
      <div className="w-7/12 font-bold text-xl">
        <p>
          Achieve Third Place at Bell Geekfest 2023 Hackathon as Team Leader.
        </p>
      </div>
    </div>
  );
};

export default Achievement;
