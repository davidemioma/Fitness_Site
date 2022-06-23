import React from "react";
import Link from "next/link";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link href={`/exercise/${exercise.id}`}>
      <div className="bg-white cursor-pointer flex flex-col border-t-[4px] border-[#ff2625] lg:w-[400px]">
        <img
          className="h-80"
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
        />

        <div>
          <button className="bg-[#ffa9a9] btn">{exercise.bodyPart}</button>

          <button className="bg-[#FCC757] btn">{exercise.target}</button>
        </div>

        <p className="ml-5 text-[#000] font-semibold capitalize mt-2 pb-3">
          {exercise.name}
        </p>
      </div>
    </Link>
  );
};

export default ExerciseCard;
