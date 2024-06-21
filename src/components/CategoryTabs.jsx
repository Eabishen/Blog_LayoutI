import React, { useState } from "react";
import { Link } from "react-router-dom";

import sideMain from "../assets/images/featured/feature5.jpg";
import sideimg1 from "../assets/images/category/side1.jpg";
import sideimg2 from "../assets/images/category/side2.jpg";
import sideimg3 from "../assets/images/category/side3.jpg";
import sideimg4 from "../assets/images/category/side4.jpg";

import manga1 from "../assets/images/category/manga1.jpg";
import manga2 from "../assets/images/category/manga2.jpg";
import manga3 from "../assets/images/category/manga3.jpg";

const sideList = [
  {
    img: sideimg1,
    sideTitle: "Akame Ga Kill: Season finale",
  },
  {
    img: sideimg2,
    sideTitle: "Naruto Uzumaki: Hidden Village",
  },
  {
    img: sideimg3,
    sideTitle: "Love juice Season Priemere",
  },
  {
    img: sideimg4,
    sideTitle: "Love juice Season Priemere",
  },
];

const mangaList = [
  {
    img: manga1,
    sideTitle:
      "Tick one more destination off of your bucket list with one of our most popular vacations in 2022",
  },
  {
    img: manga2,
    sideTitle:
      "Tick one more destination off of your bucket list with one of our most popular vacations in 2022",
  },
  {
    img: manga3,
    sideTitle:
      "Tick one more destination off of your bucket list with one of our most popular vacations in 2022",
  },
];

const CategoryTabs = () => {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <div>
      <div className="border-b border-gray-300 flex items-center gap-4 whitespace-nowrap overflow-x-auto">
        <button
          role="tab"
          className={`px-1 py-2 ${
            tabIndex === 1 ? "font-semibold border-b-2 border-blue-500" : ""
          } `}
          onClick={() => setTabIndex(1)}
        >
          Category name
        </button>
        <button
          role="tab"
          className={`px-1 py-2 ${
            tabIndex === 2 ? "font-semibold border-b-2 border-blue-500" : ""
          } `}
          onClick={() => setTabIndex(2)}
        >
          Category name
        </button>
        <button
          role="tab"
          className={`px-1 py-2 ${
            tabIndex === 3 ? "font-semibold border-b-2 border-blue-500" : ""
          } `}
          onClick={() => setTabIndex(3)}
        >
          Category name
        </button>
        <button
          role="tab"
          className={`px-1 py-2 ${
            tabIndex === 4 ? "font-semibold border-b-2 border-blue-500" : ""
          } `}
          onClick={() => setTabIndex(4)}
        >
          Category name
        </button>
        <button
          role="tab"
          className={`px-1 py-2 ${
            tabIndex === 5 ? "font-semibold border-b-2 border-blue-500" : ""
          } `}
          onClick={() => setTabIndex(5)}
        >
          Category name
        </button>
        <button role="tab" className="">
          Category name
        </button>
      </div>
      <div className="flex flex-col xl:flex-row gap-4">
        <div className="grid grid-cols-5 gap-4 mt-6 p-4 border border-gray-300">
          <div className="col-span-full lg:col-span-3">
            <div className="h-[140px] max-h-full">
              <img
                className=" object-cover w-full h-full"
                src={sideMain}
                alt="main"
              />
            </div>
            <div className="mt-4">
              <p className="text-gray-500 text-sm mb-2">1 Month Ago</p>
              <h3 className="text-xl font-bold">
                Tick one more destination off of your bucket list with one of
                our most popular vacations in 2022
              </h3>
              <p className="my-4 text-gray-500">
                lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas
                eleifend sed ex. Donec quis magna sed felis elementum blandit
                nec quis sem. Maecen.
              </p>
              <Link
                className="border-b border-spacing-3 border-neutral-500 hover:text-neutral-500 outline-offset-4 transition-transform"
                to="/"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="col-span-full lg:col-span-2">
            <div className="grid gap-4">
              {sideList.map((item, index) => (
                <div className="flex items-center gap-2">
                  <div className="aspect-video h-20">
                    <img
                      className="object-cover w-full h-full"
                      src={item.img}
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.sideTitle}</h3>
                    <p className="text-gray-500 text-sm">21 March 2021</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" mt-6 p-4 border border-gray-300">
          <h3 className="font-semibold">Manga reads</h3>
          <div className="grid gap-4">
            {mangaList.map((item, index) => (
              <div className="flex items-center gap-2">
                <div className="aspect-video h-26">
                  <img
                    className="object-cover w-full h-full"
                    src={item.img}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[15px]">
                    {item.sideTitle}
                  </h3>
                  <p className="text-gray-500">21 March 2021</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;
