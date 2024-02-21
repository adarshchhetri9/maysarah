import React from "react";
import CardDeal from "./CardDeal";
import { festive, gif } from "../assets";

const Hero = () => {
  return (
    <div className="flex h-[430px] gap-3 py-2 justify-between">
      <CardDeal />
      <img className="w-[56%]" src={festive} alt="mainFestive" />
      <img className="w-[21%]" src={gif} alt="mainrightpic" />
    </div>
  );
};

export default Hero;
