import Image from "next/image";
import React from "react";
import bg_myImg from "./backgroundImage/bg_image.png";

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
    <main className="absolute top-[4900px] w-full h-[114rem]">
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
          <h1 className="text-[#FFFFFF] text-[20px] font-bold">
            DIGITAL TRENDS
          </h1>
          <h1 className="text-[#FFFFFF] text-[38px] font-extrabold w-[770px] leading-tight">
            Worth A Read
          </h1>
        </div>
        <div className="absolute top-[200px] left-[50px] flex justify-center items-center text-center flex-wrap gap-10 mx-20  ">
          {rednerDigital.map(({ img, desription, id }) => {
            return (
              <div>
                <div key={id}>
                  <Image
                    src={img}
                    width={378}
                    height={200}
                    alt="Picture of the author"
                  />
                  {/* <p className="text-[#FFFFFF] py-6 text-left">{desription}</p> */}
                </div>
                {/* <p className="text-[#FFFFFF] py-6 text-left text-[16px]"> {desription}</p> */}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
