import ThemeSwitch from "./ThemeSwitch";
import icon from "../../public/Icon.png";
import Image from "next/image";
import { Button } from "./ui/button";

function NavBar() {
  return (
    <div className=" w-full py-6 bg-green-50 px-2 ">
      <div className=" flex max-w-7xl justify-between items-center mx-auto  ">
        <div className=" flex">
          <Image src={icon} alt="x" width={40} height={40} />
          <p className=" text-3xl font-semibold px-2 ">Nexcent</p>
        </div>
        <div className="flex gap-7">
          <p className=" text-xl">Home</p>
          <p className=" text-xl">Service</p>
          <p className=" text-xl">Feature</p>
          <p className=" text-xl">Product</p>
          <p className=" text-xl">Testimonial</p>
          <p className=" text-xl">FAQ</p>
        </div>
        <div className="flex gap-2">
          <button className=" py-3 px-5 text-green-500">Login</button>
          <button className=" rounded-md py-3 px-7 bg-green-500 text-white">
            Signup
          </button>
          <div className=" flex justify-center items-center">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
