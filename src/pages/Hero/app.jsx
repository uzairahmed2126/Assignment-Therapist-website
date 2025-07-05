import React from "react";
import "./style.css";
import hero from "@assets/hero.avif";
const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero}
          alt="Professional workspace"
          className="w-full h-full object-cover custom-img"
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with Expert Guidance
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
            We help ambitious businesses like yours grow faster through
            strategic consulting and tailored solutions.
          </h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg">
            Book a Free Consult
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
