import React from "react";
import AuthorImage from "../assets/images/sideuserImg/author.jpg";
import { SiMyspace } from "react-icons/si";
import { FaBehance, FaGithub, FaMedium } from "react-icons/fa";
import AuthorSocialLinks from "./AuthorSocialLinks";
const AuthorCard = () => {
  return (
    <div className="my-6 ">
      <div className="flex bg-white px-2 py-6 lg:mx-2 flex-col items-center">
        <h4 className="uppercase tracking-widest font-light mb-4">Author</h4>
        <p className="font-semibold">Luci Avetisyan</p>
        <div className="size-24 my-4 rounded-full overflow-clip overflow-hidden">
          <img
            className="w-full inline-block h-full object-cover object-center"
            src={AuthorImage}
            alt="Author Luci Avestisyan"
          />
        </div>
        <p className="text-gray-500 font-medium text-center text-balance">
          Luci vitae dapibus rhoncus. Eget etiam aenean nisi montes felis
          pretium donec veni. Pede…
        </p>
        <div>
          <AuthorSocialLinks />
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
