import React from "react";
import Image from "next/image";
import icon from "../../public/unlockicon.png";

function Unlock() {
  return (
    <div className=" w-full py-6 px-2 ">
      <div className=" flex max-w-7xl  justify-between items-center mx-auto px-3  ">
        <div>
          <Image src={icon} alt="x" width={1200} height={1200} />
        </div>
        <div>
          <p className=" text-4xl font-semibold text-gray-700 max-w-screen-sm ">
            The unseen of spending three years at Pixelgrade
          </p>
          <p className=" text-sm  max-w-2xl text-gray-500 text-justify py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className=" py-3 px-7 bg-green-500 text-white ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Unlock;