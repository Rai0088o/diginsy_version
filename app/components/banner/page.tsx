import React from "react";
import Header from "../../../components/shared/Header";
import { Button } from "@/components/ui/button";
import Partner from "../partner/page";
import ServiceList from "@/components/shared/Card";

export default function Banner() {
  return (
    <>
      <main>
        <div className="absolute top-0  -z-50 aspect-w-16 aspect-h-9">
          {" "}
          <video
            className="object-cover h-[868px] md:h-[768px] w-screen"
            autoPlay
            loop
            muted
          >
            <source
              src="https://diginsy.com/wp-content/uploads/2023/10/vid.mp4"
              type="video/mp4"
            />
          </video>{" "}
          {/* <Partner/> */}
          <ServiceList/>
          
        </div>
        <div className=" flex-col flex items-center justify-center mt-40 text-[31px] font-semibold py-8 ">
          <h2 className="text-[#FFFFFF] text-[20px] text-center md:text-[30px] md:font-extrabold leading-10 tracking-wider">
            RESULTS-DRIVEN CREATIVE DIGITAL AGENCY FOCUSED ON
          </h2>

          <h1 className="text-[#FFFFFF] text-[36px] text-center md:text-[76px]  font-bold drop-shadow-md md:drop-shadow-xl leading-[62px] mt-8">
            Growing Brands Online
          </h1>
          <Button
            variant={"outline"}
            className="bg-transparent text-[#FFFFFF] my-20 rounded-none  py-6 px-12"
          >
            SPEAK WITH OUR EXPERTS
          </Button>
        </div>
      </main>
    </>
  );
}
