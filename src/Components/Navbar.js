"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div
      className={`flex justify-between px-24 z-[99] items-center w-full h-20 text-white fixed nav ${
        scrolled ? "bg-black" : "bg-transparent h-28"
      } transition-all duration-300 ease-in-out`}
    >
      <div class="px-6 lg:container lg:mx-auto lg:py-4">
        <div class="flex items-center justify-between">
          <div class="relative z-20">
            <a className=" text-[36px]" href="#">
              Fbs
            </a>
          </div>

          <div class="flex items-center justify-end border-l lg:border-l-0">
            <input
              type="checkbox"
              name="hamburger"
              id="hamburger"
              class="peer"
              hidden
            />
            <label
              for="hamburger"
              class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
            >
              <div
                aria-hidden="true"
                class="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"
              ></div>
              <div
                aria-hidden="true"
                class="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
              ></div>
            </label>

            <div class="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-white border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
              <div class="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                <ul class=" pt-32 space-y-8 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
                  <li>
                    <Link href="/">HOME</Link>
                  </li>
                  <li>
                    <Link href="#">SERVICES</Link>
                  </li>
                  <li>
                    <Link href="/about">ABOUT</Link>
                  </li>
                  <li>
                    <Link href="/investment">STARTUP INVESTMENT</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
