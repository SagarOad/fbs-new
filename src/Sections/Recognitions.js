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
    <div className=" bg-[#009fd415] my-16 py-16">
      <div className=" md:w-[40%] mx-auto flex items-center justify-center">
        <h2 className=" text-center leading-10 mb-10 font-bold text-[1.9rem]">
          Get top-rated and Industry recognized professionals for your project!
          <hr className=" bg-black h-1 w-[50%] mt-3 mx-auto" />
        </h2>
      </div>

      <Carousel
        opts={{
          slidesPerView: 4,
          spaceBetween: 20,
          loop: true,
          align: "start", 
        }}
        className="w-full mx-auto max-w-[1200px]"
      >
        <CarouselContent> 
          <CarouselItem className="md:basis-1/2 flex justify-center items-center lg:basis-1/3">
            <Image className=" w-[40%]" src={trustPilot} />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 flex justify-center items-center lg:basis-1/3">
            <Image className=" w-[40%]" src={fbr} />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 flex justify-center items-center lg:basis-1/3">
            <Image className=" w-[40%]" src={pash} />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 flex justify-center items-center lg:basis-1/3">
            <Image className=" w-[40%]" src={psb} />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 flex justify-center items-center lg:basis-1/3">
            <Image className=" w-[40%]" src={sepLogo} />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Recognitions;
