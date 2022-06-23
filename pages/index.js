import React, { useState } from "react";
import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import Search from "../components/Search";

const Home = () => {
  const [exercises, setExercises] = useState([]);

  return (
    <div>
      <HeroBanner />

      <Search setExercises={setExercises} />

      <Exercises exercises={exercises} setExercises={setExercises} />
    </div>
  );
};

export default Home;
