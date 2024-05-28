import React from "react";
import AboveFold from "../Component/AboveFold";
import SectionHeading from "../Component/SectionHeading";
import WalletInsights from "../Component/WalletInsights";
import WhyChooseUs from "../Component/WhyChooseUs";
import WhyChooseUs2 from "../Component/WhyChooseUs2";
import Features from "../Component/Features";
import Testimonials from "../Component/Testimonials";

const Home = () => {
  return (
    <div>
      <AboveFold />
      <div className="bg-[#FAFBFF] w-full relative z-10 mb-[60px]">
        <SectionHeading />
        <WalletInsights />
        <WhyChooseUs />
        <WhyChooseUs2 />
      </div>
      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;
