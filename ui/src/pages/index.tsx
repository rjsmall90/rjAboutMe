// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/navbar"
import Intro from "./routes/intro"
import About from "./routes/about"
import Portfolio from "./routes/portfolio"
import Blog from "./routes/blog";
import BTP from "./routes/btp"

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
