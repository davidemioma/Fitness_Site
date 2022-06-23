import React from "react";
import Link from "next/link";

const Videos = ({ videos, name }) => {
  return (
    <div className="p-5 mb-10">
      <p className="sm:text-xl md:text-2xl text-[#000] font-semibold mb-8">
        Watch <span className="text-[#FF2625] capitalize">{name}</span> exercise
        video
      </p>

      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-6 items-center justify-center md:justify-start">
        {videos?.contents?.slice(0, 3)?.map((item, i) => (
          <a
            key={i}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <div className="cursor-pointer">
              <img
                className="w-[300px] h-[150px] rounded-tl-3xl mb-5 "
                src={item.video.thumbnails[0].url}
                alt=""
              />

              <div>
                <p className="font-semibold text-lg text-[#000]">
                  {item.video.title}
                </p>

                <p className="text-sm text-[#000]">{item.video.channelName}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Videos;
