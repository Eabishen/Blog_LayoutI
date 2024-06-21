import React, { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import SingleBlog from "./SingleBlog";
import Img1 from "../assets/images/blogimages/1.jpg";
import Img2 from "../assets/images/blogimages/2.jpg";
import Img3 from "../assets/images/blogimages/3.jpg";
import Img4 from "../assets/images/blogimages/4.jpg";
import Img5 from "../assets/images/blogimages/5.jpg";
import Img6 from "../assets/images/blogimages/6.jpg";
import Img7 from "../assets/images/blogimages/7.jpg";
import Img8 from "../assets/images/blogimages/8.jpg";
import Img9 from "../assets/images/blogimages/9.jpg";

const iconList = [
  {
    iconName: "3.7 M",
    icon: <FaFacebookF />,
  },
  {
    iconName: "2.4 M",
    icon: <RiInstagramFill />,
  },
  {
    iconName: "3.7 M",
    icon: <FaTwitter />,
  },
  {
    iconName: "2.4 M",
    icon: <FaYoutube />,
  },
];

const imageList = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9];

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(9);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
          { signal: controller.signal }
        );
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
    return () => {
      setLoading(false);
      controller.abort();
    };
  }, []);

  return (
    <div>
      <div className="flex items-center justify-end gap-3">
        <ul className="flex items-center gap-3">
          {iconList.map((icon, i) => (
            <li key={i}>
              <a className="flex items-center gap-1" href="">
                {icon.icon}
                <span className="text-sm">{icon.iconName}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {loading && (
        <div className="mt-4 text-center font-bold text-lg">Loading...</div>
      )}
      <article className="mt-4 mx-2 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <SingleBlog
            key={i}
            post={post}
            imageslist={imageList[i]}
            postId={post.id}
          />
        ))}
      </article>

      <div className="my-8 text-center">
        <button className="px-6 py-2 border border-neutral-500 hover:bg-neutral-200 focus-within:bg-neutral-200 transition-colors duration-300">
          Load More
        </button>
      </div>
    </div>
  );
};

export default BlogList;
