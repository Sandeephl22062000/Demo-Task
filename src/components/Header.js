import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { categoriesDetails, navigationList } from "../utils/constants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      const filtered = categoriesDetails.filter((suggestion) =>
        suggestion.category.toLowerCase().includes(value.toLowerCase())
      );
      console.log({ filtered, categoriesDetails });
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion?.title);
    setFilteredSuggestions([]);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setFilteredSuggestions([]);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white p-4 shadow-lg z-10 flex items-center justify-between">
      <div className="flex-none">
        <h1
          className="text-xl sm:text-2xl font-bold cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Demo
        </h1>
      </div>

      <div
        className="flex-grow mx-4 max-w-xs relative sm:max-w-md"
        ref={dropdownRef}
      >
        <input
          name="search"
          type="text"
          id="search"
          placeholder="Search for Category"
          autoComplete="off"
          className="w-full p-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:bg-gray-600 sm:text-base text-sm"
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
        {filteredSuggestions.length > 0 && (
          <ul className="absolute left-0 right-0 bg-gray-600 mt-1 rounded shadow-lg z-20">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion?.category}
              </li>
            ))}
          </ul>
        )}
      </div>

      <nav className="hidden sm:flex flex-none space-x-4">
        <ol className="flex space-x-4">
          {navigationList.map((item) => (
            <li key={item.label}>
              <a href={item.link} className="hover:underline">
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <button className="sm:hidden text-2xl" onClick={toggleMenu}>
        {isMenuOpen ? "✖" : "☰"}
      </button>

      <div
        className={`sm:hidden fixed top-0 right-0 w-3/4 bg-black text-white p-4 h-full transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <button
          className="text-2xl absolute top-4 right-4"
          onClick={toggleMenu}
        >
          ✖
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
          </ol>
        </nav>
      </div>
    </header>
  );
};

export default Header;
