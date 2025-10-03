"use client";
import React from "react";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="px-4">
      <div className="max-w-[1260px] mx-auto my-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-20 md:mt-36 mb-0 py-4">
        <div className="item-start font-bold text-gray-700">
          Dine Market
          <p className="item-start font-normal content-around text-wrap mt-3 text-gray-500 text-sm md:text-base">
            Small, artisan label that is good for all.
          </p>
          <div className="inline-flex mt-7 text-3xl md:text-4xl gap-3">
            <FaGithub className="cursor-pointer hover:text-gray-900 transition-colors" />
            <FaFacebook className="cursor-pointer hover:text-blue-600 transition-colors" />
            <FaLinkedin className="cursor-pointer hover:text-blue-700 transition-colors" />
          </div>
        </div>

        <div className="item-start font-bold text-gray-700">
          Company
          <p className="item-start font-normal mt-3 text-gray-500 text-sm md:text-base cursor-pointer hover:text-gray-700">About us</p>
          <p className="item-start font-normal mt-3 text-gray-500 text-sm md:text-base cursor-pointer hover:text-gray-700">
            Terms & Condtions
          </p>
          <p className="item-start font-normal mt-3 text-gray-500 text-sm md:text-base cursor-pointer hover:text-gray-700">
            Privacy Policy
          </p>
          <p className="item-start font-normal mt-3 text-gray-500 text-sm md:text-base cursor-pointer hover:text-gray-700">
            Contact Us
          </p>
        </div>

        <div className="item-start font-bold text-gray-700">
          Customer Support
          <p className="item-start font-normal mt-3 text-gray-500 text-sm md:text-base cursor-pointer hover:text-gray-700">
            24-hr Service
          </p>
          <p className="item-start font-normal mt-3 text-gray-500 text-sm md:text-base cursor-pointer hover:text-gray-700">
            Support Carrer
          </p>
          <p className="item-start font-normal mt-3 text-gray-500 text-sm md:text-base cursor-pointer hover:text-gray-700">
            Return Policy
          </p>
          <p className="item-start font-normal mt-3 text-gray-500 text-sm md:text-base cursor-pointer hover:text-gray-700">
            Shipping Policy
          </p>
          <p className="item-start font-normal mt-3 text-gray-500 text-sm md:text-base cursor-pointer hover:text-gray-700">
            Quick Chat
          </p>
        </div>

        <div className="item-start font-bold text-gray-700">
          Contact
          <p className="item-start font-normal mt-3 text-gray-500 text-sm md:text-base cursor-pointer hover:text-gray-700">Wahtsapp</p>
          <p className="item-start font-normal mt-3 text-gray-500 text-sm md:text-base cursor-pointer hover:text-gray-700">Facebook</p>
          <p className="item-start font-normal mt-3 text-gray-500 text-sm md:text-base cursor-pointer hover:text-gray-700">Twitter</p>
          <p className="item-start font-normal mt-3 text-gray-500 text-sm md:text-base cursor-pointer hover:text-gray-700">Instagram</p>
          <p className="item-start font-normal mt-3 text-gray-500 text-sm md:text-base cursor-pointer hover:text-gray-700">Youtube</p>
        </div>
      </div>
      <div className="mb-2 mt-0">
        <hr className="max-w-[1260px] mx-auto border-gray-400" />
        <div className="max-w-[1260px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-4 text-center sm:text-left">
          <div className="item-start font-bold text-gray-500 text-sm md:text-base">
            Copyright 2024
            <p className="item-start font-normal content-around text-wrap text-gray-500">
              Dine Market
            </p>
          </div>
          <div className="item-start font-bold text-gray-500 text-sm md:text-base">
            Designed by:
            <p className="item-start font-normal content-around text-wrap text-gray-500">
              Dine Studio
            </p>
          </div>
          <div className="item-start font-bold text-gray-500 text-sm md:text-base sm:col-span-2 lg:col-span-1">
            Code by:
            <p className="item-start font-normal content-around text-wrap text-gray-500">
              Aliraza 13793 on Github
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
