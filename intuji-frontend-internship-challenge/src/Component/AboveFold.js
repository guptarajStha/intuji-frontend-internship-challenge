import React from "react";
import bg_image from "../assets/Rectangle_158_.png";

import Navbar from "./Navbar";
import Intro from "./Intro";
import Company from "./Company";
const AboveFold = () => {
  return (
    <div>
      <div
        className="bg-cover w-full h-[110vh]"
        style={{ backgroundImage: `url(${bg_image})` }}
      >
        <Navbar />
        <Intro />
      </div>
        <Company />
    </div>
  );
};

export default AboveFold;
