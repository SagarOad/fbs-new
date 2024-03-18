import React from "react";

const Footer = () => {
  return (
    <div className=" relative mt-14">
      <svg
        className="footer-bg-blue z-[-33] absolute bottom-0 d-none d-lg-block"
        viewBox="0 0 1440 405"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M764 177.961C551 -15.4529 138.667 -26.0393 0 29.9607V443.961H1440V231C1330.67 252.333 1042.4 430.761 764 177.961Z"
          fill="#002244"
        ></path>
      </svg>

      <div className=" w-[70%] mx-auto py-36">
        <footer className="">
          <div>
            <ul class="text-gray-500 font-medium">
              <li class="mb-4">
                <a href="#" class="font-semibold text-white ">
                  About
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="font-semibold text-white">
                  Careers
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="font-semibold text-white">
                  Brand Center
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="font-semibold text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
