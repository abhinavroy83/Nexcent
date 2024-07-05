import React from "react";
import Image from "next/image";
import cmi1 from "../../public/CmIcon1.png";
import cmi2 from "../../public/CmIcon2.png";
import cmi3 from "../../public/CmIcon3.png";

function Community() {
  return (
    <div className=" w-full py-6  px-2 ">
      <div className=" flex flex-col max-w-7xl justify-between items-center mx-auto">
        <div className=" flex flex-col mx-auto w-full">
          <p className=" text-gray-600 text-4xl text-center py-1 font-semibold">
            Manage your entire community
          </p>
          <p className=" text-gray-600 text-4xl text-center py-1 font-semibold">
            in a single system
          </p>
          <p className=" text-gray-500 text-xl text-center py-2">
            Who is Nextcent suitable for?
          </p>
        </div>
        <div className=" flex justify-between items-center gap-12 py-5 ">
          <div className="flex flex-col p-3 justify-center items-center max-w-80 mx-auto ">
            <Image src={cmi1} alt="x" width={65} height={56} />
            <p className=" py-2 text-3xl text-center  font-bold text-gray-600">
              Membership Organisations
            </p>
            <p className=" py-2 text-sm text-center font-normal text-gray-500 ">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="flex flex-col p-3 justify-center items-center max-w-80 mx-auto ">
            <Image src={cmi2} alt="x" width={65} height={56} />
            <p className=" py-2 text-3xl text-center  font-bold text-gray-600">
              National Associations{" "}
            </p>
            <p className=" py-2 text-sm text-center font-normal text-gray-500 ">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="flex flex-col p-3 justify-center items-center max-w-80 mx-auto ">
            <Image src={cmi3} alt="x" width={65} height={56} />
            <p className=" max-w-56 py-2 text-3xl text-center  font-bold text-gray-600">
              Clubs And Groups
            </p>
            <p className=" py-2 text-sm text-center font-normal text-gray-500 ">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
