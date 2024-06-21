import React from "react";
import { FaBehance, FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { SiMyspace } from "react-icons/si";

const AuthorSocialLinks = () => {
  return (
    <div className="flex items-center gap-2 mt-4 ">
      <div className="p-2 rounded-full bg-black text-white">
        <SiMyspace className="text-sm" />
      </div>
      <div className="p-2 rounded-full bg-black text-white">
        <FaBehance className="text-sm" />
      </div>
      <div className="p-2 rounded-full bg-black text-white">
        <FaGithub className="text-sm" />
      </div>
      <div className="p-2 rounded-full bg-black text-white">
        <FaMedium className="text-sm" />
      </div>
    </div>
  );
};

export default AuthorSocialLinks;
