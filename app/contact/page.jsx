import React from 'react'
import Image from 'next/image'
import Profile from '..//..//public/download.jpeg'
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const page = () => {
  return (
    <div className='w-full mx-auto flex flex-col items-center'>
      <Image src={Profile} width={200} height={200} className='rounded-full'/>
      <h1 className='text-4xl font-bold'>John Doe</h1>
      <div className='flex items-center gap-10 mt-5 '>
        <FaFacebook size='30' className='cursor-pointer transition-transform transform hover:scale-150'/>
        <FaTwitterSquare size='30' className='cursor-pointer transition-transform transform hover:scale-150'/>
        <FaInstagram size='40' className='cursor-pointer transition-transform transform hover:scale-150'/>
      </div>
      <p className=' w-3/4 md:w-2/4 mt-5 mb-10 italic'>{`"John Doe is a versatile and imaginative author whose works span multiple genres, captivating readers with his vivid storytelling and compelling characters. He has published a wide array of books, including mystery novels, science fiction sagas, and heartwarming contemporary fiction. His debut novel, "Mysteries of the Mind," quickly garnered critical acclaim for its intricate plot and deep psychological insights."`}</p>
      
    </div>
  )
}

export default page
