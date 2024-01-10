import React from "react";
import Typewriter from "typewriter-effect";
import bg2 from "../assets/background.jpg"

function HappyBirthday() {
  return (
    <div className="h-full relative flex justify-center items-center">
    <div className=" z-20 text-white text-center">
      <div className="Happy">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hello world")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Welcome")
              .pauseFor(1000)
              .deleteAll()
              .typeString("My name is pepe")
              .start();
          }}
        />
      </div>
    </div>
    <div className="absolute top-0 w-full h-full">
      <img className=" object-cover h-full w-full" alt="" src={bg2} />
    </div>
    <div className="absolute w-full h-full bg-black/70"></div>
  </div>
  );
}

export default HappyBirthday;

