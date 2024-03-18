import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

  const Faqs = () => {
    return (
      <div className="my-16 py-16">
        <div className=" md:w-[40%] mx-auto flex items-center justify-center">
          <h2 className=" text-center leading-10 mb-2 font-bold text-[1.9rem]">
            FAQ's - Frequesntly asked questions
            <hr className=" bg-black h-1 w-[50%] mt-3 mx-auto" />
          </h2>
        </div>
        <div className=" flex w-[70%] mx-auto justify-center items-center">
          <Accordion
            type="single"
            collapsible
            className="w-full p-3 mx-3 max-w-[1200px]"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What methodology you use to complete the project?
              </AccordionTrigger>
              <AccordionContent>
                Our delivery is a three phased approach – Design, Develop and
                Launch. The design phase includes documentation and prototype. The
                next phase is application development which covers build, client
                demos and feedback. The final phase involves extensive testing,
                post-production support and next phase of implementation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Can you help in developing a custom product?
              </AccordionTrigger>
              <AccordionContent>
                We surely deliver a full SDLC custom product with support and
                maintenance as required by our clients. We take pride in crafting
                solutions to difficult problems.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How much does a custom software project costs to develop?
              </AccordionTrigger>
              <AccordionContent>
                Every project has its overall cost based on several factors. After
                taking client requirments we give a ball park amount. If agreed,
                during the prototype design phase, we document all the client
                requirements for the project and provide exactly how much their
                project is going to cost in terms of money and time, which gives
                more transparency towards the delivery expectations by them.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                How long will my project take to complete?
              </AccordionTrigger>
              <AccordionContent>
                Whether the project is based on modern or legacy systems, the
                delivery is dependent on the size and complexity of the project,
                and the number of resources allocated to it. The design phase, can
                take 2 - 6 weeks for most projects, while the development phase
                for non-complex projects can take 3 - 6 months. Medium complexity
                projects can take 6 - 12 months. Large, complex projects can take
                up to 12 - 24 months.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Do you offer code reviews?</AccordionTrigger>
              <AccordionContent>
                Yes, we run Sonar Cube and follow OWASP guidelines for code
                reviews. We provide a report covering static and dynamic code
                analysis, quality, documentation, dependency management, test
                coverage, and performance monitoring.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    );
  };

export default Faqs