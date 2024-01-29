import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { github, linkedin, twitter, email, instagram } from "../utils/constant";

const Footer = () => {
  return (
    <div className="mt-auto text-center py-4  ">
      <div className="container-max space-y-4 text-center">
        <h1 className="text-lg font-medium gradient-text">
          LET'S GET IN TOUCH!
        </h1>
        <div className="flex items-center gap-6  justify-center">
          <a href={`mailto:${email}`}>
            <IoMdMail className="icons" />
          </a>
          <a href={github}>
            <FaGithub className="icons" />
          </a>
          <a href={linkedin}>
            <FaLinkedin className="icons" />
          </a>
          <a href={twitter}>
            <FaXTwitter className="icons" />
          </a>
          <a href={instagram}>
            <FaInstagram className="icons" />
          </a>
        </div>
        <h1 className="text-lg font-medium gradient-text">
          ★ DESIGNED AND CODED BY SWARAJ PRADHAN ★
        </h1>
      </div>
    </div>
  );
};

export default Footer;
