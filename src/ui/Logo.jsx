import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex">
      <Link href="/" className="">
        <span className="sr-only">E_Clinic</span>
        <img className="h-12 w-auto" src={"/Logo.png"} alt="" />
      </Link>
    </div>
  );
};

export default Logo;
