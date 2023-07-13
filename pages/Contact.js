import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { toast } from "react-toastify";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(email&& name&&phone&&message){
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
      await res.json();
      toast.success("Your message has been sent successfully");
      return;

    };
    } catch (err) {
      toast.error("Server error, Try again")
    }
  };

 
  return (
    <div className="max-w-screen-xl m-auto">
      <h1 className="text-4xl text-center font-medium my-10">
        Contact Details
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:m-16 md:m-8 m-5 gap-7 lg:gap-10">
        <div>
          <h1 className="text-4xl text-center sm:text-start font-medium">
            Get in touch
          </h1>
          <h2 className="mt-3 text-center sm:text-start text-xl">
            Take the next step toward your personal and professional goals with
            Redwood Learning.
          </h2>
          <div className="flex flex-col mt-5 gap-5">
            <div className="flex gap-4 flex-col sm:flex-row">
              <Player
                autoplay
                loop
                src="https://assets10.lottiefiles.com/packages/lf20_v3WrCt.json"
                style={{
                  backgroundColor: "white",
                  height: "100px",
                  width: "100px",
                }}
              ></Player>
              <div>
                <h1 className="text-3xl text-center sm:text-start font-medium">
                  Our Address
                </h1>
                <p className="text-xl text-center sm:text-start text-gray-800">
                  Opposite of car washroom, first floor Attari,Amritsar,Punjab
                  143108
                </p>
              </div>
            </div>
            <div className="flex gap-4 flex-col sm:flex-row">
              <Player
                autoplay
                loop
                src="https://assets9.lottiefiles.com/packages/lf20_u25cckyh.json"
                style={{
                  height: "100px",
                  width: "100px",
                }}
              ></Player>
              <div className="m-auto sm:m-0">
                <h1 className="text-3xl text-center sm:text-start font-medium">
                  Email
                </h1>
                <a
                  href="mailto:cabsinamritsar@gmail.com"
                  className="text-xl  break-all font-medium text-sky-700"
                >
                  <span className="text-xl text-gray-700">Mail:</span>{" "}
                  cabsinamritsar@gmail.com
                </a>
              </div>
            </div>
            <div className="flex gap-4 flex-col sm:flex-row">
              <Player
                autoplay
                loop
                src="https://assets3.lottiefiles.com/private_files/lf30_1ezswqfp.json"
                style={{
                  backgroundColor: "white",
                  height: "100px",
                  width: "100px",
                  borderRadius: "50%",
                }}
              ></Player>
              <div className="m-auto sm:m-0">
                <h1 className="text-3xl text-center sm:text-start font-medium">
                  Contact
                </h1>
                <a
                  href="tel:+918727989814"
                  className="text-xl font-medium text-sky-700"
                >
                  <span className="text-gray-700">Phone:</span>+918727989814
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className=" rounded-3xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  p-6 md:p-10  border-2 border-gray-200"
          >
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
                className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-600 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
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
                class="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-600 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
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
                className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-600 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number
              </label>
            </div>
            <div>
              <textarea
                required
                placeholder="Write us message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full outline-sky-600 hover:outline-offset-2 h-32 p-2 text-xl border-2 "
              ></textarea>
            </div>
            <div className="flex pt-10 justify-center">
              <button className="text-xl font-medium w-3/4 border-2 border-sky-600 rounded-full text-center py-1.5 overflow-hidden group bg-sky-600 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
