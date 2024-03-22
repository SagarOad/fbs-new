import React from "react";
import { MdScreenSearchDesktop } from "react-icons/md";
import { VscGithubAction } from "react-icons/vsc";
import { BsRocket } from "react-icons/bs";

const Process = () => {
  return (
    <div>
      <div className=" w-[90%] mx-auto relative my-24">
        <div className="grid grid-cols-12">
          <div className="col-span-12  m-2 rounded-3xl bg-[#009fd4] md:col-span-3 flex p-12 flex-col justify-center items-center">
            <MdScreenSearchDesktop className=" text-[86px] mb-1 text-white" />
            <h2 className=" text-center text-white leading-10 mb-2 font-bold text-[1.9rem]">
              Initial Phase
            </h2>
            <p className="leading-normal text-white mt-3 text-center text-[18px] md:text-[18px]">
              We listen to our clients to get the initial idea of the project.
              Then our creative teams join their head and polish it into a
              shining diamond.
            </p>
          </div>
          <div className="col-span-12  m-2 rounded-3xl bg-[#009fd4] md:col-span-3 flex p-12 flex-col justify-center items-center">
            <VscGithubAction className=" text-[86px] mb-1 text-white" />
            <h2 className=" text-center text-white leading-10 mb-2 font-bold text-[1.9rem]">
              Executive
            </h2>
            <p className="leading-normal text-white mt-3 text-center text-[18px] md:text-[18px]">
              We are equipped with skilled people and state-of-the-art rendering
              machines. Coming up with brilliant products is our habit.
            </p>
          </div>
          <div className="col-span-12  m-2 rounded-3xl bg-[#009fd4] md:col-span-3 flex p-12 flex-col justify-center items-center">
            <BsRocket className=" text-[86px] mb-1 text-white" />
            <h2 className=" text-center text-white leading-10 mb-2 font-bold text-[1.9rem]">
              Delivery
            </h2>
            <p className="leading-normal text-white mt-3 text-center text-[18px] md:text-[18px]">
              On-time delivery is our best service. Our healthy work environment
              ensures that you get your project handed over to you ASAP.
            </p>
          </div>
          <div className="col-span-12  m-2 rounded-3xl bg-[#009fd4] md:col-span-3 flex p-12 flex-col justify-center items-center">
            <BsRocket className=" text-[86px] mb-1 text-white" />
            <h2 className=" text-center text-white leading-10 mb-2 font-bold text-[1.9rem]">
              Delivery
            </h2>
            <p className="leading-normal text-white mt-3 text-center text-[18px] md:text-[18px]">
              On-time delivery is our best service. Our healthy work environment
              ensures that you get your project handed over to you ASAP.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
