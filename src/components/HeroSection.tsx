import Image from "next/image";
import Illustration from "../../public/Illustration.png";

function HeroSection() {
  return (
    <div className="w-full  bg-green-50 py-14 dark:bg-gray-900 text-gray-900 dark:text-gray-100 ">
      <div className=" flex max-w-7xl justify-between items-center mx-auto ">
        <div>
          <div className=" px-14 mt-5 lg:mt-0">
            <p className=" text-6xl font-medium py-1">Lesson and insights</p>
            <p className=" text-6xl font-medium text-green-500 py-1 ">
              from 8 years
            </p>
            <p className=" py-6 text-sm text-gray-600">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button className=" rounded-md py-3 px-7 bg-green-500 text-white">
              Register
            </button>
          </div>
        </div>
        <div className=" py-10 px-6">
          <Image src={Illustration} alt="not avl" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
