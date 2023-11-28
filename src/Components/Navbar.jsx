import React, { useState } from "react";
import logo from "../Assets/openai-logo.png";
import "../Styles/Navbar.scss";
import "../Styles/NavMediaQueries.scss"
import "../Styles/HomeMediaQueries.scss"
import SmallScreenMenu from "./SmallScreenMenu"
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const HandleMenu = () => {
    const menubtn = document.getElementById('Menu_btn')
    menubtn.innerHTML = "Close"
    setIsMenuOpen(true);
    if (menubtn.innerHTML === "Close") {
      menubtn.addEventListener('click', () => {
        setIsMenuOpen(false)
      })
    }
  }


  return (
    <div className="nav-container">
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

        <div className="nav-right">
          <ul>
            <li>Search</li>
            <li>Log in <MdOutlineArrowOutward /></li>
            <li className="try-chatgpt-btn">Try ChatGPT <MdOutlineArrowOutward /></li>
          </ul>
        </div>

        <div className="menu_btn">
          <p id="Menu_btn" onClick={HandleMenu}>Menu</p>
        </div>
        {isMenuOpen && <SmallScreenMenu />}
      </nav>
    </div>
  );
};

export default Navbar;
