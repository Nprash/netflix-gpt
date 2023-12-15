import React from "react";

const Videotitle = ({ title, overview }) => {
  return (
    <div className=" absolute w-screen aspect-video box-border  text-white bg-gradient-to-r from-black">
      <div className="top-[30%] absolute px-14 ">
        <h1 className="text-4xl w-fit font-bold">{title}</h1>
        <p className="w-1/2 py-6 text-md">{overview}</p>
        <div className="flex justify-start items-center gap-4 w-fit">
          <button className="py-3 px-5 flex rounded-md bg-white bg-opacity-70 hover:bg-opacity-90 text-black ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
              />
            </svg>
            <span className="pl-2">Play</span>
          </button>
          <button className="py-3 px-3 flex rounded-md bg-white bg-opacity-20 text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
            <span className="pl-2">More info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Videotitle;
