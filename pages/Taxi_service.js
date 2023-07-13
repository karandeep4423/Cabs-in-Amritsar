import React, { useState } from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { bookingCars, selfCars, bikes } from "@/taxi_data";
const Taxi_service = () => {
  const [btnLoader, setBtnLoader] = useState(false);
  const [selectedCar,setSelectedCar] = useState(null);
  const MySwal = withReactContent(Swal);
 

  const handleClick = async (price, email,vehicle,serviceType) => {
    setBtnLoader(true);
    const response = await fetch("/api/razorpay", {
      method: "POST",
      body: JSON.stringify({ amount: price }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    const options = {
      key: process.env.RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: "My Store",
      description: "Payment for order",
      order_id: data.id,
      handler: async function (response) {
        const res = await fetch("/api/paymentverification", {
          method: "POST",
          body: JSON.stringify({ response }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        if (data.success == true) {
          const res = await fetch("/api/confirmationMail", {
            method: "POST",
            body: JSON.stringify({ price, email,vehicle,serviceType}),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await res.json();
          toast.success(
            "Congratulations! Your booking is confirmed!"
          );
        } else {
          toast.error("Your payment is not authorized");
        }
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    setBtnLoader(false);
  };
  
  const showPayment = async (price,vehicle,serviceType) => {
    const { value: email } = await Swal.fire({
      showCloseButton: true,
      confirmButtonText: "Pay",
      input: "email",
      inputPlaceholder: "Enter your email address",
      footer: '<p><input type="checkbox" id="check"> I agree with <a href="/Profile.pdf">terms and conditions</a></input></p>',
      preConfirm: () => {
        if (!document.getElementById('check').checked) {
          Swal.showValidationMessage('Please accept the terms and conditions');
        }
      }
      
    });
    if (email) {
      handleClick(price, email,vehicle,serviceType);
    }
  };
  
  return (
    <div>
      <div className="bg-[url('/taxiServiceImages/bg.png')] w-full  h-screen bg-cover">
        <div className="bg-[rgba(0,0,0,0.5)]   w-full h-screen">
          <div className="flex items-center    w-full h-screen">
            <h1 className="text-4xl md:text-5xl max-w-screen-xl m-auto text-center  px-5  text-white ">
            Experience a Seamless Journey with Our Premier Taxi Service: Where Comfort, Reliability, and Customer Satisfaction Come First.
              <br />
              Book a{" "}
              <span>
                <Typewriter
                  words={["cab.", "shared cab.", "self driving car."]}
                  loop={true}
                  cursor
                  typeSpeed={200}
                  deleteSpeed={200}
                  delaySpeed={2000}
                />
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl m-auto">
        <h1 className="text-center font-medium text-sky-600 text-5xl underline mt-14">
          Book Cab{" "}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-8 mt-8 gap-y-14 p-8 ">
          {bookingCars.map((taxi, index) => {
            return (
              <div
                key={index}
                className="rounded-b-3xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]  hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-sky-600 "
              >
                <Image
                  alt="taxi image"
                  className="h-48 w-full object-cover"
                  src={taxi.image}
                  width={280}
                  height={200}
                ></Image>
                <div className="flex flex-col py-4 justify-center space-y-3 items-center ">
                  <h1 className="text-xl font-medium text-white">
                    {taxi.taxiType}
                  </h1>
                  <p className="text-stone-300">Rs.{taxi.price} per day</p>
                  <button
                    onClick={() => {showPayment(taxi.price,taxi.taxiType,taxi.serviceType); setSelectedCar(taxi.Id)}}
                    className="text-xl  w-3/4 border-2 border-sky-400 rounded-full text-center py-1.5 overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300"
                  >
                    <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    {btnLoader == true && selectedCar === taxi.Id ? (
                      <ClipLoader className="mt-1" color="white" size={25} />
                    ) : (
                      "Book now"
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-sky-700 via-fuchsia-500 to-sky-500 rounded-3xl w-full py-10 my-10 h-fit bg-cover">
        <h1
          id="self_driving_cars"
          className="text-center text-white font-medium text-4xl underline "
        >
          Self driving cars{" "}
        </h1>
        <div className="max-w-screen-xl m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-8  gap-y-14 pt-10 p-8 items-center">
          {selfCars.map((cars, index) => {
            return (
              <div
                key={index}
                className=" rounded-2xl  shadow-[5px_5px_rgba(255,_255,_255,_0.3),_10px_10px_rgba(255,_255,_255,_0.2),_15px_15px_rgba(255,_255,_255,_0.2)] border-[1px] border-white "
              >
                <Image
                  alt="image"
                  className=" h-44 w-full object-cover"
                  src={cars.image}
                  width={300}
                  height={300}
                ></Image>
                <div className="flex flex-col py-4 justify-center space-y-3 items-center ">
                  <h1 className="text-xl font-medium text-white">
                    {cars.carType}
                  </h1>
                  <p className="text-gray-300">Rs.{cars.price} per day</p>
                  <button
                    onClick={() => {showPayment(cars.price,cars.carType,cars.serviceType); setSelectedCar(cars.Id)}}
                    className="text-xl  w-3/4 border-2 border-sky-400 rounded-full text-center py-1.5 overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300"
                  >
                    <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    {btnLoader == true && selectedCar === cars.Id ? (
                      <ClipLoader className="mt-1" color="white" size={25} />
                    ) : (
                      "Book now"
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        id="Bikes"
        className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-sky-600 via-fuchsia-400 to-sky-400 rounded-3xl w-full py-10 my-10 h-fit bg-cover"
      >
        <h1 className="text-center font-medium text-white text-4xl underline ">
          Book Rental Bike or Tuk Tuk{" "}
        </h1>
        <div className="max-w-screen-xl m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-8  gap-y-14 pt-10 p-8 items-center">
          {bikes.map((bike, index) => {
            return (
              <div id="tuk-tuk" key={index} className=" rounded-2xl  shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:border-[1px] hover:border-white ">
                <Image
                  alt="image"
                  className=" h-44 m-auto"
                  src={bike.image}
                  width={300}
                  height={300}
                ></Image>
                <div className="flex flex-col py-4 justify-center space-y-3 items-center ">
                  <h1 className="text-xl font-medium text-white">
                    {bike.bikeType}
                  </h1>
                  <p className="text-gray-300">Rs.{bike.price} per day</p>
                  <button
                    onClick={() => {showPayment(bike.price,bike.bikeType,bike.serviceType); setSelectedCar(bike.Id)}}
                    className="text-xl  w-3/4 border-2 border-sky-400 rounded-full text-center py-1.5 overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300"
                  >
                    <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    {btnLoader == true && selectedCar === bike.Id ? (
                      <ClipLoader className="mt-1" color="white" size={25} />
                    ) : (
                      "Book now"
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Taxi_service;
