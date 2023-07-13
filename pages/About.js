import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div>
        <div className="lg:flex-row max-w-screen-xl m-auto  flex-col flex items-center justify-center ">
          <div className="text-center pt-16 lg:pt-0  w-full lg:w-1/2 py-0 ">
            <h1 className="text-3xl md:text-5xl font-medium px-5  ">
              We have the best team in Amritsar which includes skilled drivers
              and tour guides.
            </h1>
          </div>
          <div className="  lg:mt-10  ">
            <Image
              alt="team image"
              width={600}
              height={700}
              className="w-[600px] h-[400px]   lg:float-right "
              src="/about/team.jpg"
            ></Image>
          </div>
        </div>
        <div className="max-w-screen-xl m-auto">
          <div className="grid  md:grid-cols-2 grid-cols-1 gap-10 md:gap-0 my-10 md:mt-10 md:my-0 mx-3 lg:mx-10 ">
            <div className="bg-gray-200 ">
              <h1 className="text-center font-medium text-2xl  pt-6">
                Skilled Drivers
              </h1>
              <p className="lg:p-8 p-4 ">
                Our skilled drivers in Amritsar are the heart of our cab
                service, ensuring a safe and comfortable journey for every
                passenger. With their expertise and knowledge of the city&apos;s
                roads, they navigate through the bustling streets with ease,
                taking you to your destination efficiently. Our drivers are
                experienced professionals who prioritize your safety and make
                customer satisfaction their top priority. They undergo rigorous
                training to provide exceptional service, including defensive
                driving techniques and excellent customer care skills. Their
                friendly and courteous demeanor adds to the overall positive
                experience of traveling in our cabs. Rest assured that when you
                choose our cab service in Amritsar, you are in the hands of
                capable drivers who will make your journey smooth, enjoyable,
                and memorable.
              </p>
            </div>
            <div className="flex md:m-8 justify-center items-center">
              <Image
                alt="driver image"
                className="h-80  border-4 p-2 border-sky-600"
                width={1000}
                height={100}
                src="/about/driver.png"
              ></Image>
            </div>
          </div>
          <div className="grid  md:grid-cols-2 grid-cols-1  gap-10 md:gap-0 my-10 md:mb-10  md:my-0 mx-3 lg:mx-10 ">
            <div className="bg-gray-200">
              <h1 className="text-center font-medium text-2xl  pt-6">
                Tour Guides
              </h1>
              <p className="lg:p-8 p-4">
                Our tour guides in Amritsar are passionate individuals who bring
                the city&apos;s rich history, culture, and heritage to life. With
                their in-depth knowledge and captivating storytelling skills,
                they transform your journey into an immersive experience. Our
                tour guides are well-versed in the significant landmarks,
                traditions, and legends of Amritsar, ensuring that every step of
                your exploration is filled with intriguing insights. They go
                beyond the surface, providing historical context, sharing
                fascinating anecdotes, and answering your questions with
                enthusiasm. Their expertise extends to the iconic Golden Temple,
                the historical Jallianwala Bagh, and other notable attractions,
                allowing you to truly understand the significance of each site.
                With their friendly and approachable demeanor, our tour guides
                create a warm and engaging atmosphere, making you feel like a
                welcomed guest in Amritsar.
              </p>
            </div>
            <div className=" flex md:m-8 justify-center items-center  md:order-first">
              <Image
                alt="guide image"
                className="h-80  border-4 p-2 border-sky-600"
                width={1000}
                height={100}
                src="/about/tourGuide.png"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
