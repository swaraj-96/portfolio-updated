import React from "react";

const SkillCard = ({ skillName, skillSvg }) => {
  return (
    <div className="">
      <img
        src={skillSvg}
        alt={skillName}
        className="aspect-square my-0 mx-auto max-w-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      />
      <h3 className="text-center font-medium text-lg dark:text-white">{skillName}</h3>
    </div>
  );
};

export default SkillCard;
