import React from "react";
import Image from "next/image";
import bg_myImg from "./backgroundImage/bg_image.png";
import { Separator } from "@/components/ui/separator";

export default function OurWork() {
  const rednerWork = [
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14085-min.png",

      desription:
        "We created an ecommerce website for California Pizza Kitchen that helped them generate orders…",
      title: "Learn More",
      id: "01",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14085-min.png",

      desription:
        "For BJ’s Restaurant Brewhouse, we created an ecommerce website that focused on fetching orders…",
      title: "Learn More",
      id: "02",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14085-min.png",
      desription:
        "We developed a UI/UX Design for Typhoon Texas and effectively conducted social media and SEO campaigns",
      title: "Learn More",
      id: "03",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14085-min.png",
      desription:
        "We developed a UI/UX Design for Typhoon Texas and effectively conducted social media and SEO campaigns",
      title: "Learn More",
      id: "04",
    },
  ];
  return (
    // w-full  h-[120rem]

    <main className="absolute  md:top-[1800px]    bg-nature-light bg-cover object-cover bg-center h-[175rem]  md:h-[57rem] lg:[90rem] xl:[10rem]  w-full ">
      {/* <Image
        alt="Mountains"
        src={bg_myImg}
        placeholder="blur"
        quality={100}
        sizes="100vw"
        style={{
          objectFit: "cover",
          width: "100%",
          
        }}
      /> */}

      <div>
        {" "}
        <div className="absolute top-[60px] mx-1 md:mx-20 mb-20 ">
          <h1 className="text-[#E70722] text-[18px] font-semibold tracking-wider ">
            OUR WORK
          </h1>
          <h1 className="text-[#FFFFFF] text-[20px] md:text-[36px] font-bold  md:w-[740px] leading-tight">
            We’ve Done Lot’s Of Work, Let’s Check Some From Here
          </h1>
        </div>
        {/* grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 md:gap-10 mx-1 md:mx-20 md:items-center py-10 mt-20  */}
        <div className="absolute top-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-10  mx-2 md:mx-20 items-center py-10 mt-16 ">
          {rednerWork.map(({ img, desription, title, id }) => {
            return (
              <div key={id}>
                <div className="w-[375px] md:w-[410px] ">
                  <Image
                    src={img}
                    width={390}
                    height={190}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Picture of the author"
                  />
                  <h1 className="text-[#FFFFFF] py-6 text-[14px]">
                    {desription}
                  </h1>
                  <div className="flex items-center text-center gap-10">
                    <h1 className="text-[#FFFFFF]  text-[14px]">{title}</h1>
                    <Image
                      src="https://diginsy.com/wp-content/uploads/2023/06/Group-14082-1.png"
                      width={30}
                      height={20}
                      alt="Picture of the author"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
