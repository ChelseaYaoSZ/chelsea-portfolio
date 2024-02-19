import React from "react";

const Project = ({}) => {
  const Projects = [
    {
      project: "Optical Store Management System",
      description:
        "Developed a desktop application aimed at optical store management, targeting supply chain vendors for commercial use.",
      tech: "Built on the .NET Framework 4.7.2, utilized WPF and C#, integrated PostgreSQL for data handling and management.",
    },

    {
      project: "Unbox Holidays",
      description:
        "Designed and developed e-commerce website for public use and service.",
      tech: "Employed Figma for mock-up design, crafted using Tailwind CSS, React.js for the front-end, and Node.js/Express.js for the back- end, utilized MongoDB to manage user accounts and product inventory, with Firebase authentication, integrated an AI-powered chatbot, configured a CI/CD pipeline to automatically deploy to AWS EC2.",
    },
    {
      project: "Personal Website Portfolio",
      description:
        "Developed personal website portfolio that anyone can download and use, end goal of becoming NPM package.",
        tech: "Built using React, test coverage using jest and coveralls, enforced linting/code standards using ESLint/Prettier, continuous integration/deployment using CI/CD.",
    },
  ];

  return (
    <div className="flex flex-row w-full mb-24">
      {/* Left Portion */}
      <div className="w-5/12">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
      </div>

      {/* Right Portion */}
      <div className="w-7/12 font-bold text-xl">
      {Projects.map((project, index) => (
        <div key={index} className="mb-12">
          <div className="flex flex-col items-start text-2xl font-extrabold pb-3">
            <h1>{project.project}</h1>
          </div>
          <div className="w-full border-t border-blueGreyColor mb-2"></div>
          <ul className="text-lg list-disc list-inside">
            <li>{project.description}</li>
            {project.tech && <li>{project.tech}</li>}
          </ul>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Project;
