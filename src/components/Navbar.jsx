import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const onHandleClick = () => {
    setShowMenu(false);
  }

  return (
    <div>
      <nav className="h-[100px] w-full bg-[#1e293b] text-white flex items-center justify-between px-6">
        <span className="text-4xl font-extrabold tracking-wide">Portfolio</span>

        <ul className="hidden md:flex gap-10 text-lg font-semibold">
          <li><Link to="/" className="hover:text-[#60a5fa] transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-[#60a5fa] transition">About</Link></li>
          <li><Link to="/skills" className="hover:text-[#60a5fa] transition">Skills</Link></li>
          <li><Link to="/experience" className="hover:text-[#60a5fa] transition">Experience</Link></li>
          <li><Link to="/projects" className="hover:text-[#60a5fa] transition">Projects</Link></li>
        </ul>

        <button
          className="h-12 w-12 bg-white text-[#1e293b] md:hidden rounded-md shadow-md hover:bg-[#60a5fa] hover:text-white transition"
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </nav>

      {showMenu && (
        <ul className="mx-4 mt-4 mb-8 w-auto py-6 gap-6 flex flex-col text-lg font-semibold items-center justify-center bg-[#334155] text-white rounded-md shadow-lg md:hidden">
          <li><Link to="/" className="hover:text-[#93c5fd] transition" onClick={onHandleClick}>Home</Link></li>
          <li><Link to="/about" className="hover:text-[#93c5fd] transition" onClick={onHandleClick}>About</Link></li>
          <li><Link to="/skills" className="hover:text-[#93c5fd] transition" onClick={onHandleClick}>Skills</Link></li>
          <li><Link to="/experience" className="hover:text-[#93c5fd] transition" onClick={onHandleClick}>Experience</Link></li>
          <li><Link to="/projects" className="hover:text-[#93c5fd] transition" onClick={onHandleClick}>Projects</Link></li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
