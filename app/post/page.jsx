import React from "react";
import Image from "next/image";
import image from "../../public/Image 1.png";
import image_2 from "../../public/Image 2.png";
import profile from "../../public/download.jpeg";

const page = () => {
  return (
    <div className="w-3/4 mx-auto flex flex-col items-center justify-center ">
      <div className="md:w-3/4 ">
        <h1 className="mt-10 text-4xl font-bold">
          Technology The Impact of Technology on the Workplace: How Technology
          is Changing
        </h1>
        <div className="text-gray-400 flex items-center gap-5 mt-5 mb-5">
          <Image
            src={profile}
            width={50}
            height={50}
            className="rounded-full"
          />
          <p>John Doe</p>
          <p>22 August 2023</p>
        </div>
      </div>
      <div>
        <Image src={image} alt="image" width={700}/>
      </div>
      <p className="md:w-3/4 mt-5">
        Traveling is an enriching experience that opens up new horizons, exposes
        us to different cultures, and creates memories that last a lifetime.
        However, traveling can also be stressful and overwhelming, especially if
        you don't plan and prepare adequately. In this blog article, we'll
        explore tips and tricks for a memorable journey and how to make the most
        of your travels.
        <p className="md:w-3/4 mt-5">
          <span className="font-bold text-xl">Research Your Destination </span>{" "}
          <br />
          Before embarking on your journey, take the time to research your
          destination. This includes understanding the local culture, customs,
          and laws, as well as identifying top attractions, restaurants, and
          accommodations. Doing so will help you navigate your destination with
          confidence and avoid any cultural faux pas. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non
          tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper
          sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing
          vitae. Viverra adipiscing at in tellus.
        </p>
        One of the most rewarding aspects of traveling is immersing yourself in
        the local culture and customs. This includes trying local cuisine,
        attending cultural events and festivals, and interacting with locals.
        Learning a few phrases in the local language can also go a long way in
        making connections and showing respect.
      </p>
      <p className="md:w-3/4 mt-5">
        <span className="font-bold text-xl">Plan Your Itinerary </span> <br />
        While it's essential to leave room for spontaneity and unexpected
        adventures, having a rough itinerary can help you make the most of your
        time and budget. Identify the must-see sights and experiences and
        prioritize them according to your interests and preferences. This will
        help you avoid overscheduling and ensure that you have time to relax and
        enjoy your journey. Vitae sapien pellentesque habitant morbi tristique.
        Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus
        nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit
        amet.
      </p>
      <Image src={image_2} width={700} className="mt-10"/>
      <p className="md:w-3/4 mt-5 mb-10">
        <span className="font-bold text-xl">Pack Lightly and Smartly </span>{" "}
        <br /> Packing can be a daunting task, but with some careful planning
        and smart choices, you can pack light and efficiently. Start by making a
        packing list and sticking to it, focusing on versatile and comfortable
        clothing that can be mixed and matched. Invest in quality luggage and
        packing organizers to maximize space and minimize wrinkles.
      </p>
    </div>
  );
};

export default page;
