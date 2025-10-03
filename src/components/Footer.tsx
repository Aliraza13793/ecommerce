"use client";
import React from "react";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="px-4 md:px-6 bg-gray-50 mt-16 md:mt-24 pt-16 md:pt-24">
      <div className="max-w-[1220px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-8 text-center sm:text-left">
        <div className="font-bold text-gray-900 text-lg">
          Dine Market
          <p className="font-normal mt-3 text-gray-500 text-sm md:text-base">
            Small, artisan label that is good for all.
          </p>
          <div className="flex mt-6 text-2xl md:text-3xl gap-4 justify-center sm:justify-start">
            <FaGithub className="cursor-pointer text-gray-600 hover:text-gray-900 transition-colors" />
            <FaFacebook className="cursor-pointer text-gray-600 hover:text-blue-600 transition-colors" />
            <FaLinkedin className="cursor-pointer text-gray-600 hover:text-blue-700 transition-colors" />
          </div>
        </div>

        <div className="font-bold text-gray-900 text-lg">
          Company
          <p className="font-normal mt-4 text-gray-600 text-sm md:text-base cursor-pointer hover:text-gray-900 transition-colors">About us</p>
          <p className="font-normal mt-3 text-gray-600 text-sm md:text-base cursor-pointer hover:text-gray-900 transition-colors">
            Terms & Condtions
          </p>
          <p className="font-normal mt-3 text-gray-600 text-sm md:text-base cursor-pointer hover:text-gray-900 transition-colors">
            Privacy Policy
          </p>
          <p className="font-normal mt-3 text-gray-600 text-sm md:text-base cursor-pointer hover:text-gray-900 transition-colors">
            Contact Us
          </p>
        </div>

        <div className="font-bold text-gray-900 text-lg">
          Customer Support
          <p className="font-normal mt-4 text-gray-600 text-sm md:text-base cursor-pointer hover:text-gray-900 transition-colors">
            24-hr Service
          </p>
          <p className="font-normal mt-3 text-gray-600 text-sm md:text-base cursor-pointer hover:text-gray-900 transition-colors">
            Support Carrer
          </p>
          <p className="font-normal mt-3 text-gray-600 text-sm md:text-base cursor-pointer hover:text-gray-900 transition-colors">
            Return Policy
          </p>
          <p className="font-normal mt-3 text-gray-600 text-sm md:text-base cursor-pointer hover:text-gray-900 transition-colors">
            Shipping Policy
          </p>
          <p className="font-normal mt-3 text-gray-600 text-sm md:text-base cursor-pointer hover:text-gray-900 transition-colors">
            Quick Chat
          </p>
        </div>

        <div className="font-bold text-gray-900 text-lg">
          Contact
          <p className="font-normal mt-4 text-gray-600 text-sm md:text-base cursor-pointer hover:text-gray-900 transition-colors">Wahtsapp</p>
          <p className="font-normal mt-3 text-gray-600 text-sm md:text-base cursor-pointer hover:text-gray-900 transition-colors">Facebook</p>
          <p className="font-normal mt-3 text-gray-600 text-sm md:text-base cursor-pointer hover:text-gray-900 transition-colors">Twitter</p>
          <p className="font-normal mt-3 text-gray-600 text-sm md:text-base cursor-pointer hover:text-gray-900 transition-colors">Instagram</p>
          <p className="font-normal mt-3 text-gray-600 text-sm md:text-base cursor-pointer hover:text-gray-900 transition-colors">Youtube</p>
        </div>
      </div>

      <div className="pb-8">
        <hr className="max-w-[1220px] mx-auto border-gray-300" />
        <div className="max-w-[1220px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 text-center sm:text-left">
          <div className="font-semibold text-gray-700 text-sm md:text-base">
            Copyright 2024
            <p className="font-normal text-gray-600 mt-1">
              Dine Market
            </p>
          </div>
          <div className="font-semibold text-gray-700 text-sm md:text-base">
            Designed by:
            <p className="font-normal text-gray-600 mt-1">
              Dine Studio
            </p>
          </div>
          <div className="font-semibold text-gray-700 text-sm md:text-base sm:col-span-2 lg:col-span-1">
            Code by:
            <p className="font-normal text-gray-600 mt-1">
              Aliraza 13793 on Github
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
