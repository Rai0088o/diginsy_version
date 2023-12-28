import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
export default function Team() {
  const rednerTeam = [
    {
      img: "https://diginsy.com/wp-content/uploads/2023/12/unnamed-84.png",
      title: "Chief Operations",
      name: "Waqar Jabbar",
      id: "01",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/10/unnamed-3.jpg",
      title: "Business Development Manager",
      name: "Andrew Foley",
      id: "02",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/10/unnamed-2.jpg",
      title: "Business Development Manager",
      name: "Daniel Obenshain",
      id: "03",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14085-1.png",
      title: "Project Coordinator",
      name: "Julia Michael",
      id: "04",
    },
  ];
  return (
    <>
      <main className=" absolute top-[4200px] w-full flex justify-center gap-8 ">
        {rednerTeam.map(({ name, img, title }) => (
          <div className="max-w-sm  overflow-hidden shadow-lg rounded-md" key={name}>
            <Image
              className="w-full"
              src={img}
              width={400}
              height={200}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{name}</div>
              <p className="text-gray-700 text-base">{title}</p>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
