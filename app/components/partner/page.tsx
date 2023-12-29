import React from "react";
import Image from "next/image";

export default function Partner() {
  return (
    <main className="mx-2 md:mx-20 absolute top-[6120px] sm:top-[2720px] md:top-[2720px] lg:[3300px]">
      <div className=" my-10 mt-2 sm:mt-10  md:mt-10">
        <h1 className="text-[#E8081A] text-[14px] md:text-[20px] font-semibold">
          TECHNOLOGY PARTNERS
        </h1>
        <h1 className="text-[#2B2B2B]  text-[35px] w-[380px] md:w-[600px] font-bold">
          We Collaborate With Companies That Have <span className="text-[#E8081A] font-medium">Out-Of-The-Box Ideas</span>
        </h1>
      </div>
      <div className="w-[350px] md:w-full">

     
      <Image
        src="https://diginsy.com/wp-content/uploads/2023/06/Group-14101-1536x169.png"
        alt="Picture of the author"
        width={500}
        height={500}
        className="w-screen"
        style={{
          objectFit: "cover",
        }}
      />
       </div>
    </main>
  );
}
