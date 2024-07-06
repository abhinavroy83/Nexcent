import React from "react";
import Image from "next/image";
import icon from "../../public/image 9.png";
import Logo from "../../public/Logo.png";
import Logo1 from "../../public/Logo (1).png";
import Logo2 from "../../public/Logo (2).png";
import Logo3 from "../../public/Logo (3).png";
import Logo4 from "../../public/Logo (4).png";
import Logo5 from "../../public/Logo (5).png";
import right from "../../public/Right.png";

function Customer() {
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
    <div className=" w-full py-6 px-2 bg-green-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 ">
      <div className=" flex max-w-7xl  justify-between items-center mx-auto  ">
        <div>
          <Image src={icon} alt="x" width={326} height={326} />
        </div>
        <div>
          <p className=" text-sm  max-w-2xl text-gray-500 text-justify dark:text-white">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <p className=" text-green-500 text-xl font-semibold py-3">
            Tim Smith
          </p>
          <p className=" text-sm text-gray-500">
            British Dragon Boat Racing Association
          </p>
          <div className=" flex justify-evenly items-center w-full">
            {locodata?.map((item, index) => (
              <div className=" py-5" key={index}>
                <Image src={item.icon} alt="x" width={48} height={48} />
              </div>
            ))}
            <div className=" flex">
              <p className=" text-xl text-green-600 font-semibold">
                Meet all customers
              </p>
              <Image src={right} alt="x" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
