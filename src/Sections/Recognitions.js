import React from "react";
import Image from "next/image";
import fbr from "../assets/Recognition/fbr.PNG";
import pash from "../assets/Recognition/pash.webp";
import psb from "../assets/Recognition/pseb.PNG";
import sepLogo from "../assets/Recognition/sep-logo.webp";
import trustPilot from "../assets/Recognition/topRated2.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const Recognitions = () => {
  return (
    <div className=" recognitions my-16 py-16">
      <div className=" md:w-[40%] mx-auto flex items-center justify-center">
        <h2 className=" text-center text-white leading-10 mb-10 font-bold text-[1.9rem]">
          Get top-rated and Industry recognized professionals for your project!
          <hr className=" bg-black h-1 w-[50%] mt-3 mx-auto" />
        </h2>
      </div>

      <div className=" container grid grid-cols-10 justify-center items-center">
        <div className=" col-span-2">
          <div className="bg-white flex mx-auto justify-center rounded-full items-center h-44 w-44">
            <Image className="w-[160px] mx-auto mb-4" src={fbr} />
          </div>
        </div>
        <div className=" col-span-2">
          <div className="bg-white flex mx-auto justify-center rounded-full items-center h-44 w-44">
            <Image className="w-[150px] mx-auto" src={pash} />
          </div>
        </div>
        <div className=" col-span-2">
          <div className="bg-white flex mx-auto justify-center rounded-full items-center h-44 w-44">
            <Image className="w-[120px] mx-auto" src={psb} />
          </div>
        </div>
        <div className=" col-span-2">
          <div className="bg-white flex mx-auto justify-center rounded-full items-center h-44 w-44">
            <Image className="w-[105px] mx-auto" src={sepLogo} />
          </div>
        </div>
        <div className=" col-span-2">
          <div className="bg-white flex mx-auto justify-center rounded-full items-center h-44 w-44">
            <Image className="w-[136px] mx-auto" src={trustPilot} />
          </div>
        </div>
      </div>
      {/* <Carousel
        opts={{
          slidesPerView: 4,
          spaceBetween: 20,
          loop: true,
          align: "start", 
        }}
        className="w-full mx-auto max-w-[500px]"
      >
        <CarouselContent> 
          <CarouselItem className="md:basis-1/2 bg-white flex justify-center items-center lg:basis-1/3">
            <Image className=" w-[90%]" src={trustPilot} />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 bg-white flex justify-center items-center lg:basis-1/3">
            <Image className=" w-[90%]" src={fbr} />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 bg-white flex justify-center items-center lg:basis-1/3">
            <Image className=" w-[90%]" src={pash} />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 bg-white flex justify-center items-center lg:basis-1/3">
            <Image className=" w-[90%]" src={psb} />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 bg-white flex justify-center items-center lg:basis-1/3">
            <Image className=" w-[90%]" src={sepLogo} />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}
    </div>
  );
};

export default Recognitions;
