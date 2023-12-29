import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { Separator } from "@/components/ui/separator";

export default function ServiceList() {
  const rednerServices = [
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14098.png",
      name: "Mobile Application",
      desription:
        "If you’re looking for a company that can develop the perfect mobile application for your brand, then Diginsy is your way to go.",
      title: "Learn More",
      id: "01",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14098.png",
      name: "Game Development",
      desription:
        "Diginsy has the finest website developers in United States than can create compelling and highly functional websites for your brand.",
      title: "Learn More",
      id: "02",
    },

    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14098.png",
      name: " Blockchain Development",
      desription:
        "Harness the power of blockchain with Diginsy. We develop secure and innovative decentralized applications.",
      title: "Learn More",
      id: "03",
    },

    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14098.png",
      name: "  Augmented Reality",
      desription:
        "Elevate user experiences with Diginsy’s AR apps. Merging virtual and real, we create standout interactive applications.",
      title: "Learn More",
      id: "04",
    },

    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14098.png",
      name: "  Web Development",
      desription:
        "Diginsy has the finest website developers in United States than can create compelling and highly functional websites for your brand.",
      title: "Learn More",
      id: "05",
    },

    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14098.png",
      name: "Digital Marketing",
      desription:
        "To help your brand reach your target audience, we offer state-of-the-art digital marketing services to increase sales and grow your brand online",
      title: "Learn More",
      id: "06",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14098.png",
      name: "Creative Branding",
      desription:
        "Branding is a key factor which when done right, can help your brand travel miles. Branding is what sets your brand apart from the competition…",
      title: "Learn More",
      id: "07",
    },
  ];
  return (
    <>
      {/* absolute top-[800px] */}
      <div>
        <div className="mx-2 md:mx-20  md:mb-20 flex flex-col items-start  md:flex-row  py-20 gap-40 md:items-center md:justify-between ">
          <div className="">
            <div className="flex items-center text-center gap-2 md:gap-6">
              <h1 className="text-black  text-[16px] font-[500] leading-6">
                SERVICES{" "}
              </h1>

              <Separator color="#5a242d" className="my-4 w-[80px]  " />
            </div>
            <h1 className="text-[#212529] text-[38px] font-bold  leading-tight w-[350px] md:w-[400px]">
              Best Services We Can Offer For You
              <span className="text-red-700"> !</span>
            </h1>
          </div>
          <div>
            <p className="text-[#575757]  font-normal text-[17px] tracking-wide -mt-20 md:mt-4  ">
              Consumers today predominantly use digital methods to research
              products. Before engaging with a brand or product, we often
              investigate it online. Meanwhile, 51% of consumers admit to using
              Google as their primary tool for product research before making a
              purchase.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 md:gap-10 mx-1 md:mx-20 md:items-center py-10 mt-20 ">
          {rednerServices.map(({ name, img, desription, title }) => (
            <Card
              className="sm:w-[380px]  md:w-[428px]  md:h-[228px] rounded-2xl relative border-2 "
              key={name}
            >
              <Image
                src={img}
                width={80}
                height={80}
                className="absolute -top-8 left-4"
                alt="Picture of the author"
              />
              <CardHeader>
                <CardTitle className="mt-10 text-[14px] font-medium leading-6 tracking-wide">
                  {name}
                </CardTitle>
                <CardDescription className="text-[12px] leading-6 tracking-wide">
                  {desription}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className=" text-[14px] font-medium leading-6 tracking-wide">
                  {title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
