import Image from "next/image";
import Hero_image from "../public/Content.png";
import Hero_image_mobile from "../public/Content mobile.png";
import Card from "@/components/Card";
import Card_image from '../public/Rectangle 38.png'
import Profile_image from '../public/download.jpeg'
import card_2 from '../public/Card 2.png'
import card_3 from '../public/Card 3.png'
import card_4 from '../public/Card 4.png'
import card_5 from '../public/Card 5.png'
import card_6 from '../public/Card 6.png'
import card_7 from '../public/Card 7.png'
import card_8 from '../public/Card 8.png'
import card_9 from '../public/Card 9.png'
import profile_2 from '../public/profile 2.jpeg'


export default function Home() {
  return (
    <div>
      <div className="w-full hidden md:flex items-center justify-center">
        <Image src={Hero_image} alt="Hero Image" />
      </div>
      <div className="w-full flex md:hidden items-center justify-center">
        <Image
          src={Hero_image_mobile}
          alt="Hero Image"
          width={450}
          height={170}
        />
      </div>
      <h1 className="text-2xl font-bold md:ml-32 mt-28 ml-16">Latest Post</h1>
      <div className=" grid-cols-1 grid md:grid-cols-3 w-full max-w-screen-lg mx-auto gap-5 md:gap-20 items-center justify-items-center m-10">
        <Card title='The World most beautifull City' author='John Doe' card_image={Card_image} profile={Profile_image}/>
        <Card title='How Technology is Changing' author='Tracey Wilson' card_image={card_2} profile={profile_2}/>
        <Card title='The World is not ready This.' author='John Doe' card_image={card_3} profile={profile_2}/>
        <Card title='The World most beautifull City' author='John Doe' card_image={card_4} profile={Profile_image}/>
        <Card title='How Technology is Changing' author='Tracey Wilson' card_image={card_5} profile={profile_2}/>
        <Card title='The World is not ready This.' author='John Doe' card_image={card_6} profile={Profile_image}/>
        <Card title='The World most beautifull City' author='John Doe' card_image={card_7} profile={profile_2}/>
        <Card title='How Technology is Changing' author='Tracey Wilson' card_image={card_8} profile={profile_2}/>
        <Card title='The World is not ready This.' author='John Doe' card_image={card_9} profile={Profile_image}/>
      </div>
    </div>
  );
}
