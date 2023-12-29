import React from "react";
import { Separator } from "@/components/ui/separator";

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
      <div>
        <main className="absolute top-[3880px] mx-20">
          <div>
            <p className="text-1xl font-medium text-[#E7071A]">
              MEET THE EXPERTS{" "}
            </p>
            <p className="text-3xl font-bold mb-2">
              Our <span className="text-[#E7071A]">Team</span>
            </p>
          </div>
          <Separator />

          <div className="grid grid-cols-4 gap-20 w-full mt-16">
            {rednerTeam.map(({ name, img, title }) => (
              <div
                className="max-w-sm  overflow-hidden shadow-lg rounded-lg"
                key={name}
              >
                <Image
                  className="w-full"
                  src={img}
                  width={430}
                  height={200}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl text-[#042F41]">{name}</div>
                  <p className="text-gray-400 text-base font-normal leading-10 tracking-wider">
                    {title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
