import React from "react";
import BodyPart from "./BodyPart";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../utils/fetchdata";

const BodyParts = ({ bodyParts }) => {
  return (
    <div className="w-full bg-white">
      <Carousel infinite responsive={responsive}>
        {bodyParts?.map((item, i) => (
          <BodyPart key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default BodyParts;
