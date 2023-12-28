"use client";
import React from "react";
import Image from "next/image";
import bg_myImg from "./backgroundImage/bgImg.png";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function OurExperts() {
  const [tab, setTab] = React.useState(
    "https://diginsy.com/wp-content/uploads/2023/10/peWwXP-1.png"
  );
  return (
    <main className=" absolute top-[3200px] w-full h-[124rem] ">
      <Image
        alt="Mountains"
        src={bg_myImg}
        quality={100}
        sizes="100vw"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "40%",
        }}
      />

      <div
        className=" absolute -top-[120px] flex-col flex items-center justify-center mt-56  "
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h2 className="text-[22px] font-[700] leading-[34px] text-[#FFFFFF] py-4">
          OUR EXPERTS HAVE WON TOP INDUSTRY AWARDS & ARE
        </h2>
        <h1 className="text-[59px] font-[700] leading-[50px] text-[#FFFFFF]">
          Recognized Digital Agency Experts
        </h1>

        <div className="mt-10">
          <Button
            className=" text-[18px] leading-[26px] font-[700]  bg-transparent hover:bg-transparent px-40"
            onClick={() =>
              setTab(
                "https://diginsy.com/wp-content/uploads/2023/10/peWwXP-1.png"
              )
            }
          >
            AWARDS
          </Button>
          <Button
            className=" text-[18px] leading-[26px] font-[700]  bg-transparent hover:bg-transparent px-40"
            onClick={() =>
              setTab(
                "https://diginsy.com/wp-content/uploads/2023/10/Award-Sponsor-02.png"
              )
            }
          >
            RECOGNITION
          </Button>
          <Button
            className=" text-[18px] leading-[26px] font-[700]  bg-transparent hover:bg-transparent px-40"
            onClick={() =>
              setTab(
                "https://diginsy.com/wp-content/uploads/2023/10/Award-Sponsor-01.png "
              )
            }
          >
            EXPERTISE
          </Button>
          <Separator className="my-4" />
        </div>
        <Image
          src={tab}
          alt="Picture of the author"
          width={500}
          height={500}
          className="w-2/3"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </main>
  );
}
