import React from "react";
import { skills } from "../utils/skills";
import SkillCard from "./SkillCard";

const SkillGrid = () => {
  return (
    <div className="grid md:grid-cols-6 grid-cols-3 gap-8 justify-center mx-auto my-8 md:w-[80%]">
      {skills.map((skill) => (
        <SkillCard key={skill.id} skillName={skill.name} skillSvg={skill.svg} />
      ))}
    </div>
  );
};

export default SkillGrid;
