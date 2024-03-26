"use client"

import React from 'react'
import { FaDotCircle } from "react-icons/fa";
// import graphicsDesign from "../assets/Services/graphics-design.JPG"

const GraphicsDesignTemplate = () => {
  return (
    <div className=" grid grid-cols-12 mt-12">
    <div className=" col-span-8 pr-20">
      <h2 className=" text-[26px] font-[500] mt-12 mb-5">Graphics Design</h2>
      <p className=" text-[20px] font-[500]">
        Our App development package includes all; Requirement Analysis,
        Designing, Development, customer support, and detailed Documentation.
      </p>
      <div className=" flex flex-wrap justify-between pt-5">
        <div className="flex items-center my-2">
          <FaDotCircle className=" mr-3" />
          <p className=" text-[15px]">Requirement Analysis through a questionnaire</p>
        </div>
        <div className="flex items-center my-2">
          <FaDotCircle className=" mr-3" />
          <p className=" text-[15px]">Detailed Level of Efforts Estimate (for transparent costing)</p>
        </div>
        <div className="flex items-center my-2">
          <FaDotCircle className=" mr-3" />
          <p className=" text-[15px]">Prototype of App Design with Admin panel for KPI measurement</p>
        </div>
        <div className="flex items-center my-2">
          <FaDotCircle className=" mr-3" />
          <p className=" text-[15px]">Testing, Technical and milestone deliveries documents</p>
        </div>
        <div className="flex items-center my-2">
          <FaDotCircle className=" mr-3" />
          <p className=" text-[15px]">World class customer support</p>
        </div>
      </div>
    </div>
    <div className="col-span-4">
      Graphics Design Image
      {/* <img src='../assets/Services/graphics-design.JPG' alt='image' /> */}
    {/* <img className=" w-[90%] ml-auto rounded-2xl" src={graphicsDesign} /> */}
    </div>
  </div>
  )
}

export default GraphicsDesignTemplate