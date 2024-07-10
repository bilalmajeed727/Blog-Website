import React from 'react'
import Image from 'next/image'

const Card = ({title , author, profile , card_image}) => {
  return (
    <div className='w-80 flex flex-col gap-4 '>
      <Image src={card_image} alt='card image' className='cursor-pointer' />
      <h1 className='text-xl text-blue-400'>Technology</h1>
      <h1 className='text-3xl font-bold cursor-pointer'>{title}</h1>
      <div className='text-gray-400 flex gap-2 items-center'>
        <Image src={profile} width='40' height= '40' alt='pic' className='rounded-full'/>
        <p>{author}</p>
        <p>28 August 2023</p>
      </div>
    </div>
  )
}

export default Card
