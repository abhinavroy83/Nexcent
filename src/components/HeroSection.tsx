"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Illustration from "../../public/Illustration.png";

function HeroSection() {
  return (
    <div className="w-full bg-green-50 py-14 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
      >
        <div className="flex flex-col lg:flex-row max-w-full justify-around items-center mx-auto space-y-10 lg:space-y-0 lg:space-x-10 px-4 lg:px-0">
          <div className="px-4 lg:px-14 mt-5 lg:mt-0 text-start">
            <p className="text-3xl lg:text-6xl font-medium py-1">
              Lesson and insights
            </p>
            <p className="text-3xl lg:text-6xl font-medium text-green-500 py-1">
              from 8 years
            </p>
            <p className="py-6 text-sm lg:text-base text-gray-600">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button className="rounded-md py-3 px-7 bg-green-500 text-white">
              Register
            </button>
          </div>
          <div className="py-10 px-6">
            <Image src={Illustration} alt="Illustration" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row max-w-full justify-around items-center mx-auto">
          <div className="px-4 lg:px-14 mt-5 lg:mt-0 text-start">
            <p className="text-3xl lg:text-6xl font-medium py-1">
              Secrets to success <br />
              <span className="text-3xl lg:text-6xl font-medium text-green-500 py-1">
                from industry experts
              </span>
            </p>
            <p className="py-6 text-sm lg:text-base text-gray-600">
              Discover the keys to achieving your photography goals.
            </p>
            <button className="rounded-md py-3 px-7 bg-green-500 text-white">
              Learn More
            </button>
          </div>
          <div className="py-10 px-6">
            <Image src={Illustration} alt="Illustration" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row max-w-full justify-around items-center mx-auto">
          <div className="px-4 lg:px-14 mt-5 lg:mt-0 text-start">
            <p className="text-3xl lg:text-6xl font-medium py-1">
              Mastering the craft
            </p>
            <p className="text-3xl lg:text-6xl font-medium text-green-500 py-1">
              tips from professionals
            </p>
            <p className="py-6 text-sm lg:text-base text-gray-600">
              Enhance your skills with expert advice and strategies.
            </p>
            <button className="rounded-md py-3 px-7 bg-green-500 text-white">
              Join Now
            </button>
          </div>
          <div className="py-10 px-6">
            <Image src={Illustration} alt="Illustration" />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default HeroSection;
