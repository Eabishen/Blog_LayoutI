import React from "react";

import SocialMediaCard from "./SocialMediaCard";
import AuthorCard from "./AuthorCard";
import BlogFollowContent from "./BlogFollowContent";
import LastestBlog from "./LastestBlog";

const SideContent = () => {
  return (
    <div className="px-4 h-full">
      <h4 className="uppercase tracking-widest font-light">SOCIAL LINKS</h4>
      <SocialMediaCard />
      <AuthorCard />
      <BlogFollowContent />
      <LastestBlog />
    </div>
  );
};

export default SideContent;
