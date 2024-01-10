import React from 'react'
import bg from "../assets/bg.jpg"

function Back() {
  return (
    <div className="h-full relative flex justify-center items-center">
    <div className=" z-20 text-white text-center">
      <div className="Happy">
       hello
      </div>
    </div>
    <div className="absolute top-0 w-full h-full">
      <img className=" object-cover h-full w-full" alt="" src={bg} />
    </div>
    <div className="absolute w-full h-full bg-black/70"></div>
  </div>
  )
}

export default Back