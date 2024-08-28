import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { navigationList } from "../utils/constants";
import RightArrow from "../icons/RightArrow";
import DownArrow from "../icons/DownArrow";
import DownSlimArrow from "../icons/DownSlimArrow";
import ThreeLines from "../icons/ThreeLines";
import CrossIcon from "../icons/CrossIcon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-black p-4 border-b-2 border-gray-200 z-10 flex items-center justify-between px-[5vw]">
      <div className="flex-none flex items-center space-x-3">
        <h1
          className="text-lg sm:text-2xl font-bold cursor-pointer text-purple-600"
          onClick={() => navigate("/")}
        >
          ShopDigest
        </h1>
        <span className="flex justify-center text-lg text-gray-500 border-l-2  px-3">
          <p>Shopify</p>
          <span className="flex px-1 items-center cursor-pointer">
            <DownArrow height={8} width={12} transform="rotate(90deg)" />
          </span>
        </span>
      </div>

      <nav className="hidden custom-md:flex flex-none space-x-4 text-lg">
        <ol className="flex space-x-10">
          <li>
            <a href="/features" className="hover:underline">
              Features
            </a>
          </li>
          <li>
            <a href="/marketplace" className="hover:underline">
              Market Place
            </a>
          </li>
          <li className="flex items-center space-x-1">
            <a href="/company" className="hover:underline">
              Company
            </a>
            <div>
              <DownSlimArrow height={16} width={16} />
            </div>
          </li>
          <li>
            <a href="/team" className="hover:underline">
              Team
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ol>
      </nav>

      <div className="hidden custom-md:flex flex-none items-center space-x-4">
        <button className="py-2 px-4 text-purple-500 border border-purple-500 rounded-lg hover:bg-purple-50">
          Login
        </button>
        <button className="py-2 px-4 bg-purple-500 text-white rounded-lg flex items-center space-x-2">
          Add Post
          <RightArrow height={20} width={20} />
        </button>
      </div>

      <button className="custom-md:hidden text-2xl" onClick={toggleMenu}>
        {!isMenuOpen && <ThreeLines height={20} width={20} />}
      </button>

      <div
        className={`custom-md:hidden fixed top-0 right-0 w-3/4 bg-black text-white p-4 h-full transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <button
          className="text-2xl absolute top-4 right-4"
          onClick={toggleMenu}
        >
          <CrossIcon height={18} width={18} color={"white"} />
        </button>
        <nav>
          <ol className="flex flex-col space-y-4 mt-16">
            {navigationList.map((item) => (
              <li key={item.label}>
                <a
                  href={item.link}
                  className="hover:underline"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button className="w-full py-2 px-4 text-purple-500 border border-purple-500 rounded-lg hover:bg-purple-50">
                Login
              </button>
            </li>
            <li>
              <button className="w-full py-2 px-4 bg-purple-500 text-white rounded-lg flex items-center justify-center space-x-2">
                Add Post
                <RightArrow height={20} width={20} />
              </button>
            </li>
          </ol>
        </nav>
      </div>
    </header>
  );
};

export default Header;
