import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className=" w-full h-20 p-5  flex items-center justify-between">
      <img
        src="./src/assets/images/logo.png"
        alt="sahaj diet logo"
        className=" w-[50px] h-[50px] rounded-full"
      />
      <div className=" flex items-center justify-space-between">
        <ul className=" list-none flex justify-center items-center">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
