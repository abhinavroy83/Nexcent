import React from "react";
import Image from "next/image";
import icon from "../../public/Icon.png";

function Footer() {
  return (
    <div className="w-full py-6">
      <div className="flex flex-col justify-between items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden">
        <header className="bg-green-50 dark:bg-gray-800 py-16 w-full">
          <div className="container mx-auto text-center px-4">
            <p className="text-4xl md:text-6xl font-bold mb-4">
              Pellentesque suscipit <br className="hidden md:block" /> fringilla
              libero eu.
            </p>
            <button className="bg-green-500 text-white font-semibold py-4 px-6 rounded">
              Get a Demo →
            </button>
          </div>
        </header>

        <footer className="bg-gray-800 dark:bg-gray-700 text-gray-300 dark:text-gray-400 py-12 w-full">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            <div>
              <div className="flex pb-6 items-center justify-center md:justify-start">
                <Image src={icon} alt="Nexcent Icon" width={40} height={40} />
                <p className="text-3xl font-semibold px-2">Nexcent</p>
              </div>
              <p className="text-center md:text-left">
                Copyright © 2020 Nexcent ltd. All rights reserved
              </p>
              <div className="flex justify-center md:justify-start space-x-4 mt-10">
                <a href="#">
                  <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/facebook.png"
                    alt="Facebook"
                    className="h-6"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png"
                    alt="Twitter"
                    className="h-6"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/instagram.png"
                    alt="Instagram"
                    className="h-6"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png"
                    alt="YouTube"
                    className="h-6"
                  />
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-white text-lg font-semibold mb-4 text-center md:text-left">
                Company
              </h2>
              <ul className="text-center md:text-left">
                <li className="mb-2">
                  <a href="#">About us</a>
                </li>
                <li className="mb-2">
                  <a href="#">Blog</a>
                </li>
                <li className="mb-2">
                  <a href="#">Contact us</a>
                </li>
                <li className="mb-2">
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
              </ul>
            </div>
            <div className="mt-6 lg:mt-0">
              <h2 className="text-white text-lg font-semibold mb-4 text-center md:text-left">
                Support
              </h2>
              <ul className="text-center md:text-left">
                <li className="mb-2">
                  <a href="#">Help center</a>
                </li>
                <li className="mb-2">
                  <a href="#">Terms of service</a>
                </li>
                <li className="mb-2">
                  <a href="#">Legal</a>
                </li>
                <li className="mb-2">
                  <a href="#">Privacy policy</a>
                </li>
                <li>
                  <a href="#">Status</a>
                </li>
              </ul>
            </div>
            <div className="mt-6 lg:mt-0">
              <h2 className="text-white text-lg font-semibold mb-4 text-center md:text-left">
                Stay up to date
              </h2>
              <div className="flex flex-col md:flex-row justify-center md:justify-start">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full md:w-auto px-4 py-2 rounded-l bg-gray-700 dark:bg-gray-600 text-white dark:text-gray-200"
                />
                <button className="bg-green-500 text-white px-4 py-2 rounded-r mt-4 md:mt-0">
                  →
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
