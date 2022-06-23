import React from "react";
import {
  fetchData,
  exerciseOptions,
  videoOptions,
} from "../../utils/fetchdata";
import Detail from "../../components/Detail";
import Videos from "../../components/Videos";
import SimilarExercises from "../../components/SimilarExercises";

const Exercise = ({
  exerciseData,
  videosData,
  targetExerciseData,
  equipmentExerciseData,
}) => {
  return (
    <div>
      <Detail exercise={exerciseData} />

      <Videos videos={videosData} name={exerciseData.name} />

      <SimilarExercises
        targetMuscleExercises={targetExerciseData}
        equipmentExercises={equipmentExerciseData}
      />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const exerciseData = await fetchData(
    `https://exercisedb.p.rapidapi.com/exercises/exercise/${context.query.id}`,
    exerciseOptions
  );

  const videosData = await fetchData(
    `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseData.name}`,
    videoOptions
  );

  const targetExerciseData = await fetchData(
    `https://exercisedb.p.rapidapi.com/exercises/target/${exerciseData.target}`,
    exerciseOptions
  );

  const equipmentExerciseData = await fetchData(
    `https://exercisedb.p.rapidapi.com/exercises/equipment/${exerciseData.equipment}`,
    exerciseOptions
  );

  return {
    props: {
      exerciseData,
      videosData,
      targetExerciseData,
      equipmentExerciseData,
    },
  };
};

export default Exercise;
