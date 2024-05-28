import React from "react";
import AboveFold from "../Component/AboveFold";
import SectionHeading from "../Component/SectionHeading";
import WalletInsights from "../Component/WalletInsights";
import WhyChooseUs from "../Component/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <AboveFold />
      <div className="bg-[#FAFBFF] w-full relative z-10">
        <SectionHeading />
        <WalletInsights />
        <WhyChooseUs />
      </div>
    </div>
  );
};

export default Home;
