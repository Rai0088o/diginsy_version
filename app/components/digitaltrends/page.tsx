import Image from "next/image";
import React from "react";
import bg_myImg from "./backgroundImage/bg_image.png";
import { Separator } from "@/components/ui/separator";

export default function Digital() {
  const rednerDigital = [
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14082-5.png",
      desription: "HOW TO MAKE YOUR E-COMMERCE STORE STAND OUT",
      id: "01",
      date: "Mar 15",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14087-1.png",
      desription:
        "How A Good UI/UX Design Can Help You To Grow Your Business In 2023",
      id: "02",
      date: "JUN 22",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14086-1.png",
      desription: "Know How Website Designs Can Boost Your Business",
      date: "AUG 25",
      id: "03",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14083-1.png",
      desription: "Outsourcing Vs In-House Teams Which is Better for Startups",
      id: "04",
      date: "Sep 08",
    },
  ];
  return (
    <main className="absolute top-[4580px] w-full h-[114rem]">
      <Image
        alt="Mountains"
        src={bg_myImg}
        quality={100}
        sizes="100vw"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "50%",
        }}
      />

      <div>
        {" "}
        <div className="absolute top-[60px] mx-20 mb-20 ">
          <h1 className="text-1xl font-medium text-[#E7071A]">
            DIGITAL TRENDS
          </h1>
          <h1 className="text-[#FFFFFF] text-[38px] font-bold w-[770px] leading-tight">
            Worth A <span className="text-[#E7071A]">Read</span>
          </h1>
        </div>
        <Separator />
        <div
          className="absolute top-[200px] left-2  flex  justify-between items-center text-center space-x-10 mx-20
      
        "
        >
          {rednerDigital.map(({ img, desription, id }) => {
            return (
              <div key={id}>
                {/* <div > */}
                <Image
                  src={img}
                  width={400}
                  height={180}
                  alt="Picture of the author"
                />
                <p className="text-[#FFFFFF] py-6 text-left w-[370px]">
                  {desription}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
