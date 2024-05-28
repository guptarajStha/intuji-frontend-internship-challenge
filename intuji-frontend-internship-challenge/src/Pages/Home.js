import React from "react";
import AboveFold from "../Component/AboveFold";
import SectionHeading from "../Component/SectionHeading";
import WalletInsights from "../Component/WalletInsights";
import WhyChooseUs from "../Component/WhyChooseUs";
import WhyChooseUs2 from "../Component/WhyChooseUs2";
import Features from "../Component/Features";
import Testimonials from "../Component/Testimonials";
import Stats from "../Component/Stats";
import RecentBlog from "../Component/RecentBlog";
import FrequentQuestion from "../Component/FrequentQuestion";

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
      <Stats />
      <div className="w-full bg-[#FAFBFF] py-[80px]">
        <div className="w-[80%] m-auto">
          <RecentBlog />
          <FrequentQuestion />
        </div>
      </div>
    </div>
  );
};

export default Home;
