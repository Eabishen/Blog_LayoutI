import React from "react";
import { CiClock2 } from "react-icons/ci";

import DashedIcon from "./DashedIcon";

import imageTag1 from "../assets/images/blogimages/7.jpg";
import imageTag2 from "../assets/images/featured/moreimage2.png";
import imageTag3 from "../assets/images/featured/moreimage3.png";
import imageTag4 from "../assets/images/featured/moreimage4.png";
import imageTag5 from "../assets/images/featured/moreimage5.png";
import imageTag6 from "../assets/images/gallery/gallerygrid2.webp";

const imageArray = [
  imageTag1,
  imageTag2,
  imageTag3,
  imageTag4,
  imageTag5,
  imageTag6,
];

const MorePost = () => {
  return (
    <div>
      <h4 className="text-lg lg:text-xl font-semibold uppercase">
        You May Also Like
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {imageArray.map((singleimg, i) => {
          return <SingleCardPost key={i} cardImg={singleimg} />;
        })}
      </div>
    </div>
  );
};

const SingleCardPost = ({ cardImg }) => {
  return (
    <div>
      <div className="relative  w-full text-white aspect-square bg-neutral-500">
        <div className="z-10 text-xs absolute inset-x-1 top-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="p-1 rounded-sm bg-white/25 backdrop-blur-sm">
              Aenean Eleifend
            </span>
            <span className="p-1 rounded-sm bg-white/25 backdrop-blur-sm">
              Aliquam
            </span>
          </div>
        </div>
        <img
          className="w-full h-full object-cover"
          src={cardImg}
          alt="thumbnail"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="my-4">
        <span className="text-2xl font-semibold">
          Integer Maecenas Eget Viverra.
        </span>
        <span className="text-gray-500">
          Aenean eleifend ante maecenas pulvinar montes lorem et pede.
        </span>
      </div>
      <div className="text-xs flex items-center gap-0.5 xl:gap-2">
        <div className="">June 21,2022</div>
        <DashedIcon color="gray" />
        <div className="flex items-center">
          <CiClock2 />
          <span className="ml-1">2 minute read</span>
        </div>
      </div>
    </div>
  );
};

export default MorePost;
