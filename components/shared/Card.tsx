import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export default function ServiceList() {
  const rednerServices = [
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14098.png",
      name: "Mobile Application",
      desription:
        "If you’re looking for a company that can develop the perfect mobile application for your brand, then Diginsy is your way to go.",
      title: "learn more",
      id: "01",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14098.png",
      name: "Mobile Application",
      desription:
        "Diginsy has the finest website developers in United States than can create compelling and highly functional websites for your brand.",
      title: "learn more",
      id: "02",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14098.png",
      name: "Mobile Application",
      desription:
        "Diginsy has the finest website developers in United States than can create compelling and highly functional websites for your brand.",
      title: "learn more",
      id: "03",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14098.png",
      name: "Mobile Application",
      desription:
        "Diginsy has the finest website developers in United States than can create compelling and highly functional websites for your brand.",
      title: "learn more",
      id: "04",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14098.png",
      name: "Mobile Application",
      desription:
        "Diginsy has the finest website developers in United States than can create compelling and highly functional websites for your brand.",
      title: "learn more",
      id: "05",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14098.png",
      name: "Mobile Application",
      desription:
        "Diginsy has the finest website developers in United States than can create compelling and highly functional websites for your brand.",
      title: "learn more",
      id: "06",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14098.png",
      name: "Mobile Application",
      desription:
        "Diginsy has the finest website developers in United States than can create compelling and highly functional websites for your brand.",
      title: "learn more",
    },
  ];
  return (
    <>
      {/* absolute top-[800px] */}
      <div>
       
        <div className="mx-20 mb-20 flex py-20 gap-20 items-center justify-between ">
          <div className="">
            <h1 className="text-black  text-[16px] font-[500] leading-6">SERVICES </h1>
            <h1 className="text-[#212529] text-[38px] font-bold  leading-tight w-[400px]">
              Best Services We Can Offer For You<span className="text-red-700"> !</span>
            </h1>
          </div>
          <div>
            <p>
              Consumers today predominantly use digital methods to research
              products. Before engaging with a brand or product, we often
              investigate it online. Meanwhile, 51% of consumers admit to using
              Google as their primary tool for product research before making a
              purchase.
            </p>
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-col-2 lg:grid-cols-4 gap-10 mx-20 items-center py-10 mt-20 ">
          {rednerServices.map(({ name, img, desription, title }) => (
            <Card
              className=" w-[418px]  h-[258px] rounded-2xl relative "
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
                <CardTitle className="mt-10">{name}</CardTitle>
                <CardDescription className="">{desription}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
