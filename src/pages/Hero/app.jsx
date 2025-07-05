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
        <div className="max-w-4xl mx-auto custom-div-css">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100 mb-6 leading-tight">
            Psychological Care for Change, Insight, and Well-Being
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Offering individual psychotherapy for adults via telehealth in
            Michigan and most U.S. states through PSYPACT participation
          </h2>
          <button className="bg-blue-300 hover:bg-blue-400 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg btn-consult">
            Book a Free Consult
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
