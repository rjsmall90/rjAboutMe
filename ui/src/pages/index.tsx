import Navbar from "../components/navbar"
import Intro from "./#/intro"
import About from "./#/about"
import Portfolio from "./#/portfolio"
import BTP from "./#/btp"
import Contact from "./#/contact"
import GeneratedQuote from "@/components/generated_quote";
import ResumeDownload from "@/components/resume_download";
<<<<<<< HEAD
<<<<<<< HEAD
import Footer from "@/components/footer"
=======

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
>>>>>>> dfba3d4 (fade-in transitions and css cleanup complete)
=======
// import Footer from "@/components/footer"
>>>>>>> 3c41706 (prod build ready)

export default function Home() {
  return (
    <div>
      <Navbar />
<<<<<<< HEAD
      <main className="flex flex-col justify-center gap-8 md:gap-[32px] row-start-2 items-center w-full">
=======
      <main className="flex flex-col justify-center gap-[32px] row-start-2 items-center">
>>>>>>> 3c41706 (prod build ready)
        <Intro />
        <GeneratedQuote />
        <About />
        <ResumeDownload />
        <Portfolio />
<<<<<<< HEAD
        <ResumeDownload />
        <BTP />
        <Contact />
        <Footer />
=======
        <BTP />
        <Contact />
>>>>>>> dfba3d4 (fade-in transitions and css cleanup complete)
      </main>
    </div>
  );
}
