import Image from "next/image";
import Link from "next/link";
import cardTaxi from "../public/homepageImages/cardTaxi.jpg";
import cab from "../public/homepageImages/cab.jpg";
import cardBike from "../public/homepageImages/cardBike.jpg";
import cardTukTuk from "../public/homepageImages/cardTukTuk.png";
import cardSelfDriving from "../public/homepageImages/cardSelfDriving.jpg";
import tuk from "../public/homepageImages/tuk-tuk.png";
import bike from "../public/homepageImages/bike.png";
import sharedTaxi from "../public/homepageImages/sharedTaxi.jpg";
import moneybag from "../public/icons/moneybag.png";
import hours from "../public/icons/hours.png";
import reputation from "../public/icons/reputation.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Player } from "@lottiefiles/react-lottie-player";
import { toast } from "react-toastify";

import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const imageArray = [cab, sharedTaxi, tuk, bike];
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === imageArray.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);
    return () => clearInterval(intervalId);
  },[currentIndex]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email && name && phone && message) {
        toast.success("Your message has been sent successfully");
        setEmail("");
        setName("");
        setPhone("");
        setMessage("");
        const res = await fetch("/api/sendGrid", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            name: name,
            phone: phone,
            message: message,
          }),
        });
      }
      return await res.json();
    } catch (err) {
      toast.error("Server error, Try again");
    }
  };

  return (
    <>
      <div>
        <div className="lg:flex-row max-w-screen-xl m-auto  flex-col flex items-center justify-center ">
          <div className="text-center pt-16 lg:pt-0  w-full lg:w-1/2 py-0 ">
            <h1 className="text-5xl font-medium px-5 lg:px-0 ">
              We provide the best service in amritsar.
              <br />
              Book a{" "}
              <span>
                <Typewriter
                  words={["cab.", "shared cab.", "tuk tuk.", "rental bike."]}
                  loop={true}
                  cursor
                  typeSpeed={200}
                  deleteSpeed={100}
                  delaySpeed={2000}
                />
              </span>
            </h1>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link
                href="/Taxi_service"
                class="relative inline-block mt-10 text-lg group"
              >
                <span className="relative z-10 block px-1.5 py-0.5 sm:px-5 sm:py-1.5 overflow-hidden font-medium leading-tight text-black transition-colors duration-300 ease-out border-2 border-sky-600 rounded-3xl group-hover:text-white">
                  <span className="absolute inset-0 w-full h-36 sm:h-full px-1.5 py-0.5 sm:px-5 sm:py-1.5 rounded-3xl bg-white"></span>
                  <span className="absolute left-0 w-36 h-36 sm:w-48 sm:h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-sky-600 group-hover:-rotate-180 ease"></span>
                  <span className="relative flex gap-1 ">
                    <Player
                      autoplay
                      loop
                      src="https://assets9.lottiefiles.com/private_files/lf30_8ry7qrbu.json"
                      style={{
                        backgroundColor: "white",
                        height: "40px",
                        width: "40px",
                        borderRadius: "50%",
                      }}
                    ></Player>
                    <span className="m-auto">Book now</span>
                  </span>
                </span>
                <span class="absolute bottom-0 right-0 sm:h-[52px] sm:-mb-1 sm:-mr-1 w-full h-[48px] group-hover:h-[0px] sm:group-hover:h-[52px] -mb-1    -mr-1 transition-all duration-200 ease-linear bg-sky-600 rounded-3xl group-hover:mb-10 sm:group-hover:mb-0 group-hover:mr-0"></span>
              </Link>
              <Link
                href="tel:+918727989814"
                class="relative inline-block mt-10  text-lg group"
              >
                <span className="relative z-10 block px-1.5 py-0.5 sm:px-5 sm:py-1.5 overflow-hidden font-medium leading-tight text-black transition-colors duration-300 ease-out border-2 border-sky-600 rounded-3xl group-hover:text-white">
                  <span className="absolute inset-0 w-full h-36 sm:h-full px-1.5 py-0.5 sm:px-5 sm:py-1.5 rounded-3xl bg-white"></span>
                  <span className="absolute left-0 w-36 h-36 sm:w-48 sm:h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-sky-600 group-hover:-rotate-180 ease"></span>
                  <span className="relative flex gap-1 ">
                    <Player
                      autoplay
                      loop
                      src="https://assets8.lottiefiles.com/private_files/lf30_ad0z9wuy.json"
                      style={{
                        backgroundColor: "white",
                        height: "40px",
                        width: "40px",
                        borderRadius: "50%",
                      }}
                    ></Player>
                    <span className="m-auto">Call now</span>
                  </span>
                </span>
                <span class="absolute bottom-0 right-0 sm:h-[52px] sm:-mb-1 sm:-mr-1 w-full h-[48px] group-hover:h-[0px] sm:group-hover:h-[52px] -mb-1    -mr-1 transition-all duration-200 ease-linear bg-sky-600 rounded-3xl group-hover:mb-10 sm:group-hover:mb-0 group-hover:mr-0"></span>
              </Link>
            </div>
          </div>
          <div className="  lg:mt-10  ">
            <Image
             alt="home background image"
              width={600}
              height={700}
              className="w-[600px] h-[400px]   lg:float-right "
              src={imageArray[currentIndex]}
            ></Image>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl  m-auto">
        <h1 className="text-center  text-sky-600 font-medium text-5xl mb-16 decoration-black underline-offset-8 underline ">
          Our services
        </h1>
        <div className="grid text-lg xl:text-xl w-full lg:grid-cols-3 m-auto  sm:grid-cols-2 gap-6 px-6 ">
          <div className=" rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]   border-2 border-sky-100">
            <Image
             alt="card taxi"
              className="object-fill w-full  p-2 h-64 rounded-2xl"
              src={cardTaxi}
            ></Image>
            <div className="flex  flex-col m-4 -mt-2 gap-2 ">
              <h1 className="text-slate-600 text-3xl font-medium  text-center  ">
                Taxi service
              </h1>
              <p>
              Our taxi booking service is designed to provide you with a hassle-free and reliable transportation solution. Whether you need to get to the airport, travel to a business meeting, or explore the city&apos;s attractions, our fleet of well-maintained vehicles and professional drivers are at your service. Enjoy a comfortable ride and arrive at your destination with ease.
              </p>
              <Link
                href="/Taxi_service"
                className="text-xl font-medium rounded-full text-center py-2.5 overflow-hidden group bg-sky-600 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-500 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                Book now
              </Link>
            </div>
          </div>
          <div className="rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]   border-2 border-sky-100">
            <Image
             alt="card tuk"
              className="object-fill  max-w-full  p-2 h-64 rounded-2xl"
              src={cardTukTuk}
            ></Image>
            <div className="flex  flex-col m-4 -mt-2 gap-2 ">
              <h1 className="text-slate-600 text-3xl font-medium  text-center  ">
                Rent a Tuk Tuk
              </h1>
              <p>
              Our rent tuk-tuk service is the ideal choice for budget-conscious travelers. These traditional three-wheeled vehicles provide a unique and fun way to navigate through the city&apos;s bustling streets while being easy on the wallet. Rent a tuk-tuk and embark on an unforgettable journey, experiencing Amritsar&apos;s sights and sounds without breaking the bank.
              </p>
              <Link
                href="/Taxi_service#tuk-tuk"
                className="text-xl font-medium rounded-full text-center py-2.5 overflow-hidden group bg-sky-600 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-500 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                Book now
              </Link>
            </div>
          </div>
          <div className="rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]   border-2 border-sky-100">
            <Image
            alt="card bike"
              className="object-fill w-full  p-2 h-64 rounded-2xl"
              src={cardBike}
            ></Image>
            <div className="flex  flex-col m-4 -mt-2 gap-2 ">
              <h1 className="text-slate-600 text-3xl font-medium  text-center  ">
                Rent a bike
              </h1>
              <p>
              If you&apos;re a fan of two-wheeled exploration, our rent bike service is perfect for you. Discover Amritsar&apos;s hidden gems, soak in the local atmosphere, and breeze through the city streets on our well-maintained bicycles. Whether you&apos;re traveling solo or with a group, our bikes are a convenient and eco-friendly way to get around and discover the city&apos;s wonders.
              </p>
              <Link
                href="/Taxi_service#Bikes"
                className="text-xl font-medium rounded-full text-center py-2.5 overflow-hidden group bg-sky-600 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-500 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                Book now
              </Link>
            </div>
          </div>
          <div className="rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]   border-2 border-sky-100">
            <Image
            alt="card bike"
              className="object-fill w-full  p-2 h-64 rounded-2xl"
              src={cardSelfDriving}
            ></Image>
            <div className="flex  flex-col m-4 -mt-2 gap-2 ">
              <h1 className="text-slate-600 text-3xl font-medium  text-center  ">
                Self Driving Cars
              </h1>
              <p>
              For those who prefer to be in control of their own journey, our self-driving cars are the perfect choice. We offer a diverse range of vehicles, from compact cars to spacious SUVs, all equipped with modern amenities to ensure a comfortable and enjoyable ride. Experience the freedom of exploring Amritsar at your own pace and convenience.
              </p>
              <Link
                href="/Taxi_service#self_driving_cars"
                className="text-xl font-medium rounded-full text-center py-2.5 overflow-hidden group bg-sky-600 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-500 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                Book now
              </Link>
            </div>
          </div>
          <div className=" rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  border-2 border-sky-100">
            <Image
            alt="card taxi"
              className="object-fill w-full  p-2 h-64 rounded-2xl"
              src={cardTaxi}
            ></Image>
            <div className="flex  flex-col m-4 -mt-2 gap-2 ">
              <h1 className="text-slate-600 text-3xl font-medium  text-center  ">
                Tour Packages
              </h1>
              <p>
              We offer thoughtfully curated tour packages that showcase the city&apos;s rich heritage, cultural landmarks, and must-visit attractions. Our experienced guides will take you on a journey through the iconic Golden Temple, the historic Jallianwala Bagh, and other significant sites, providing insightful commentary and ensuring you have an enriching and memorable experience.
              </p>
              <Link
                href="/Tours"
                className="text-xl font-medium rounded-full text-center py-2.5 overflow-hidden group bg-sky-600 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-500 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                Book now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-300 ">
        <h1 className="text-center text-5xl decoration-white underline-offset-8 underline font-medium text-sky-600  mt-16 py-12">
          Why choose us
        </h1>
        <div className="text-lg xl:text-xl max-w-screen-xl grid w-full lg:grid-cols-4 m-auto  pb-10  sm:grid-cols-2 gap-6 px-6 ">
          <div className="border-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex items-center flex-col border-sky-600  p-4">
            <Image
             alt="icon"
              className="rounded-full"
              src={moneybag}
              width={80}
              height={80}
            ></Image>
            <h1 className="text-2xl font-medium text-sky-600 py-1.5">
              Cost effective
            </h1>
            <p>
            We offer cost-effective solutions that fit your budget without compromising on quality. Our transparent pricing ensures that you receive exceptional value for your money.
            </p>
          </div>
          <div className="border-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex items-center flex-col border-sky-600  p-4">
            <Image
            alt="icon"
              className="rounded-full"
              src={hours}
              width={80}
              height={80}
            ></Image>
            <h1 className="text-2xl  font-medium text-sky-600  py-1.5">
              Timely Service
            </h1>
            <p>
            We value your time and understand the importance of punctuality. Our team is committed to providing timely service, ensuring that you reach your destination without any delays.
            </p>
          </div>
          <div className="border-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex items-center flex-col border-sky-600  p-4">
            <Image
            alt="icon"
              className="rounded-full"
              src={reputation}
              width={80}
              height={80}
            ></Image>
            <h1 className="text-2xl  font-medium text-sky-600  py-1.5">
              Happy customers
            </h1>
            <p>
            Our customers satisfaction is our top priority, and we take pride in delivering exceptional experiences. With a track record of happy customers, we consistently receive positive feedback for our services.
            </p>
          </div>
          <div className="border-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex items-center flex-col border-sky-600  p-4">
            <Image
             alt="icon"
              className="rounded-full"
              src="/icons/experience.png"
              width={80}
              height={80}
            ></Image>
            <h1 className="text-2xl  font-medium text-sky-600  py-1.5">
            Experience and Expertise
            </h1>
            <p>
            With years of experience in the industry, we have honed our expertise to provide you with top-notch transportation and tour services.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-sky-600 ">
        <h1 className="text-center decoration-white underline-offset-8 underline text-stone-300  font-medium text-5xl pt-12 mt-12">
          Our customers
        </h1>
        <Carousel
          className="max-w-screen-xl m-auto"
          autoPlay={true}
          showStatus={false}
          showArrows={false}
          infiniteLoop={true}
          interval={2500}
          showThumbs={false}
        >
          <div className="md:p-14 p-5 border-2 relative mx-4  md:mx-44 my-16 border-white  text-white ">
            <span className="absolute -top-1 -left-4  w-32 text-left text-7xl text-white bg-sky-600  ">
              ❝
            </span>
            <p className="text-xl z-30 relative">
            Renting a tuk-tuk from them was the best decision. It was not only cost-effective but also a fun way to explore Amritsar. Loved every moment of it!
            </p>
            <h1 className="md:pt-8 pt-5 z-50 relative text-gray-300 text-3xl">
              Sandeep Sharma
            </h1>
            <span className=" absolute -bottom-1 -right-4 w-32 pt-6 text-right text-7xl text-white bg-sky-600 ">
              ❞
            </span>
          </div>
          <div className="md:p-14 p-5 border-2 relative mx-4  md:mx-44 my-16 border-white  text-white ">
            <span className="absolute -top-1 -left-4  w-32 text-left text-7xl text-white bg-sky-600  ">
              ❝
            </span>
            <p className="text-xl z-30 relative">
            I had a fantastic experience with their self-driving cars. The vehicle was clean and comfortable, and the rental process was smooth. Will definitely rent from them again!
            </p>
            <h1 className="md:pt-8 pt-5 z-50 relative text-gray-300 text-3xl">
              John 
            </h1>
            <span className=" absolute -bottom-1 -right-4 w-32 pt-6 text-right text-7xl text-white bg-sky-600 ">
              ❞
            </span>
          </div>
          <div className="md:p-14 p-5 border-2 relative mx-4  md:mx-44 my-16 border-white  text-white ">
            <span className="absolute -top-1 -left-4  w-32 text-left text-7xl text-white bg-sky-600  ">
              ❝
            </span>
            <p className="text-xl z-30 relative">
            I rented a bike for a day, and it was a great way to discover Amritsar. The bike was in excellent condition, and the staff was helpful and friendly. Highly recommended for bike enthusiasts!
            </p>
            <h1 className="md:pt-8 pt-5 z-50 relative text-gray-300  text-3xl">
              Jaswinder Singh
            </h1>
            <span className=" absolute -bottom-1 -right-4 w-32 pt-6 text-right text-7xl text-white bg-sky-600 ">
              ❞
            </span>
          </div>
        </Carousel>
      </div>
      <div className="max-w-screen-xl m-auto">
        <h1 className="text-5xl decoration-sky-600 underline-offset-8 underline  text-center font-medium  mt-14">
          Send Enquiry
        </h1>
        <form
          onSubmit={handleSubmit}
          className="h-fit shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] min-w-fit mt-8 rounded-3xl mx-4  sm:mx-32 md:40 lg:mx-56 p-3 md:p-10 mb-16 border-2 border-gray-200"
        >
          <div className="flex gap-2">
            <Player
              autoplay
              loop
              src="https://assets9.lottiefiles.com/packages/lf20_u25cckyh.json"
              style={{
                backgroundColor: "white",
                height: "70px",
                width: "70px",
                borderRadius: "50%",
              }}
            ></Player>
            <div className="relative z-0 w-full mb-6 group">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="floating_email"
                className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-600 peer"
                placeholder=" "
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />

              <label
                for="floating_email"
                className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-600 peer-focus:dark:text-sky-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
          </div>
          <div className="flex gap-2">
            <Player
              autoplay
              loop
              src="https://assets2.lottiefiles.com/packages/lf20_Fuxw3k.json"
              style={{
                backgroundColor: "white",
                height: "70px",
                width: "70px",
                borderRadius: "50%",
              }}
            ></Player>
            <div class="relative z-0 w-full mb-6 group">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="floating_first_name"
                class="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_first_name"
                class="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-600 peer-focus:dark:text-sky-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
          </div>
          <div className="flex gap-2">
            <Player
              autoplay
              loop
              src="https://assets3.lottiefiles.com/private_files/lf30_1ezswqfp.json"
              style={{
                backgroundColor: "white",
                height: "70px",
                width: "70px",
                borderRadius: "50%",
              }}
            ></Player>
            <div className="relative z-0 w-full mb-6 group">
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                name="telephone"
                className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-600 peer"
                placeholder=" "
                required
                pattern="^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$"
              />
              <label
                for="floating_phone"
                className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-600 peer-focus:dark:text-sky-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number
              </label>
            </div>
          </div>
          <div className="w-full pl-0 sm:pl-[80px] ">
            <textarea
              required
              placeholder="Write us message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full outline-sky-600 hover:outline-offset-2 h-32 p-2  text-xl border-2 "
            ></textarea>
          </div>
          <div className="flex  pt-10 justify-center">
            <button className="text-xl font-medium w-3/4 border-2 border-sky-600 rounded-full text-center py-1.5 overflow-hidden group bg-sky-600 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
              <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
