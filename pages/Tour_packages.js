import React, { useState } from "react";
import Image from "next/image";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Tour_packages = () => {
  const [btnLoader, setBtnLoader] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const MySwal = withReactContent(Swal);

  const handleClick = async (email,price,serviceType) => {
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
            body: JSON.stringify({ email,price,serviceType }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await res.json();
          toast.success("Congratulations! Your booking is confirmed!");
        } else {
          toast.error("Your payment is not authorized");
        }
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    setBtnLoader(false);
  };

  const showPayment = async (price,serviceType) => {
    const { value: email } = await Swal.fire({
      showCloseButton: true,
      confirmButtonText: "Pay",
      input: "email",
      inputPlaceholder: "Enter your email address",
      footer:
        '<p><input type="checkbox" id="check"> I agree with <a href="/Profile.pdf">terms and conditions</a></input></p>',
      preConfirm: () => {
        if (!document.getElementById("check").checked) {
          Swal.showValidationMessage("Please accept the terms and conditions");
        }
      },
    });
    if (email) {
      handleClick(email,price,serviceType);
    }
  };
  return (
    <div>
      <div className="bg-cover w-full h-96  bg-[url('/tours/homeBg.png')]">
        <div className="bg-[rgba(0,0,0,0.5)] w-full h-96">
          <h1 className="text-4xl md:text-5xl px-5 max-w-screen-xl m-auto  text-white text-center py-24">
            Uncover the Treasures of Amritsar: Enchanting Tour Packages for
            Unforgettable Experiences!
          </h1>
        </div>
      </div>
      <div className="max-w-screen-xl m-auto">
        <div className="grid  md:grid-cols-2 grid-cols-1 gap-10 md:gap-0 my-10 md:mt-10 md:my-0 mx-3 lg:mx-10 ">
          <div className="bg-gray-200 ">
            <h1 className="text-center font-medium text-2xl pb-6 pt-8">
              Amritsar One Day Tour
            </h1>
            <p className="lg:px-8 px-4 ">
              Join us on an immersive one-day tour with Cabs in Amritsar as we
              take you through the enchanting city of Amritsar. Our slow-paced
              guided walking tour allows you to explore the famous alleys and
              bylanes, experience the serenity of the revered Golden Temple,
              delve into the glorious past of Amritsar, and witness the
              patriotic flag-lowering ceremony at the Attari-Wagah border. This
              exclusive tour combines our Golden Temple Walking Tour, Wagah
              Border Tour, and Heritage Walking Tour, offering you a day filled
              with blissful moments and fascinating stories. Come and be a part
              of this unforgettable journey as we unveil the essence of the Holy
              City through its spirituality, history, and culture.
            </p>
            <div className="flex items-center pb-8 justify-center">
              <button
                onClick={() => {
                  showPayment(1000, "Amritsar One Day tour");
                  setSelectedTour(1);
                }}
                className="text-xl font-medium mt-5  w-3/4 border-2 border-sky-600 rounded-full text-center py-1.5 overflow-hidden group bg-sky-600 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                {btnLoader == true && selectedTour === 1 ? (
                  <ClipLoader className="mt-1" color="white" size={25} />
                ) : (
                  "Book now Rs.1000"
                )}
              </button>
            </div>
          </div>
          <div className="flex md:m-8 justify-center items-center">
            <Image
              alt="image"
              className="h-80  border-4 p-2 border-sky-600"
              width={1000}
              height={100}
              src="/tours/one_day_tour.png"
            ></Image>
          </div>
        </div>
        <div className="grid  md:grid-cols-2 grid-cols-1  gap-10 md:gap-0 my-10  md:my-0 mx-3 lg:mx-10 ">
          <div className="bg-gray-200">
            <h1 className="text-center font-medium text-2xl pb-6 pt-8">
              Amritsar Village Tour
            </h1>
            <p className="lg:px-8 px-4">
              Visit a nearby Amritsar hamlet along the India-Pakistan border to
              truly see what a typical Punjabi lifestyle is like nowadays. This
              rural trip, which is both inspirational and educational, provides
              a great opportunity to see the simple way of life and the
              friendliness of the locals, opening up a whole new way of looking
              at Punjab.The early start of our town tour allows us to ride to a
              nearby farm and take in the stunning dawn over the fields. All
              ages of tourists might enjoy this leisurely excursion. With the
              guidance of our guides and the helpful villagers, the activities
              selected are extremely easy for children to do.
            </p>
            <div className="flex items-center pb-8  justify-center">
              <button
                onClick={() => {
                  showPayment(1200,"Amritsar Village Tour");
                  setSelectedTour(2);
                }}
                className="text-xl font-medium mt-5  w-3/4 border-2 border-sky-600 rounded-full text-center py-1.5 overflow-hidden group bg-sky-600 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                {btnLoader == true && selectedTour === 2 ? (
                  <ClipLoader className="mt-1" color="white" size={25} />
                ) : (
                  "Book now Rs.1200"
                )}
              </button>
            </div>
          </div>
          <div className=" flex md:m-8 justify-center items-center  md:order-first">
            <Image
              alt="image"
              className="h-80  border-4 p-2 border-sky-600"
              width={1000}
              height={100}
              src="/tours/village_tour.png"
            ></Image>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:gap-0 my-10 md:mb-10 md:my-0 mx-3 lg:mx-10 ">
          <div className="bg-gray-200">
            <h1 className="text-center font-medium text-2xl pb-6 pt-8">
              Amritsar Street Food Tour
            </h1>
            <p className="lg:px-8 px-4 ">
              This well planned, all-inclusive food walk is more than just a
              typical food tour; it&apos;s a voyage into the heart of Amritsar&apos;s real
              gastronomic neighbourhoods. Eat like a local by choosing the best
              traditional and contemporary street cuisine from dhabas and street
              sellers that have been providing food for the community for many
              years but are hidden off the usual tourist trail. Ensure that your
              stomach and memory card are both empty so that the wonderful meal
              may fill both.
            </p>
            <div className="flex items-center pb-8 justify-center">
              <button
                onClick={() => {
                  showPayment(1800,"Amritsar Street Food Tour");
                  setSelectedTour(3);
                }}
                className="text-xl font-medium mt-5  w-3/4 border-2 border-sky-600 rounded-full text-center py-1.5 overflow-hidden group bg-sky-600 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                {btnLoader == true && selectedTour === 3 ? (
                  <ClipLoader className="mt-1" color="white" size={25} />
                ) : (
                  "Book now Rs.1800"
                )}
              </button>
            </div>
          </div>
          <div className="flex md:m-8 justify-center items-center">
            <Image
              alt="image"
              className="h-80  border-4 p-2 border-sky-600"
              width={1000}
              height={100}
              src="/tours/food_tour.png"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour_packages;
