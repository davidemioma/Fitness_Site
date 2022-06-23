import React from "react";
import { setBodyPart } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

const BodyPart = ({ item }) => {
  const dispatch = useDispatch();

  const bodyPart = useSelector((state) => state.selected.bodyPart);

  const onClickListener = () => {
    dispatch(setBodyPart(item));

    window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
  };

  return (
    <div
      className={`${
        bodyPart === item && "border-t-[3px] border-[#ff2625]"
      } w-64 h-64 cursor-pointer flex flex-col items-center justify-center space-y-9`}
      onClick={onClickListener}
    >
      <img className="w-10 h-10" src="./assets/icons/gym.png" alt="" />

      <p className="text-[#3a1212] font-semibold  uppercase font-alegreya">
        {item}
      </p>
    </div>
  );
};

export default BodyPart;
