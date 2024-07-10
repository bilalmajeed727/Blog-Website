"use client"; // Not a valid JavaScript statement, assuming it's a comment

import { FaSearch } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Logo from "../public/Logo.png"; // Assuming correct path to your Logo image
import { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
const Navbar = () => {
  
  const pathname = usePathname();  
  const [nav, setNav] = useState(false);

  
  return (
    <div className="w-full h-24 flex items-center p-2 ">
      <div className="flex justify-between items-center w-4/5 max-w-screen-lg mx-auto">
        <div className="w-1/4 sm:w-1/6">
          <Image src={Logo} alt="logo" layout="responsive" />
        </div>
        <ul className="hidden md:flex gap-5 text-xl">
            <Link href="/" className={`${pathname === '/' ? 'border-b-2 border-black' : ''}`}>Home</Link>
            <Link href="/blogs" className={`${pathname === '/blogs' ? 'border-b-2 border-black' : ''}`} >Blogs</Link>
            <Link href="/post" className={`${pathname === '/post' ? 'border-b-2 border-black' : ''}`}>Post</Link>
            <Link href="/contact" className={`${pathname === '/contact' ? 'border-b-2 border-black' : ''}`}>Contact</Link>
        </ul>
        <div className="hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="mr-2 bg-customGray p-2 rounded-md outline-none text-xl focus:ring focus:ring-blue-300 border-2 border-solid border-gray-700 "
          />
          <FaSearch size={20} />
        </div>
        <div className="flex md:hidden">
          <div onClick={() => setNav(!nav)}>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
      </div>
      {/* Collapsible Menu */}
      <div
        className={
          nav
            ? "z-10 fixed h-full left-0 top-0 w-[60%] bg-gray-100 ease-in-out duration-500 py-5"
            : "fixed left-[-100%]"
        }
      >
        <Image src={Logo} width={100} height={36} className="pl-2" />
        <ul className="flex flex-col gap-2 pl-2 mt-10 text-xl">
          <li>
            <Link href="/" className="hover:bg-slate-200" onClick={() => setNav(!nav)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/blogs" onClick={() => setNav(!nav)}>
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/post" onClick={() => setNav(!nav)}>
              Single Post
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setNav(!nav)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
