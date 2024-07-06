import React from "react";
import Image from "next/image";
import pic1 from "../../public/image 18.png";
import pic2 from "../../public/image 19.png";
import pic3 from "../../public/image 20.png";
import right from "../../public/Right.png";

function Community_update() {
  return (
    <div className=" w-full py-6  mx-auto px-2 ">
      <div className=" flex flex-col max-w-7xl justify-between items-center mx-auto  ">
        <div className=" mx-auto lg:max-w-2xl">
          <p className=" text-4xl font-semibold text-center py-1">
            Caring is the new marketing
          </p>
          <p className=" text-sm text-gray-500 text-center py-2">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.​
          </p>
        </div>
        <div className="flex flex-wrap lg:flex justify-between gap-4 lg:gap-8">
          <div className="relative my-2 h-96 ">
            <Image src={pic1} alt="x" />
            <div className="absolute  bottom-0 w-full flex justify-center">
              <div className="w-80 h-44 rounded-md bg-slate-200 flex flex-col items-center justify-center">
                <p className="text-xl font-semibold text-center dark:text-gray-700 py-2">
                  Creating Streamlined Safeguarding Processes with OneRen
                </p>
                <div className=" flex">
                  <p className=" text-xl text-green-600 font-semibold">
                    Read More
                  </p>
                  <Image src={right} alt="x" width={24} height={24} />
                </div>
              </div>
            </div>
          </div>
          <div className="relative my-2 h-96 ">
            <Image src={pic2} alt="x" />
            <div className="absolute  bottom-0 w-full flex justify-center">
              <div className="w-80 h-44 rounded-md bg-slate-200 flex flex-col items-center justify-center">
                <p className="text-xl font-semibold text-center dark:text-gray-700 py-2">
                  What are your safeguarding responsibilities and how can you
                  manage them?{" "}
                </p>
                <div className=" flex">
                  <p className=" text-xl text-green-600 font-semibold">
                    Read More
                  </p>
                  <Image src={right} alt="x" width={24} height={24} />
                </div>
              </div>
            </div>
          </div>
          <div className="relative my-2 h-96 ">
            <Image src={pic3} alt="x" />
            <div className="absolute  bottom-0 w-full flex justify-center">
              <div className="w-80 h-44  rounded-md bg-slate-200 flex flex-col items-center justify-center">
                <p className="text-xl font-semibold text-center dark:text-gray-700 py-2">
                  Revamping the Membership Model with Triathlon Australia{" "}
                </p>
                <div className=" flex">
                  <p className=" text-xl text-green-600 font-semibold">
                    Read More
                  </p>
                  <Image src={right} alt="x" width={24} height={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community_update;
