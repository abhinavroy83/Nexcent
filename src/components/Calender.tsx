import React from "react";
import Image from "next/image";
import icon from "../../public/pana.png";

function Calender() {
  return (
    <div className=" w-full py-6 px-2 ">
      <div className=" flex max-w-7xl  justify-between items-center mx-auto px-3  ">
        <div>
          <Image src={icon} alt="x" width={441} height={433} />
        </div>
        <div>
          <p className=" text-4xl font-semibold text-gray-700 max-w-screen-sm  dark:text-white">
            How to design your site footer like we did{" "}
          </p>
          <p className=" text-sm  max-w-2xl text-gray-500 text-justify py-4 dark:text-white">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button className=" py-3 px-9 bg-green-500 text-white ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calender;
