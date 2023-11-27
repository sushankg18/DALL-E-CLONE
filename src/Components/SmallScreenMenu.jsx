import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";


const SmallScreenMenu = () => {
    return (
        <div className='Small_screen_menu_container'>
            <div className='ssmc_top'>
                <div>Research <FaPlus /> </div>
                <div>API <FaPlus /> </div>
                <div>ChatGPT<FaPlus /> </div>
                <div>Safety <FaArrowRight /> </div>
                <div>Company <FaPlus /> </div>
                <div>Log in <MdOutlineArrowOutward /> </div>
                <div>Try ChatGPT <MdOutlineArrowOutward /> </div>
            </div>

            <div className='ssmc_bottom'>
                <div>
                    <input type="text" placeholder="Search for anything" />
                    <IoIosSearch />
                </div>
            </div>
        </div>
    )
}

export default SmallScreenMenu
