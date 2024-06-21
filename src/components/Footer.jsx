import React from "react";
import { FaFacebookF, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const iconList = [
  {
    iconName: "29",
    icon: <FaFacebookF />,
  },
  {
    iconName: "70K",
    icon: <FaTwitter />,
  },
  {
    iconName: "40",
    icon: <RiInstagramFill />,
  },

  {
    iconName: "13K",
    icon: <FaPinterest />,
  },
  {
    iconName: "168K",
    icon: <FaYoutube />,
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
      <div className="text-white">Designed & Developed by XP DESIGN</div>
      <div className="flex items-center gap-4">
        {iconList.map((icon, index) => (
          <div key={index} className="">
            <div>{icon.icon}</div>
            <div className="text-sm">{icon.iconName}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
