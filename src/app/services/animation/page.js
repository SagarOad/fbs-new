"use client";

import React from "react";
import sapparow from "@/assets/sparrow-animation.jpg";
import { MdMovieEdit } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";
import character1 from "@/assets/3d-character.jpg";
import character2 from "@/assets/2d-character.jpg";
import { FaCheck } from "react-icons/fa6";

const page = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className=" bg-[#002244] animation pt-32 pb-48 relative flex flex-col justify-center items-center ">
        <div className=" w-[70%] ">
          <div className=" bg-[#25a9e138] mx-auto  rounded-full mb-12 flex justify-center items-center h-28 w-28">
            <MdMovieEdit className=" text-[5.2rem] mx-auto text-white" />
          </div>
          <h2 className="text-center text-white leading-10 mb-12 font-bold text-[2.5rem]">
            2D / 3D Animation
          </h2>
          <p></p>
          <p className="text-[18px] text-white font-[500] text-center">
            Elevate your brand with Fame Business Solutions' 2D and 3D animation
            services. Our team creates captivating visuals that leave a lasting
            impression on your audience, whether for promotional videos or brand
            storytelling.
          </p>
        </div>
      </div>

      <div className="w-[80%] mt-20 mx-auto grid grid-cols-12">
        <div className=" col-span-6">
          <h2 className=" leading-10 mb-4 font-bold text-[2.5rem]">
            Turning Your Ideas Into Visuals
          </h2>
          <p className="font-medium text-[18px]">
            Fame Busines Solutions provide a full-package 3D animation agency that can be your go-to
            partner for creating high-quality 3D animations. Together with our
            creativity and lifelike visuals, we help you connect with your
            audience emotionally and propel your business to new heights of
            success.
          </p>
        </div>
        <div className=" col-span-6 flex justify-center">
          <Image className=" w-[550px]" src={sapparow} />
        </div>
      </div>

      <div className=" md:w-[80%] mx-auto mt-28">
        <h2 className=" text-center leading-10 font-bold text-[2.2rem]">
          Get High-End Results
          {/* <hr className=" bg-black h-1 w-[50%] mt-3 mx-auto" /> */}
        </h2>
        <p className=" text-center text-[22px] font-[400] mt-2 ">
          With Our Animation Services
        </p>

        <div className="flex flex-wrap justify-center mb-9 md:px-4 px-0 py-4 md:mx-auto w-[100%] z-30 rounded-full">
          <button
            className={`${activeTab === 0 ? "bg-[#002244]  text-white" : ""} 
             py-3 px-4 m-2 text-[14px]  lg:text-[18px] text-[#838383]`}
            type="button"
            onClick={() => {
              setActiveTab(0);
            }}
          >
            3D Animation
          </button>
          <button
            className={`${activeTab === 1 ? " bg-[#002244]  text-white" : ""} 
        py-3 px-4 m-2 text-[14px]  lg:text-[18px] text-[#838383]`}
            type="button"
            onClick={() => {
              setActiveTab(1);
            }}
          >
            2D Animtion
          </button>
        </div>
        <div className=" ">
          {activeTab == 0 ? (
            <div className=" grid grid-cols-12">
              <div className=" col-span-6 flex justify-center">
                <div>
                  <Image className=" w-[400px]" src={character1} />
                </div>
              </div>
              <div className=" col-span-6">
                <h2 className=" leading-10 mb-6 font-bold text-[2.5rem]">
                  3D Animation
                  {/* <hr className=" bg-black h-1 w-[150px] mt-3" /> */}
                </h2>
                <p className="font-medium mb-6 text-[16px]">
                  Dive into a world of creativity with our 3D animation
                  services. We specialize in crafting immersive visual
                  experiences that captivate audiences and bring your ideas to
                  life in stunning detail. From product demonstrations to
                  architectural walkthroughs, our team leverages cutting-edge
                  technology and artistic expertise to deliver animations that
                  leave a lasting impression.
                </p>

                <div className=" flex mb-4">
                  <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                    {/* <h2 className=" text-[20px] text-white font-bold">1</h2> */}
                    <FaCheck className="text-[#25aae1] text-[18px]" />
                  </div>
                  <div className=" flex flex-col w-[360px]">
                    <p className="font-medium text-[16px]">
                      Transform your ideas into captivating visual stories with
                      our 3D animation services.
                    </p>
                  </div>
                </div>
                <div className=" flex mb-4">
                  <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                    <FaCheck className="text-[#25aae1] text-[18px]" />
                  </div>
                  <div className=" flex flex-col w-[360px]">
                    <p className="font-medium text-[16px]">
                      Our expert team brings concepts to life with stunning
                      animations that leave a lasting impression.
                    </p>
                  </div>
                </div>
                <div className=" flex mb-4">
                  <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                    <FaCheck className="text-[#25aae1] text-[18px]" />
                  </div>
                  <div className=" flex flex-col w-[360px]">
                    <p className="font-medium text-[16px]">
                      From product demonstrations to architectural
                      visualization, we offer versatile solutions tailored to
                      your needs.
                    </p>
                  </div>
                </div>
                <div className=" flex mb-4">
                  <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                    <FaCheck className="text-[#25aae1] text-[18px]" />
                  </div>
                  <div className=" flex flex-col w-[360px]">
                    <p className="font-medium text-[16px]">
                      Elevate your brand's storytelling with immersive 3D
                      animations that engage and inspire your audience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : activeTab == 1 ? (
            <div className=" grid grid-cols-12">
              <div className=" col-span-6 flex justify-center">
                <div>
                  <Image className=" w-[350px]" src={character2} />
                </div>
              </div>
              <div className=" col-span-6">
                <h2 className=" leading-10 mb-6 font-bold text-[2.5rem]">
                  2D Animation
                  {/* <hr className=" bg-black h-1 w-[150px] mt-3" /> */}
                </h2>
                <p className="font-medium mb-6 text-[16px]">
                  Capture attention and convey your brand's message with our
                  dynamic 2D animation services. Whether you're looking to
                  create engaging explainer videos, promotional content, or
                  memorable character animations, our talented animators combine
                  creativity and technique to produce animations that resonate
                  with your target audience. Elevate your brand's online
                  presence and stand out in the digital landscape with our
                  custom 2D animation solutions.
                </p>
                <div className=" flex mb-4">
                  <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                    {/* <h2 className=" text-[20px] text-white font-bold">1</h2> */}
                    <FaCheck className="text-[#25aae1] text-[18px]" />
                  </div>
                  <div className=" flex flex-col w-[360px]">
                    <p className="font-medium text-[16px]">
                      Ignite audience engagement with dynamic 2D animations that
                      convey your brand's message effectively.
                    </p>
                  </div>
                </div>
                <div className=" flex mb-4">
                  <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                    <FaCheck className="text-[#25aae1] text-[18px]" />
                  </div>
                  <div className=" flex flex-col w-[360px]">
                    <p className="font-medium text-[16px]">
                      Our skilled animators create eye-catching visuals that
                      resonate with your target audience.
                    </p>
                  </div>
                </div>
                <div className=" flex mb-4">
                  <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                    <FaCheck className="text-[#25aae1] text-[18px]" />
                  </div>
                  <div className=" flex flex-col w-[360px]">
                    <p className="font-medium text-[16px]">
                      Whether it's explainer videos, promotional content, or
                      character animations, we bring creativity and flair to
                      every project.
                    </p>
                  </div>
                </div>
                <div className=" flex mb-4">
                  <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                    <FaCheck className="text-[#25aae1] text-[18px]" />
                  </div>
                  <div className=" flex flex-col w-[360px]">
                    <p className="font-medium text-[16px]">
                      Enhance your brand's online presence and stand out in
                      today's competitive market with our custom 2D animation
                      solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default page;
