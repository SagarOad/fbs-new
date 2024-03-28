import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AnimationPricing = () => {
  const [openModal, setOpenModal] = useState();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      // Add more breakpoints as needed
    ],
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <div
            class=" px-4 gap-10 flex justify-center text-zinc-800 mt-10"
            style={{ height: "600px" }}
          >
            <div
              class="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl relative  w-full hover:scale-105 transition-all ease-in-out"
              style={{ height: "500px" }}
            >
              <div>
                <div class="flex gap-4 justify-center">
                  <p class="font-medium font-[poppins] text-2xl mb-2">
                    Fame Teaser
                  </p>
                </div>
                {/* <p class="opacity-60 text-center">For agencies and businesses</p> */}
                <p class="opacity-60 text-center"></p>
                <div class="flex gap-4 justify-center">
                  <div class="flex flex-col items-center my-8">
                    <p class="font-extrabold text-[#002244] font-[poppins] text-4xl">
                      $499.00
                    </p>
                  </div>
                </div>
              </div>
              <ul className="font-bold list-container">
                <li>
                  Suitable for Small Business, Suitable for potential
                  super-startups
                </li>
                <li>
                  and brand revamps for companies.rt-ups &amp; Enterprises
                </li>
                <li>15 Second Video - HD 1080 </li>
                <li>Professional Script </li>
                <li>Storyboard </li>
                <li>Animation </li>
                <li>Professional Voice-Over &amp; Sound Effects </li>
                <li>Custom Artwork </li>
                <li>Background Music </li>
                <li>Sample Theme </li>
                <li>2 Weeks Delivery </li>
                <li>Unlimited Storyboard Revisions </li>
                <li>Dedicated Support </li>
              </ul>

              <div class="flex justify-center mt-8 ">
                <button
                  onClick={() => setOpenModal(true)}
                  class="get-start-btn w-full"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            class=" px-4 gap-10 flex justify-center text-zinc-800 mt-10"
            style={{ height: "600px" }}
          >
            <div
              class="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl relative  w-full hover:scale-105 transition-all ease-in-out"
              style={{ height: "500px" }}
            >
              <div>
                <div class="flex gap-4 justify-center">
                  <p class="font-medium font-[poppins] text-2xl mb-2">
                    Fame Startup
                  </p>
                </div>
                {/* <p class="opacity-60 text-center">For agencies and businesses</p> */}
                <p class="opacity-60 text-center"></p>
                <div class="flex gap-4 justify-center">
                  <div class="flex flex-col items-center my-8">
                    <p class="font-extrabold text-[#002244] font-[poppins] text-4xl">
                      $799.00
                    </p>
                  </div>
                </div>
              </div>
              <ul className="font-bold list-container">
                <li>
                  Suitable for potential super-startups and brand revamps for
                  companies.
                </li>
                <li>30 Second Video - HD 1080 </li>
                <li>Professional Script </li>
                <li>Storyboard </li>
                <li>Animation </li>
                <li>Professional Voice-Over &amp; Sound Effects </li>
                <li>Custom Artwork </li>
                <li>Background Music </li>
                <li>Sample Theme </li>
                <li>4 Weeks Delivery </li>
                <li>Unlimited Storyboard Revisions </li>
                <li>Dedicated Support</li>
              </ul>

              <div class="flex justify-center mt-8 ">
                <button
                  onClick={() => setOpenModal(true)}
                  class="get-start-btn w-full"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            class=" px-4 gap-10 flex justify-center text-zinc-800 mt-10"
            style={{ height: "600px" }}
          >
            <div
              class="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl relative  w-full hover:scale-105 transition-all ease-in-out"
              style={{ height: "500px" }}
            >
              <div>
                <div class="flex gap-4 justify-center">
                  <p class="font-medium font-[poppins] text-2xl mb-2">
                    Fame Classic
                  </p>
                </div>
                {/* <p class="opacity-60 text-center">For agencies and businesses</p> */}
                <p class="opacity-60 text-center"></p>
                <div class="flex gap-4 justify-center">
                  <div class="flex flex-col items-center my-8">
                    <p class="font-extrabold text-[#002244] font-[poppins] text-4xl">
                      $999.00
                    </p>
                  </div>
                </div>
              </div>
              <ul className="font-bold list-container">
                <li>
                  Suitable for potential super-startups and brand revamps for
                  companies.{" "}
                </li>
                <li>60 Second Video - HD 1080 </li>
                <li>Professional Script </li>
                <li>Storyboard </li>
                <li>Animation </li>
                <li>Professional Voice-Over &amp; Sound Effects </li>
                <li>Custom Artwork </li>
                <li>Background Music </li>
                <li>Sample Theme </li>
                <li>4 Weeks Delivery </li>
                <li>Unlimited Revisions </li>
                <li>24x7 Support </li>
                <li>Dedicated Team </li>
                <li>Moneyback Guarantee </li>
                <li>100% Ownership Rights </li>
                <li>FREE All File Formats </li>
              </ul>

              <div class="flex justify-center mt-8 ">
                <button
                  onClick={() => setOpenModal(true)}
                  class="get-start-btn w-full"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default AnimationPricing;
