import React from "react";
import logo from "../Assets/openai-logo.png";
import "../Styles/Navbar.scss";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo-with-items">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navbar-items">
            <ul>
              <li>
                Research <IoIosArrowDown />
              </li>
              <li>
                API <IoIosArrowDown />
              </li>
              <li>
                ChatGPT <IoIosArrowDown />
              </li>
              <li>Safety </li>
              <li>
                Company <IoIosArrowDown />
              </li>
            </ul>
          </div>
        </div>

        <div>
          <ul>
            <li>Search</li>
            <li>Log in <MdOutlineArrowOutward /></li>
            <li className="try-chatgpt-btn">Try ChatGPT <MdOutlineArrowOutward /></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
