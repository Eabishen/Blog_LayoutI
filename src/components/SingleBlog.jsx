import React from "react";
import Avatar from "../assets/images/avatar.jpg";
import { CiPlay1, CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";

const SingleBlog = ({ post, imageslist, postId }) => {
  return (
    <div>
      <div className="relative h-64 w-full text-white aspect-square bg-neutral-500">
        <div className="z-10 text-xs absolute inset-x-1 top-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="p-1 rounded-sm bg-white/25 backdrop-blur-sm">
              Aenean Eleifend
            </span>
            <span className="p-1 rounded-sm bg-white/25 backdrop-blur-sm">
              Aliquam
            </span>
          </div>
          <div className="p-1 rounded-full grid place-content-center bg-white/25 backdrop-blur-sm">
            <CiPlay1 />
          </div>
        </div>
        <img
          className="w-full h-full object-cover"
          src={`${imageslist}`}
          alt="thumbnail"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <h2 className="mt-4 text-xl font-semibold leading-tight line-clamp-2">
        {post.title}
      </h2>
      <div className="mt-4 flex flex-col xl:flex-row items-start xl:items-center md:justify-between gap-2 xl:gap-0">
        <div className="flex items-center gap-2">
          <div className="size-6 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src={Avatar}
              alt=""
            />
          </div>
          <span className="text-sm font-semibold">Joanna Wellick</span>
        </div>
        <div className="text-sm text-neutral-500 flex items-center gap-3">
          <span>June 28, 2018</span>
          <span>
            <CiShare2 className="inline-block" /> 1K shares
          </span>
        </div>
      </div>
      <p className="mt-4 text-sm text-neutral-500 line-clamp-3">{post.body}</p>

      <div className="mt-4">
        <Link
          className="border-b border-spacing-3 border-neutral-500 hover:text-neutral-500 outline-offset-4 transition-transform"
          to={`/blog/${postId}`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default SingleBlog;
