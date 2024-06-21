import React from "react";
import featureImage from "../assets/images/featured/feature1.jpg";
import featureImage2 from "../assets/images/featured/feature2.jpg";
import featureImage3 from "../assets/images/featured/feature3.jpg";
import featureImage4 from "../assets/images/featured/feature4.jpg";
import featureImage5 from "../assets/images/featured/feature5.jpg";

const featuredImgList = [
  {
    imageURL: featureImage,
    featuredTitle: "Dominican Republic",
  },
  {
    imageURL: featureImage2,
    featuredTitle: "Maecenas Tincidunt",
  },
  {
    imageURL: featureImage3,
    featuredTitle: "Dominican Republic",
  },
  {
    imageURL: featureImage4,
    featuredTitle: "Dominican Republic",
  },
  {
    imageURL: featureImage5,
    featuredTitle: "Dominican Republic",
  },
];

const FeaturedSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 ">
      {featuredImgList.map((featured, i) => {
        return (
          <div
            className="relative max-h-full aspect-square grid place-content-center"
            key={i}
          >
            <div className="absolute  inset-0 aspect-square">
              <img
                src={featured.imageURL}
                alt="featured"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-20 text-white flex flex-col items-center justify-center">
              {featured.featuredTitle}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedSection;
