import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
         <div className="bg-sky-600 ">
        <div className="-mt-4 max-w-screen-xl m-auto flex flex-wrap space-x-5 px-5 justify-evenly">
          <div className="flex flex-col space-y-4 pt-10 w-64">
            <h1 className="text-white font-medium text-xl border-4 border-white w-fit px-1">
              {" "}
              Cabs in amritsar
            </h1>
            <p className='text-gray-300 font-medium'>
            Book your transportation or tour service with us today and discover the difference of choosing Cabs in Amritsar.
            </p>
          </div>
          <div className="flex flex-col text-gray-300 font-medium space-y-4 pt-10">
            <h1 className="text-xl font-medium text-white">Navigation</h1>
            <Link href="/">Home</Link>
            <Link href="/Taxi_service">Services</Link>
            <Link href="/Tour_packages">Tour Packages</Link>
            <Link href="/About">About</Link>
            <Link href="/Contact">Contact us</Link>
          </div>
          <div className="flex flex-col text-gray-300 font-medium space-y-4 pt-10">
            <h1 className="text-xl font-medium text-white">Services</h1>
            <Link href="/Taxi_service">Taxi Service</Link>
            <Link href="/Tour_packages">Tour Packages</Link>
            <Link href="/Taxi_service#self_driving_cars">Self-Driving car</Link>
            <Link href="/Taxi_service#Bikes">Rent Bike </Link>
            <Link href="/Taxi_service#tuk-tuk">Book tuk tuk</Link>
          </div>
          <div className="flex flex-col text-gray-300 font-medium space-y-4 pt-10">
            <h1 className="text-xl text-white font-medium">Contact us</h1>
            <p>Bachiwind, Amritsar</p>
            <a href="mailto:bachiwind3@gmail.com">bachiwind3@gmail.com</a>
            <a href="tel:+918727989814">+918727989814</a>
          </div>
        </div>
        <p className="text-center text-gray-300 py-6">Copyright ©2023 All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer