import React from "react";
import { FaFacebook, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const ICONSDATA = [
  {
    iconImg: <FaFacebook />,
    iconFollow: "10",
  },
  {
    iconImg: <FaTwitter />,
    iconFollow: "69K",
  },
  {
    iconImg: <RiInstagramFill />,
    iconFollow: "45",
  },
  {
    iconImg: <FaPinterest />,
    iconFollow: "69K",
  },
  {
    iconImg: <FaYoutube />,
    iconFollow: "69K",
  },
];

const BlogFollowContent = () => {
  return (
    <div className="mx-4 my-8">
      <h4 className="font-semibold text-xl ">Follow Us</h4>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-6">
        {ICONSDATA.map((iconSingle, i) => {
          return (
            <IconsCard
              key={i}
              iconImg={iconSingle.iconImg}
              iconFollow={iconSingle.iconFollow}
            />
          );
        })}
      </div>
      <p>
        <b>Subscription</b> Subscribe to our newsletter and receive a selection
        of cool articles every weeks
      </p>

      <div className="my-6">
        <input
          className="w-full p-4 mb-4 bg-transparent border border-gray-300 rounded"
          placeholder="Enter your email"
          type="text"
        />
        <button className="inline-block w-full p-4 text-center uppercase tracking-wide bg-black text-white rounded">
          Subscribe
        </button>
        <div className="flex items-center gap-4 my-4">
          <input type="checkbox" name="agree" id="agree" />
          <label htmlFor="agree" className="text-gray-500 font-light text-sm">
            By checking this box, you confirm that you have read and are
            agreeing to our terms of use regarding the storage of the data
            submitted through this form.
          </label>
        </div>
      </div>
    </div>
  );
};

const IconsCard = ({ iconImg, iconFollow }) => {
  return (
    <div className="grid gap-4">
      <div>{iconImg}</div>
      <div>{iconFollow}</div>
    </div>
  );
};

export default BlogFollowContent;
