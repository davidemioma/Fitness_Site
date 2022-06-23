import React, { useEffect, useState } from "react";
import { fetchData, exerciseOptions } from "../utils/fetchdata";
import { DUMMY_DATA } from "../utils/data";
import BodyParts from "./BodyParts";

const Search = ({ setExercises }) => {
  const [input, setInput] = useState("");

  const [bodyParts, setBodyParts] = useState([]);

  const isTestMode = false;

  useEffect(() => {
    const fetchBodypartsData = async () => {
      const bodypartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodypartsData]);
    };

    fetchBodypartsData();
  }, []);

  const handleSearch = async () => {
    if (!input.trim()) return;

    const exercises =
      !isTestMode &&
      (await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      ));

    const searched = isTestMode
      ? DUMMY_DATA
      : exercises.filter(
          (exercise) =>
            exercise.name.toLowerCase().includes(input) ||
            exercise.target.toLowerCase().includes(input) ||
            exercise.equipment.toLowerCase().includes(input) ||
            exercise.bodyPart.toLowerCase().includes(input)
        );

    setExercises(searched);

    setInput("");
  };

  return (
    <div className="flex flex-col items-center w-full p-5 md:px-10 mt-9">
      <h2 className="text-2xl md:text-3xl text-center font-semibold mb-8">
        Awesome Exercises You <br /> Should Know
      </h2>

      <div className="w-full flex mb-10 lg:mb-16 shadow-md ">
        <input
          className="flex-grow border px-4 py-2 outline-none "
          value={input}
          type="text"
          placeholder="Search Exercises"
          onChange={(e) => setInput(e.target.value.toLowerCase())}
        />

        <button
          className="bg-[#ff2625] text-white px-4 sm:px-6 md:px-8 hover:border hover:text-[#ff2625] hover:bg-gray-50"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <BodyParts bodyParts={bodyParts} />
    </div>
  );
};

export default Search;
