import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = [{label:"Home"},{label:"About"},{label:"Services"},{label:"Contact"}];
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white p-4 shadow-lg z-10 flex items-center justify-between">
      <h1 className="text-2xl font-bold cursor-pointer" onClick={()=>{navigate("/")}}>Demo Task</h1>
      <nav className="hidden sm:flex">
        <ol className="flex space-x-4">
          {navigation.map((item) => (
            <li key={item.label}>
              <a href={item.label.toLowerCase()} className="hover:underline" >
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <button
        className="sm:hidden text-2xl"
        onClick={toggleMenu}
      >
        {isMenuOpen ? '✖' : '☰'}
      </button>
      <div
        className={`sm:hidden fixed top-0 right-0 w-3/4 bg-black text-white p-4 h-full transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
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
            {navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.label.toLowerCase()}
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
