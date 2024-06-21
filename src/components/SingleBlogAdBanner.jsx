import React from "react";
import adpostBanner from "../assets/images/category/adBanner.png";

const SingleBlogAdBanner = () => {
  return (
    <div className="relative text-start max-h-full my-6 flex justify-center items-center py-8 px-6  text-white">
      <div className=" md:text-start relative z-10">
        <h3 className="text-2xl font-medium">Sign Up for Our Newsletters</h3>
        <p className="text-xs my-4">
          Get notified of the best deals on our WordPress themes.
        </p>
        <div className="flex w-full flex-col md:flex-row md:w-[620px] max-w-full border-2 bg-white rounded p-1 border-gray-300">
          <input
            className=" md:flex-1 py-1 text-black px-2"
            type="text"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="py-2 px-6 m-1 text-black bg-white border rounded-sm border-gray-300"
          >
            Subscribe
          </button>
        </div>
        <div className="my-4 text-[10px]">
          <input type="checkbox" className="mr-2" id="checkbox" />
          <label htmlFor="checkbox" className="text-gray-400">
            By checking this box, you confirm that you have read and are
            agreeing to our terms of use regarding the storage of the data
            submitted through this form.
          </label>
        </div>
      </div>
      <div className="absolute inset-0 ">
        <div className="absolute inset-0 bg-black/40"></div>
        <img
          src={adpostBanner}
          alt="landing page"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default SingleBlogAdBanner;
