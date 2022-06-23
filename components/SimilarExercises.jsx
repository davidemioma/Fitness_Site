import React from "react";
import SimilarLayout from "./SimilarLayout";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <div className="p-4">
      <SimilarLayout text="target muscle" data={targetMuscleExercises} />

      <SimilarLayout text="equipment" data={equipmentExercises} />
    </div>
  );
};

export default SimilarExercises;
