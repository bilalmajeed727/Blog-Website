import React from "react";
import Image from "next/image";
import Logo from '../public/Logo.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="w-full h-40 bg-gray-300 flex items-center justify-center ">
        <div className="flex md:justify-between flex-col md:flex-row items-center w-3/4 mt-5">
            <Image src={Logo}/>
            <div className="flex gap-2 items-center">
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Cookies Policy</p>
            </div>
            <div className="flex gap-5 ">
                <FaFacebook size={30} className='cursor-pointer transition-transform transform hover:scale-150'/>
                <FaTwitterSquare size={30} className='cursor-pointer transition-transform transform hover:scale-150'/>
                <FaInstagram size={30} className='cursor-pointer transition-transform transform hover:scale-150'/>
            </div>
        </div>
      {/* <div>
        <h1 className="text-black font-bold">About</h1>
        <p>
          About Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <p>Email:abc@gmail.com</p>
        <p>Phone:+96 234 675392</p>
      </div> */}
    </div>
  );
};

export default Footer;
