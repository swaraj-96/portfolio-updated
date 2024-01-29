import React from "react";
import { email } from "../utils/constant";

const MyInfo = () => {
  return (
    <div className="md:flex items-center">
      <div className="md:w-7/12 pr-4 mr-auto ">
        <p className="dark:text-gray-400">
          👋 Hi there! I'm{" "}
          <span className="font-bold gradient-text text-lg animate-pulse">
            Swaraj
          </span>
          , a highly motivated and detail-oriented frontend web developer with a
          keen interest in crafting seamless user experiences. With a solid
          foundation in{" "}
          <span className="font-semibold text-red-700">
            HTML, CSS, JavaScript, and React.js
          </span>
          , I am dedicated to creating visually appealing and intuitive websites
          that engage users effectively. I am eager to join a dynamic team where
          I can apply my technical skills and creativity to contribute to
          innovative web projects. I am open to learning and adapting to new
          technologies, always striving to stay up-to-date with the latest
          trends in frontend development. Let's connect! I'm excited about the
          opportunity to collaborate, learn, and grow together. Feel free to
          reach out for discussions on web development, design, or anything
          related to creating exceptional online experiences. Let's chat! Feel
          free to message me at{" "}
          <a
            className="text-red-600 font-semibold"
            href={`mailto:${email}`}
          >
            pswaraj96@gmail.com
          </a>{" "}
          🌐✨
        </p>
      </div>
      <div className="md:w-4/12 pl-4 work my-4 md:my-0">
        <img
          src="/images/my-dp.jpg"
          className="rounded-lg w-full h-auto aspect-square"
        />
      </div>
    </div>
  );
};

export default MyInfo;
