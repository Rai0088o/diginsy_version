import React from "react";
import Image from "next/image";
import bg_myImg from "./backgroundImage/bg_image.png";

export default function OurWork() {
  const rednerWork = [
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14085-min.png",

      desription:
        "We created an ecommerce website for California Pizza Kitchen that helped them generate orders…",
      title: "learn more",
      id: "01",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14085-min.png",

      desription:
        "For BJ’s Restaurant Brewhouse, we created an ecommerce website that focused on fetching orders…",
      title: "learn more",
      id: "02",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14085-min.png",
      desription:
        "We developed a UI/UX Design for Typhoon Texas and effectively conducted social media and SEO campaigns",
      title: "learn more",
      id: "03",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14085-min.png",
      desription:
        "We developed a UI/UX Design for Typhoon Texas and effectively conducted social media and SEO campaigns",
      title: "learn more",
      id: "04",
    },
  ];
  return (
    <div className="absolute top-[1500px]">
      <Image
        alt="Mountains"
        src={bg_myImg}
        placeholder="blur"
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
          <h1 className="text-[#FFFFFF] text-[20px] font-bold">OUR WORK</h1>
          <h1 className="text-[#FFFFFF] text-[38px] font-extrabold w-[770px] leading-tight">
            We’ve Done Lot’s Of Work, Let’s Check Some From Here
          </h1>
        </div>
        <div className="absolute top-[100px] grid grid-cols-1 md:grid-col-2 lg:grid-cols-4 gap-10 mx-20 items-center py-10 mt-16 ">
          {rednerWork.map(({ img, desription, title, id }) => {
            return (
              <div key={id}>
                <div>
                  <Image
                    src={img}
                    width={400}
                    height={200}
                    alt="Picture of the author"
                  />
                  <h1 className="text-[#FFFFFF] py-6">{desription}</h1>
                  <h1 className="text-[#FFFFFF]  ">{title}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
