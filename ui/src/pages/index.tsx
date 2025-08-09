// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/navbar"
import Intro from "./#/intro"
import About from "./#/about"
import Portfolio from "./#/portfolio"
import BTP from "./#/btp"
import Contact from "./#/contact"
import GeneratedQuote from "@/components/generated_quote";
import ResumeDownload from "@/components/resume_download";
import Footer from "@/components/footer"

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
      <main className="flex flex-col justify-center gap-[32px] row-start-2 items-center sm:items-start">
        <Intro />
        <GeneratedQuote />
        <About />
        <ResumeDownload />
        <Portfolio />
        <BTP />
        <Contact />
      </main>
    </div>
  );
}
