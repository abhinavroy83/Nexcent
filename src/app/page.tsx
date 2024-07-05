import Image from "next/image";

import { useTheme } from "next-themes";
import ThemeSwitch from "@/components/ThemeSwitch";
import NavBar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex w-full flex-col mx-auto ">
      <NavBar />
    </main>
  );
}
