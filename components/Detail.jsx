import React from "react";

const Detail = ({ exercise }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exercise;

  const extraDetail = [
    {
      icon: "/assets/icons/body-part.png",
      name: bodyPart,
    },
    {
      icon: "/assets/icons/target.png",
      name: target,
    },
    {
      icon: "/assets/icons/equipment.png",
      name: equipment,
    },
  ];

  return (
    <div className="px-5 flex flex-col space-y-9 items-center md:flex-row md:space-x-12 mt-6 mb-9 mx-auto md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
      <img src={gifUrl} alt={name} loading="lazy" />

      <div>
        <p className="capitalize text-2xl md:text-3xl font-semibold mb-4">
          {name}
        </p>

        <p className="text-[#4F4C4C] text-sm md:text-base mb-4">
          Exercises keep you strong. <span className="capitalize">{name}</span>{" "}
          bup is one of the best <br /> exercises to target your {target}. It
          will help you improve your <br /> mood and gain energy.
        </p>

        <div>
          {extraDetail.map((item) => (
            <div key={item.name} className="flex items-center space-x-3 mb-4">
              <button className="inline-flex items-center justify-center bg-[#FFF2DB] w-[50px] h-[50px] md:h-[100px] md:w-[100px] rounded-[50px]">
                <img
                  className="h-6 w-6 md:w-12 md:h-12"
                  src={item.icon}
                  alt=""
                />
              </button>

              <p className="capitalize text-sm md:text-base">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
