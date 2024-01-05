import React from "react";

const Videotitle = ({ title, overview }) => {
  return (
    <div className="absolute w-full aspect-video box-border  text-white bg-gradient-to-r from-black ">
      <div className="lg:top-[35%] md:top-[40%] top-[30%] absolute lg:px-14 lg:mb-4  sm:px-10 px-3 sm:m-0 mb-2">
        <h1 className="lg:text-4xl md:text-2xl sm:text-md text-sm w-fit sm:font-bold font-bold text-white">{title}</h1>
        <p className="lg:w-3/5 md:w-1/2 sm:w-1/2 w-1/2 lg:py-6  sm:py-2 lg:text-lg md:text-md sm:text-sm text-[10px] md:line-clamp-2 lg:line-clamp-2 sm:line-clamp-1 sm:leading-3 h-9 overflow-hidden sm:h-auto md:leading-5 text-white">{overview}</p>
        <div className="flex justify-start items-center gap-4 w-fit">
          <button className="lg:py-2 lg:px-3 md:p-2 sm:p-2 p-1 flex rounded-md bg-white bg-opacity-70 hover:bg-opacity-90 text-black ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="lg:w-6 lg:h-6 md:w-5 md:h-5 w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
              />
            </svg>
            <span className="pl-2 md:text-md sm:text-sm text-xs">Play</span>
          </button>
          <button className="lg:py-2 lg:px-2 md:p-2 sm:p-2 p-1 flex rounded-md bg-white bg-opacity-20 text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="lg:w-6 lg:h-6 md:w-5 md:h-5 w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
            <span className="pl-2 md:text-md sm:text-sm text-xs">More info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Videotitle;
