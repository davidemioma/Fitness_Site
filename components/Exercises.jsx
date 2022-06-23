import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchData, exerciseOptions } from "../utils/fetchdata";
import ExerciseCard from "./ExerciseCard";
import { Pagination } from "@mui/material";

const Exercises = ({ exercises, setExercises }) => {
  const bodyPart = useSelector((state) => state.selected.bodyPart);

  const [currentPage, setCurrentPage] = useState(1);

  const [exercisesPerPage] = useState(8);

  const indexOfLastExercise = currentPage * exercisesPerPage;

  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercises = exercises?.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = [];

      if (bodyPart === "all") {
        exerciseData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exerciseData);
    };

    fetchExerciseData();
  }, [bodyPart]);

  return (
    <div id="exercises" className="w-full px-5 mt-12  ">
      {exercises.length > 0 && (
        <h1 className="text-2xl md:text-3xl mb-8">Showing Results...</h1>
      )}

      <div className=" mx-auto lg:w-[900px] grid grid-cols-1 sm:grid-cols-2 gap-10">
        {currentExercises?.map((exercise, i) => (
          <ExerciseCard key={i} exercise={exercise} />
        ))}
      </div>

      <div className="w-full flex justify-center py-6">
        {exercises.length > 8 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </div>
    </div>
  );
};

export default Exercises;
