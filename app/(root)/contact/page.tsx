import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import bg_myImg from "./Images/MBnflN.png";
import Footer from "@/components/shared/Footer";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <main>
      <div className="absolute top-0  -z-50 w-full ">
        {" "}
        <Image
          src={bg_myImg}
          alt="Picture of the author"
          quality={100}
          sizes="100vw"
          style={{
            objectFit: "cover",
            width: "100%",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="flex flex-col justify-center items-center mt-10 md:mx-[370px]">
          <h1 className="text-[45px] font-[900] text-center bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
            We’ve driven over 6,437,349 leads for clients through digital
            marketing.
          </h1>
          <p className="text-black text-[20px] font-bold">
            Fill in the form below to instantly schedule a call with us.
          </p>
          <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
              <div className=" mx-20 flex justify-between items-center gap-12 ">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Email"
                        id="name"
                        name="name"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-red-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="First Name"
                        id="email"
                        name="email"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-red-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <input
                        placeholder="Last Name"
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-red-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <input
                        placeholder="phone"
                        type="email"
                        id="email"
                        name="email"
                        className="border-red-400 w-full bg-gray-100 bg-opacity-50 rounded border  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full ">
                    <div className="relative">
                      <textarea
                        placeholder="Please describe your project"
                        id="message"
                        name="message"
                        className="w-full border-red-400 bg-gray-100 bg-opacity-50 rounded border  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button className="flex item-left text-black bg-gradient-to-r from-red-200 to-pink-400  border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-none text-lg">
                      Submit
                    </button>
                  </div>
                </div>
                <div>
                  <div className="flex gap-6 justify-end">
                    <p></p>
                    <p className="w-[200px] text-[20px] -mt-14 font-bold">
                      Contact
                    </p>
                  </div>
                  <div className="flex gap-6">
                    {" "}
                    <p>
                      {" "}
                      <MapPin />
                    </p>
                    <p className="w-[200px] text-[20px]">
                      8870 Business Park, Ste 500 Austin, TX 78759
                    </p>
                  </div>
                  <div className="flex gap-6">
                    {" "}
                    <p>
                      {" "}
                      <Mail />
                    </p>
                    <p className="w-[200px] text-[20px]">
                      support@diginsy.com{" "}
                    </p>
                  </div>
                  <div className="flex gap-6">
                    {" "}
                    <p>
                      {" "}
                      <Phone />
                    </p>
                    <p className="w-[200px] text-[20px]">(512) 354-4525 </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
      <div className="flex-col flex items-center  justify-center  ">
        <h1 className="text-[#FFFFFF] mt-28 text-center text-[40px] font-[700] tracking-normal leading-[51px] w-[78%]">
          AMERICA’S #1 INTERNET MARKETING COMPANY DIGITAL MARKETING
        </h1>
        <h1 className="text-[#FFFFFF]  text-center text-[40px] font-[700] tracking-normal leading-[51px] w-[78%]">
          AGENCY THAT MAXIMIZE SALES & PROFITABILITY
        </h1>
      </div>
      <section className=" body-font text-[#FFFFFF]">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6  border-gray-200 border-opacity-60">
              <div className="flex gap-4">
                <Image
                  src="https://diginsy.com/wp-content/uploads/2023/12/public-3.png"
                  width={60}
                  height={45}
                  alt=""
                />
                <h2 className="text-[34px]  text-[#FFFFFF] font-bold title-font mb-2">
                  93%
                </h2>
              </div>
              <p className="leading-relaxed text-base mb-4 font-bold">
                CLIENT RETENTION RATE
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 h-[105px] md:w-full px-8 py-6 border-l-[1px] border-gray-200 border-opacity-60">
              <div className="flex gap-4 items-center text-center">
                <Image
                  src="https://diginsy.com/wp-content/uploads/2023/12/public-2.png"
                  width={50}
                  height={45}
                  alt=""
                />

                <h2 className="text-[34px]  text-[#FFFFFF] font-bold title-font mb-2">
                  300+
                </h2>
              </div>
              <p className="leading-relaxed text-base mb-4 font-bold">
                AWESOME TEAM MEMBERS
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 h-[105px]  md:w-full px-8 py-6 border-l-[1px] border-gray-200 border-opacity-60">
              <div className="flex gap-4 items-center text-center">
                <Image
                  src="https://diginsy.com/wp-content/uploads/2023/12/public-1.png"
                  width={30}
                  height={30}
                  alt=""
                />
                <h2 className="text-[34px]  text-[#FFFFFF] font-bold title-font mb-2">
                  2MIL+
                </h2>
              </div>
              <p className="leading-relaxed text-base mb-4 font-bold">
                QUALIFIED LEADS DELIVERED
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 h-[105px]  md:w-full px-8 py-6 border-l-[1px] border-gray-200 border-opacity-60">
              <div className="flex gap-4 items-center text-center">
                <Image
                  src="https://diginsy.com/wp-content/uploads/2023/12/public.png"
                  width={40}
                  height={35}
                  alt=""
                />
                <h2 className="text-[34px]  text-[#FFFFFF] font-bold title-font mb-2">
                  1500+
                </h2>
              </div>
              <p className="leading-relaxed text-base mb-4 font-bold w-[300px]">
                CLIENTS WORKING WITH US GLOBALLY
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center gap-12 -mt-14">
        <Image
          src="https://diginsy.com/wp-content/uploads/2023/12/Amazon-1.png"
          width={160}
          height={50}
          alt=""
        />
        <Image
          src="https://diginsy.com/wp-content/uploads/2023/12/Fb-1.png"
          width={160}
          height={50}
          alt=""
        />
        <Image
          src="https://diginsy.com/wp-content/uploads/2023/12/Google-1.png"
          width={160}
          height={50}
          alt=""
        />
        <Image
          src="https://diginsy.com/wp-content/uploads/2023/12/Microsoft-1.png"
          width={160}
          height={50}
          alt=""
        />
        <Image
          src="https://diginsy.com/wp-content/uploads/2023/12/unnamed-78.png"
          width={160}
          height={50}
          alt=""
        />
        <Image
          src="https://diginsy.com/wp-content/uploads/2023/12/unnamed-80.png"
          width={160}
          height={30}
          alt=""
        />
      </div>
    </main>
  );
}
