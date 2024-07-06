import Image from "next/image";

import { useTheme } from "next-themes";
import ThemeSwitch from "@/components/ThemeSwitch";
import NavBar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OurClient from "@/components/OurClient";
import Community from "@/components/Community";
import Unlock from "@/components/Unlock";
import Achievments from "@/components/Achievments";

export default function Home() {
  return (
    <main className="flex w-full flex-col mx-auto ">
      <NavBar />
      <HeroSection />
      <OurClient />
      <Community />
      <Unlock />
      <Achievments />
    </main>
  );
}
