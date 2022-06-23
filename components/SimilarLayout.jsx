import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ExerciseCard from "./ExerciseCard";

const SimilarLayout = ({ text, data }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1536 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1536, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <p className="capitalize text-2xl font-semibold text-[#000] mb-9">
        Similar <span className="text-[#FF2625]">{text}</span> exercise
      </p>

      <div className="w-full mb-5">
        <Carousel infinite responsive={responsive}>
          {data?.map((exercise, i) => (
            <ExerciseCard key={i} exercise={exercise} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SimilarLayout;
