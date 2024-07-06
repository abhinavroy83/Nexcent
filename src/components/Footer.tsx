import icon from "../../public/Icon.png";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-green-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto text-center">
          <p className="text-6xl font-bold mb-4">
            Pellentesque suscipit <br /> fringilla libero eu.
          </p>
          <button className="bg-green-500 text-white font-semibold py-4 px-6 rounded">
            Get a Demo →
          </button>
        </div>
      </header>

      <footer className="bg-gray-800 dark:bg-gray-700 text-gray-300 dark:text-gray-400 py-12">
        <div className="container mx-auto grid grid-cols-2 lg:grid lg:grid-cols-4 justify-between">
          <div>
            <div className=" flex pb-6">
              <Image src={icon} alt="x" width={40} height={40} />
              <p className=" text-3xl font-semibold px-2 ">Nexcent</p>
            </div>{" "}
            <p>Copyright © 2020 Nexcent ltd. All rights reserved</p>
            <div className="flex space-x-4 mt-10">
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
            <h2 className="text-white text-lg font-semibold mb-4">Company</h2>
            <ul>
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
          <div className=" mt-6 lg:mt-0">
            <h2 className="text-white text-lg font-semibold mb-4">Support</h2>
            <ul>
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
          <div className=" mt-6 lg:mt-0">
            <h2 className="text-white text-lg font-semibold mb-4">
              Stay up to date
            </h2>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-l bg-gray-700 dark:bg-gray-600 text-white dark:text-gray-200"
              />
              <button className="bg-green-500 text-white px-4 py-2 rounded-r">
                →
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
