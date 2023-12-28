import React from "react";
import Image from "next/image";

export default function Partner() {
  return (
    <main className="mx-20 absolute top-[2700px]">
      <div className="my-10">
        <h1 className="text-[#E8081A] text-[20px] font-thin">
          TECHNOLOGY PARTNERS
        </h1>
        <h1 className="text-[#2B2B2B] text-[35px] w-[600px] font-bold">
          We Collaborate With Companies That Have Out-Of-The-Box Ideas
        </h1>
      </div>
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
    </main>
  );
}
