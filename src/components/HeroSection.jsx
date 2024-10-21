import React from "react";


const HeroSection = () => {
  return (
    <section className="bg-bgColor py-16 min-h-15 ">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6">
        <div className="md:w-1/2 py-11">
          <h1 className="text-7xl font-bold text-gray-900 mb-4">
            Innovative solutions <br />for a better world!
          </h1>
          <p className="text-2xl text-black mb-8 font-semibold">
            We help businesses like yours earn more customers,<br /> standout from competitors, make more money.
          </p>
          <button className="bg-navbarGreen text-white rounded-2xl  px-8 py-6 text-2xl">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src="/Ladyimage.png" 
            alt="Hero Image"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
