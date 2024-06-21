import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const links = [
  {
    path: "/",
    text: "DESTINATIONS",
  },
  {
    path: "#",
    text: "FOOD",
  },
  {
    path: "#",
    text: "WELL BEING",
  },
  {
    path: "#",
    text: "SPORT",
  },
  {
    path: "#",
    text: "FAMILY",
  },
  {
    path: "#",
    text: "LIFESTYLE",
  },
];

const Navbar = ({ btnStyle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      <div className="wrapper flex justify-between items-center gap-6 h-16 px-4">
        <div className="logo w-[150px] md:w-72">
          <Link to="/">
            <img
              className="w-full h-full object-contain"
              src={Logo}
              alt="logo"
            />
          </Link>
        </div>

        <ul
          className={`fixed top-0 left-0 h-full w-full bg-white text-black flex flex-col items-center justify-center gap-4 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 xl:static xl:flex-row xl:h-auto xl:w-auto xl:bg-transparent xl:translate-x-0`}
        >
          {links.map((link, i) => (
            <li key={i}>
              <a
                className={`inline-block p-1 text-sm hover:bg-white/20 rounded-sm transition-colors duration-300 hover:backdrop-blur-md  ${
                  isMenuOpen ? "text-black" : "text-white"
                }`}
                href={link.path}
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {link.text}
              </a>
            </li>
          ))}
          <li className="xl:hidden">
            <button className="px-6 py-3 text-white font-bold bg-black hover:bg-slate-900 transition-colors duration-300">
              Get your 120$ christmas gift
            </button>
          </li>
          <button
            className="absolute top-4 right-4 xl:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </ul>

        <div className="hidden xl:flex items-center">
          <button className="hidden xl:inline-block mr-4">
            <svg
              className="inline-block"
              width="32"
              height="32"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.4 31.5L19.95 22.05C19.2 22.65 18.3375 23.125 17.3625 23.475C16.3875 23.825 15.35 24 14.25 24C11.525 24 9.219 23.0565 7.332 21.1695C5.444 19.2815 4.5 16.975 4.5 14.25C4.5 11.525 5.444 9.2185 7.332 7.3305C9.219 5.4435 11.525 4.5 14.25 4.5C16.975 4.5 19.2815 5.4435 21.1695 7.3305C23.0565 9.2185 24 11.525 24 14.25C24 15.35 23.825 16.3875 23.475 17.3625C23.125 18.3375 22.65 19.2 22.05 19.95L31.5 29.4L29.4 31.5ZM14.25 21C16.125 21 17.719 20.344 19.032 19.032C20.344 17.719 21 16.125 21 14.25C21 12.375 20.344 10.781 19.032 9.468C17.719 8.156 16.125 7.5 14.25 7.5C12.375 7.5 10.781 8.156 9.468 9.468C8.156 10.781 7.5 12.375 7.5 14.25C7.5 16.125 8.156 17.719 9.468 19.032C10.781 20.344 12.375 21 14.25 21Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            className={`px-6 py-3  font-bold transition-colors duration-300 ${
              btnStyle
                ? "bg-white hover:bg-slate-100 text-black"
                : "bg-black hover:bg-slate-900 text-white"
            }`}
          >
            Get your 120$ christmas gift
          </button>
        </div>

        <button className="xl:hidden" onClick={() => setIsMenuOpen(true)}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
