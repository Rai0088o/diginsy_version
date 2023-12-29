import ServiceList from "@/components/shared/Card";
import React from "react";
import Banner from "./components/banner/page";
import OurWork from "./components/ourwork/page";
import Partner from "./components/partner/page";
import OurExperts from "./components/ourexperts/page";
import Team from "./components/teams/page";
import Digital from "./components/digitaltrends/page";
import Contact from "./(root)/contact/page";
import Footer from "@/components/shared/Footer";
import FooterExam from "./components/footer/page";
import FooterBanner from "./components/footer/page";

export default function Home() {
  return (
    <>
      <main>
        <Banner />
        <Partner />
        <OurExperts />
        <Team />
        <Digital />
        <FooterBanner/>
        {/* <FooterExam/> */}
       
        {/* <ServiceList /> */}
        {/* <OurWork />
        <Partner />
        <OurExperts />
         */}
        {/* <Contact/> */}
      </main>
    </>
  );
}
