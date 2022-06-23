import React from "react";

const HeroBanner = () => {
  return (
    <div className="relative mt-[70px] lg:mt-[200px] ml-4 sm:ml-[50px] p-5">
      <div>
        <h2 className="text-[#ff2625] text-lg sm:text-2xl font-semibold">
          Fitness Club
        </h2>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold my-4">
          Sweat, Smile <br className="hidden lg:inline" /> And Repeat
        </h1>

        <p className="text-sm mb-5 sm:text-base ">
          Check out the most effective exercises.
        </p>

        <button className="bg-[#ff2625] text-white text-sm px-6 py-3 cursor-pointer rounded-3xl hover:border hover:text-[#ff2625] hover:bg-gray-50">
          Explore Exercises
        </button>
      </div>

      <img
        className="hidden lg:inline absolute top-0 right-[40px] mt-[-330px] h-[800px] lg:w-[600px] xl:w-[700px] object-contain z-50"
        src="/assets/images/banner.png"
        alt=""
      />

      <p className="hidden lg:inline text-[#ff2625] opacity-10 text-[200px] font-semibold">
        Exercise
      </p>
    </div>
  );
};

export default HeroBanner;
