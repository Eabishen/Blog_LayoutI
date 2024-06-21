import React from "react";
import DashedIcon from "./DashedIcon";
import { CiClock2 } from "react-icons/ci";

import LastesPostImg from "../assets/images/sideuserImg/lastestpost.jpg";

const LastestBlog = () => {
  return (
    <div className="mt-16 sticky top-4 mx-4">
      <h4 className="font-semibold text-xl mb-2">The Latest</h4>
      {Array(4)
        .fill()
        .map((s, i) => (
          <BlogCards key={i} bg={i === 0 ? LastesPostImg : ""} />
        ))}
    </div>
  );
};

const BlogCards = ({ bg }) => {
  return (
    <div className={`relative ${!bg ? "bg-white" : "text-white"} p-4 my-2`}>
      <div className="relative z-10">
        <h5 className="font-bold pb-4">
          10 Habits That Will Change Your Live for the Better If envy and
          jealousy are impacting your friendships
        </h5>
        <div className="text-xs flex items-center gap-0.5 lg:gap-2">
          <div className="">June 21, 2022</div>
          <DashedIcon color="gray" />
          <div className="flex items-center">
            <CiClock2 />
            <span className="ml-1">2 minute read</span>
          </div>
        </div>
      </div>
      {bg && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40"></div>
          <img
            src={bg}
            alt="landing page"
            className="w-full h-full object-cover object-center"
          />
        </div>
      )}
    </div>
  );
};

export default LastestBlog;
