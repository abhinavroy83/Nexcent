import React from "react";
import Image from "next/image";
import icon from "../../public/Vector (2).png";
import icon3 from "../../public/Vector (3).png";
import icon4 from "../../public/Vector (4).png";
import icon2 from "../../public/Group 2.png";
function Achievments() {
  return (
    <div className=" w-full py-16 bg-green-50 px-2 dark:bg-gray-900 text-gray-900 dark:text-gray-100 ">
      <div className=" flex max-w-7xl justify-between items-center mx-auto">
        <div>
          <p className="text-3xl lg:text-4xl text-gray-700 font-bold py-1 dark:text-white">
            Helping a local <br />
            <span className=" text-green-500 py-1">
              business reinvent itself
            </span>
          </p>
          <p className=" text-sm text-gray-700 ">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className=" grid grid-cols-2 gap-6 lg:gap-14 lg:grid-cols-2 ">
          <div className=" flex justify-center items-center gap-4">
            <div>
              <Image src={icon} alt="x" width={58} height={58} />
            </div>
            <div>
              <p className="text-2xl lg:text-3xl py-1 font-bold text-gray-800 dark:text-white">
                2,245,341
              </p>
              <p className=" text-xl  text-gray-600 font-normal py-1 dark:text-white ">
                Members
              </p>
            </div>
          </div>
          <div className=" flex justify-center items-center gap-4">
            <div>
              <Image src={icon2} alt="x" width={58} height={58} />
            </div>
            <div>
              <p className="text-2xl lg:text-3xl py-1 font-bold text-gray-800 dark:text-white ">
                46,328
              </p>
              <p className=" text-xl  text-gray-600 font-normal py-1 dark:text-white">
                Clubs
              </p>
            </div>
          </div>
          <div className=" flex justify-center items-center gap-4">
            <div>
              <Image src={icon3} alt="x" width={58} height={58} />
            </div>
            <div>
              <p className="text-2xl lg:text-3xl py-1 font-bold text-gray-800 dark:text-white">
                828,867
              </p>
              <p className=" text-xl  text-gray-600 font-normal py-1 dark:text-white">
                Event Bookings
              </p>
            </div>
          </div>
          <div className=" flex justify-center items-center gap-4 ml-6">
            <div>
              <Image src={icon4} alt="x" width={52} height={52} />
            </div>
            <div>
              <p className="text-xl lg:text-3xl py-1 font-bold text-gray-800 dark:text-white ">
                1,926,436
              </p>
              <p className=" text-xl  text-gray-600 font-normal py-1 dark:text-white">
                Payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievments;
