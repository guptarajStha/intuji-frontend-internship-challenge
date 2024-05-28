import React from "react";
import AboveFold from "../Component/AboveFold";
import SectionHeading from "../Component/SectionHeading";
import WalletInsights from "../Component/WalletInsights";

const Home = () => {
  return (
    <div>
      <AboveFold />
      <div className="bg-[#FAFBFF] w-full">
        <SectionHeading />
        <WalletInsights />
      </div>
    </div>
  );
};

export default Home;
