import React from "react";

const SkillBar = ({ skill, level }) => {
  return (
    <div className="text-white my-4">
      <div className="flex justify-between">
        <span>{skill}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full bg-lightBGColor h-2 rounded mt-2">
        <div
          className="bg-blueGreyColor h-2 rounded"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { skill: "Java", level: 90 },
    { skill: "Javascript", level: 80 },
    { skill: "C#", level: 65 },
    { skill: "React", level: 80 },
    { skill: "SQL", level: 75 },
  ];

  return (
    <div className="flex flex-col md:flex-row mb-16">
      {/* Left Portion - Title */}
      <div className="w-5/12">
        <h2 className="text-3xl font-bold text-white">Skills</h2>
      </div>

      {/* Right Portion - Skill Bars */}
      <div className="w-7/12 font-semibold">
        {skills.map((skillItem, index) => (
          <SkillBar
            key={index}
            skill={skillItem.skill}
            level={skillItem.level}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
