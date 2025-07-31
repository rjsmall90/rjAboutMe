// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/navbar"
import Intro from "./#/intro"
import About from "./#/about"
import Portfolio from "./#/portfolio"
import Blog from "./#/blog";
import BTP from "./#/btp"

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Intro />
        <About />
        <Portfolio />
        <Blog />
        <BTP />
      </main>
    </div>
  );
}
