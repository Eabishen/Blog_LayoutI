import React from "react";

const BlogPara = ({ children }) => {
  return (
    <div className="my-6 leading-relaxed whitespace-pre-wrap break-words">
      {children}
    </div>
  );
};

export default BlogPara;
