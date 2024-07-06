import Image from "next/image";

import { useTheme } from "next-themes";
import ThemeSwitch from "@/components/ThemeSwitch";
import NavBar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OurClient from "@/components/OurClient";
import Community from "@/components/Community";
import Unlock from "@/components/Unlock";
import Achievments from "@/components/Achievments";
import Calender from "@/components/Calender";
import Customer from "@/components/Customer";
import Community_update from "@/components/Community_update";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <OurClient />
      <Community />
      <Unlock />
      <Achievments />
      <Calender />
      <Customer />
      <Community_update />
      <Footer />
    </>
  );
}
