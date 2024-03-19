import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WebDevProjects from "@/Components/WebDevProjects";
import MobDevProjects from "@/Components/MobDevProjects";
import AnimationProjects from "@/Components/AnimationProjects";
import LogoDesignProjects from "@/Components/LogoDesignProjects";

const Portofolio = () => {
  return (
    <>
      <div className=" md:w-[40%] mx-auto mt-20 flex items-center justify-center">
        <h2 className=" text-center leading-10 font-bold text-[1.9rem]">
          Our Work
          <hr className=" bg-black h-1 w-[50%] mt-3 mx-auto" />
        </h2>
      </div>
      <div className=" w-[80%] mt-6 mb-12 mx-auto flex items-center justify-center">
        <p className=" text-center font-medium text-[18px]">
          Empowering positive change, One client at a time
        </p>
      </div>
      <div className=" mb-16 justify-center items-center w-[90%] mx-auto">
        <div>
          <Tabs defaultValue="account" className="">
            <TabsList className="mb-12">
              <TabsTrigger className="text-[16px]" value="web-dev">
                Web Development
              </TabsTrigger>
              <TabsTrigger className="text-[16px]" value="mobile-dev">
                Mobile Development
              </TabsTrigger>
              <TabsTrigger className="text-[16px]" value="animation">
                2D / 3D Animation
              </TabsTrigger>
              <TabsTrigger className="text-[16px]" value="graphics-design">
                Graphics Design
              </TabsTrigger>
            </TabsList>
            <TabsContent className="" value="mobile-dev">
              <MobDevProjects />
            </TabsContent>
            <TabsContent value="web-dev">
              <WebDevProjects />
            </TabsContent>
            <TabsContent value="animation">
              <AnimationProjects />
            </TabsContent>
            <TabsContent value="graphics-design">
              <LogoDesignProjects />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Portofolio;
