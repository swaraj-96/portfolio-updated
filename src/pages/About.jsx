import React from "react";
import MyInfo from "../components/MyInfo";
import SkillGrid from "../components/SkillGrid";

const About = () => {
  return (
    <div className="container-max px-4"> 
      <h1 className="text-lg font-bold text-gray-500 my-4 dark:text-white">About Me</h1>
      <MyInfo/>
      <h1 className="text-lg font-bold text-gray-500 my-4 py-2 dark:text-white">My Skills</h1>
      <SkillGrid/>
    </div>
  );
};

export default About;
