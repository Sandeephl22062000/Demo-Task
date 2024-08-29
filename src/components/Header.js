import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { navigationList } from "../utils/constants";
import DownArrow from "../icons/DownArrow";
import DownSlimArrow from "../icons/DownSlimArrow";
import ThreeLines from "../icons/ThreeLines";
import CrossIcon from "../icons/CrossIcon";
import { FaArrowRightLong } from "react-icons/fa6";

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
          className="text-lg sm:text-3xl font-bold cursor-pointer text-purple-600"
          onClick={() => navigate("/")}
        >
          ShopDigest
        </h1>
        <span className="flex justify-center text-lg font-semibold tracking-wider text-gray-700 border-l-2 px-3">
          <p>Shopify</p>
          <span className="flex px-1 items-center cursor-pointer">
            <DownArrow height={8} width={12} transform="rotate(90deg)" />
          </span>
        </span>
      </div>

      <nav className="hidden md-lg:flex flex-none space-x-2 text-lg font-medium">
        <ol className="flex custom-md:space-x-6 xl:space-x-10">
          <li>
            <div
              className="cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              Features
            </div>
          </li>
          <li>
            <div
              className="cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              Market Place
            </div>
          </li>
          <li className="flex items-center space-x-1">
            <div
              className="cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              Company
            </div>
            <div>
              <DownSlimArrow height={16} width={16} />
            </div>
          </li>
          <li>
            <div
              className="cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              Team
            </div>
          </li>
          <li>
            <div
              className="cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              Contact
            </div>
          </li>
        </ol>
      </nav>

      <div className="hidden md-lg:flex flex-none items-center space-x-4">
        <button className="py-2 px-4 text-purple-700 border border-purple-700 rounded-lg hover:bg-purple-50 font-semibold  min-w-[6vw]">
          Login
        </button>
        <button className="py-2 px-4 bg-purple-700 text-white rounded-lg flex justify-center items-center space-x-2 min-w-[9vw] font-semibold">
          Add post
          <div className="pl-3">
            <FaArrowRightLong />
          </div>
        </button>
      </div>

      <button className="md-lg:hidden text-2xl" onClick={toggleMenu}>
        {!isMenuOpen && <ThreeLines height={20} width={20} />}
      </button>

      <div
        className={`md-lg:hidden fixed top-0 right-0 w-3/4 bg-black text-white p-4 h-full transform ${
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
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    toggleMenu();
                    navigate(`${item.link}`);
                  }}
                >
                  {item.label}
                </div>
              </li>
            ))}
            <li>
              <button className="w-full py-2 px-4 text-purple-500 border border-purple-500 rounded-lg hover:bg-purple-50">
                Login
              </button>
            </li>
            <li>
              <button className="w-full py-2 px-4 bg-purple-700 text-white rounded-lg flex items-center justify-center space-x-2 font-semibold">
                Add Post
                <div className="pl-3">
                  <FaArrowRightLong />
                </div>
              </button>
            </li>
          </ol>
        </nav>
      </div>
    </header>
  );
};

export default Header;
