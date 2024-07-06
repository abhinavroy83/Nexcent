import React from "react";
import Logo from "../../public/Logo.png";
import Logo1 from "../../public/Logo (1).png";
import Logo2 from "../../public/Logo (2).png";
import Logo3 from "../../public/Logo (3).png";
import Logo4 from "../../public/Logo (4).png";
import Logo5 from "../../public/Logo (5).png";
import Image from "next/image";

function OurClient() {
  const locodata = [
    {
      icon: Logo,
    },
    {
      icon: Logo1,
    },
    {
      icon: Logo2,
    },
    {
      icon: Logo3,
    },
    {
      icon: Logo4,
    },
    {
      icon: Logo5,
    },
    {
      icon: Logo3,
    },
  ];

  return (
    <div className=" w-full py-6  mx-auto px-2 dark:bg-gray-900  dark:text-white ">
      <div className=" flex flex-col max-w-7xl justify-between items-center mx-auto  ">
        <div className=" mx-auto ">
          <p className=" text-4xl text-center font-semibold text-gray-700  dark:text-white">
            Our Clients
          </p>
          <p className=" text-xl text-gray-500 py-4 dark:text-white ">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className=" flex justify-evenly items-center w-full">
          {locodata?.map((item, index) => (
            <div className=" py-5" key={index}>
              <Image src={item.icon} alt="x" width={48} height={48} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurClient;
