import React from "react";
import i1 from "../assets/images/sideuserImg/i1.png";
import i2 from "../assets/images/sideuserImg/i2.png";
import i3 from "../assets/images/sideuserImg/i3.png";
import i4 from "../assets/images/sideuserImg/i4.png";
import i5 from "../assets/images/sideuserImg/i5.png";
import i6 from "../assets/images/sideuserImg/i6.png";
import i7 from "../assets/images/sideuserImg/i7.png";
import i8 from "../assets/images/sideuserImg/i8.png";
import i9 from "../assets/images/sideuserImg/i9.png";

const ICONS = [
  {
    singleImageURL: i1,
    socialName: "Facebook",
    socialLikes: "96",
    socailType: "Likes",
  },
  {
    singleImageURL: i2,
    socialName: "Twitter",
    socialLikes: "60K",
    socailType: "Followers",
  },
  {
    singleImageURL: i3,
    socialName: "Instagram",
    socialLikes: "20K",
    socailType: "Followers",
  },
  {
    singleImageURL: i4,
    socialName: "Pinterest",
    socialLikes: "13K",
    socailType: "Subscribers",
  },
  {
    singleImageURL: i5,
    socialName: "Youtube",
    socialLikes: "625K",
    socailType: "Likes",
  },
  {
    singleImageURL: i6,
    socialName: "SoundCloud",
    socialLikes: "20K",
    socailType: "Followers",
  },
  {
    singleImageURL: i7,
    socialName: "Medium",
    socialLikes: "13K",
    socailType: "Likes",
  },
  {
    singleImageURL: i8,
    socialName: "Vimeo",
    socialLikes: "20K",
    socailType: "Followers",
  },
  {
    singleImageURL: i9,
    socialName: "Telegram",
    socialLikes: "906K",
    socailType: "Followers",
  },
];

const SocialMediaCard = () => {
  return (
    <div className="my-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
      {ICONS.map((singleImage, i) => (
        <div key={i} className="text-center ">
          <div className="size-10 mx-auto mb-2">
            <img
              className="w-full h-full object-cover object-center"
              src={singleImage.singleImageURL}
              alt={`socialIcon-${i}`}
            />
          </div>
          <div>
            <p className="font-medium">{singleImage.socialName}</p>
            <div className="text-gray-500">
              <p>{singleImage.socialLikes}</p>
              <p className="text-xs">{singleImage.socailType}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaCard;
