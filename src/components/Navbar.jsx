import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-bgColor py-2 p-4">
      <div className="container mx-auto flex justify-between w-11/12 items-center">
        <div className="flex items-center font-bold text-3xl text-navbarGreen py-2 my-2">
        <img src="/logo.png" className="w-18 h-16"/>
       <span className="text-logoTxt">Quick</span>Finds
       </div>
        <ul className="hidden md:flex space-x-6">
          <li className="pt-2"><a href="#" className=" text-txtNav px-4  font-semibold text-2xl">Home</a></li>
          <li className="pt-2"><a href="#" className=" text-txtNav  px-4 font-semibold text-2xl ">About Us</a></li>
          <li className="pt-2"><a href="#" className=" text-txtNav  px-4 font-semibold text-2xl ">Services</a></li>
          <li className="pt-2"><a href="#" className=" text-txtNav  px-4 font-semibold text-2xl ">Projects</a></li>
           <button className="bg-navbarGreen rounded-xl text-white text-2xl px-6 py-3">Contact Us</button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar