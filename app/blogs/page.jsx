import React from 'react'
import Image from 'next/image'
import hero_image from '../../public/hero image.png'
import hero_mobile from '../../public/hero_image_mobile.png'
import Card from '@/components/Card'
import card_image_2 from '../../public/Card 2.png'
import card_image_3 from '../../public/Card 3.png'
import card_image_4 from '../../public/Card 4.png'
import card_image_5 from '../../public/Card 5.png'
import card_image_6 from '../../public/Card 6.png'
import card_image_7 from '../../public/Card 7.png'
import card_image_8 from '../../public/Card 8.png'
import profile_image from '../../public/profile 2.jpeg'
import profile_image_2 from '../../public/download.jpeg'

const page = () => {
  return (
    <>
    <div className='w-full mx-auto flex justify-center items-center flex-col'>
      <h1 className='text-3xl font-bold text-gray-800 mt-10 mb-10'>Your Favorite Blogs are Here.</h1>
      <div className='hidden md:flex'>
        <Image src={hero_image} alt='hero'/>
      </div>
      <div className='md:hidden'>
        <Image src={hero_mobile} className='rounded-md' />
      </div>
    </div>
    <div className=' mx-auto w-3/4 grid grid-col-1 md:grid-cols-3 gap-20 mt-10 mb-10'>
    <Card title='The World most beautifull City' author='John Doe' card_image={card_image_2} profile={profile_image}/>
    <Card title='How Technology Revolving' author='John Doe' card_image={card_image_3} profile={profile_image_2}/>
    <Card title='Your Health is Essential' author='John Doe' card_image={card_image_4} profile={profile_image}/>
    <Card title='India lift the WC-24 Trophy' author='John Doe' card_image={card_image_5} profile={profile_image_2}/>
    <Card title='Pakistan PM Shehbaz Shareef raise voice over Palastine Issue' author='John Doe' card_image={card_image_6} profile={profile_image_2}/>
    <Card title='The World most beautifull City' author='John Doe' card_image={card_image_7} profile={profile_image}/>
    </div>
    </>
  )
}

export default page
