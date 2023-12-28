import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import bg_myImg from "./Images/MBnflN.png";
import Footer from "@/components/shared/Footer";

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
        <div className="flex flex-col justify-center items-center mt-10 mx-[370px]">
          <h1 className="text-[45px] font-[900] text-center bg-gradient-to-r from-red-600 to-danger bg-clip-text text-transparent">
            We’ve driven over 6,437,349 leads for clients through digital
            marketing.
          </h1>
          <p className="text-black text-[20px] font-bold">
            Fill in the form below to instantly schedule a call with us.
          </p>
          <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
              {/* <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Contact Us
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify.
      </p>
    </div> */}
              {/* lg:w-1/2 md:w-2/3 */}
              <div className=" mx-20 flex justify-between items-center gap-40 ">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-red-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-red-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-red-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="border-red-400 w-full bg-gray-100 bg-opacity-50 rounded border  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full ">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full border-red-400 bg-gray-100 bg-opacity-50 rounded border  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button className="flex item-left  bg-gradient-to-r from-red-200 to-pink-400  border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Submit
                    </button>
                  </div>
                </div>
                <div>
                  <p>Contact US</p>
                  <p>8870 Business Park, Ste 500 Austin, TX 78759</p>
                  <p>support@diginsy.com </p>
                  <p>(512) 354-4525 </p>
                </div>
              </div>
            </div>
          </section>
          <Footer/>
        </div>
      </div>
      <div className="flex-col flex items-center text-center justify-center  ">
        <h1 className="text-[#FFFFFF] text-[40px] font-[800] leading-[51px] w-[70%]">
          AMERICA’S #1 INTERNET MARKETING COMPANY DIGITAL MARKETING AGENCY THAT
          MAXIMIZE SALES & PROFITABILITY
        </h1>
      </div>
      <section className=" body-font text-[#FFFFFF]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6  border-gray-200 border-opacity-60">
              <div className="flex gap-4">
                <Image
                  src="https://diginsy.com/wp-content/uploads/2023/12/public-3.png"
                  width={40}
                  height={30}
                  alt=""
                />
                <h2 className="text-lg sm:text-xl text-[#FFFFFF] font-medium title-font mb-2">
                  93%
                </h2>
              </div>
              <p className="leading-relaxed text-base mb-4">
                CLIENT RETENTION RATE
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 h-[105px] md:w-full px-8 py-6 border-l-[1px] border-gray-200 border-opacity-60">
              <div className="flex gap-4">
                <Image
                  src="https://diginsy.com/wp-content/uploads/2023/12/public-3.png"
                  width={40}
                  height={30}
                  alt=""
                />
                <h2 className="text-lg sm:text-xl text-[#FFFFFF] font-medium title-font mb-2">
                  300+
                </h2>
              </div>
              <p className="leading-relaxed text-base mb-4">
                AWESOME TEAM MEMBERS
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 h-[105px]  md:w-full px-8 py-6 border-l-[1px] border-gray-200 border-opacity-60">
              <div className="flex gap-4">
                <Image
                  src="https://diginsy.com/wp-content/uploads/2023/12/public-3.png"
                  width={40}
                  height={30}
                  alt=""
                />
                <h2 className="text-lg sm:text-xl text-[#FFFFFF] font-medium title-font mb-2">
                  2MIL+
                </h2>
              </div>
              <p className="leading-relaxed text-base mb-4">
                QUALIFIED LEADS DELIVERED
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 h-[105px]  md:w-full px-8 py-6 border-l-[1px] border-gray-200 border-opacity-60">
              <div className="flex gap-4">
                <Image
                  src="https://diginsy.com/wp-content/uploads/2023/12/public-3.png"
                  width={40}
                  height={30}
                  alt=""
                />
                <h2 className="text-lg sm:text-xl text-[#FFFFFF] font-medium title-font mb-2">
                  1500+
                </h2>
              </div>
              <p className="leading-relaxed text-base mb-4">
                CLIENTS WORKING WITH US GLOBALLY
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center gap-12">
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
