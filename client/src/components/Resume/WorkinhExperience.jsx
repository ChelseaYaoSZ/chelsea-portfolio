import React from "react";

const WorkingExperience = () => {
  const experiences = [
    {
      company: "Guo Real Estate Land Price Appraisal",
      location: "Shenzhen, China",
      time: "Jun 2016 - Jul 2017",
    },
    {
      company: "Pearson Education Consulting",
      location: "Shenzhen, China",
      time: "Aug 2017 - Jun 2020",
    },
    {
      company: "Le Consultant Olymdia",
      location: "Montreal, QC",
      time: "Jun 2020 – Sep 2021",
    },
  ];

  return (
    <div className="flex flex-row w-full mb-12">
      {/* Left Portion - Title */}
      <h2 className="w-5/12 text-3xl font-bold">Working Experience</h2>

      {/* Right Portion - Experience List */}
      <div className="w-7/12 space-y-6 mx-8 font-bold">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-center w-full border-b border-gray-600 py-2"
          >
            <h3 className="font-extrabold w-1/3 text-center md:text-left">
              {exp.company}
            </h3>
            <p className="w-1/3 text-center">{exp.location}</p>
            <p className="w-1/3 text-center">{exp.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingExperience;
