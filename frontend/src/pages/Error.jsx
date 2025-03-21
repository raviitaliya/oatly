import React from "react";
import error from "../assets/logo/error.jpg";

function Error({msg}) {
  return (
    <div className="w-full h-screen">
      <div className="border-[2px] h-screen flex flex-col justify-center items-center">
        <img src={error} alt="" className="w-[200px]"/>
        <h1 className="font-font1 text-[70px] ">
          404 Error Page
        </h1>
        <p className="font-font2 text-xl ">{msg}</p>
      </div>
    </div>
  );
}

export default Error;
