import Navbar from "../components/navbar"
import Intro from "./#/intro"
import About from "./#/about"
import Portfolio from "./#/portfolio"
import BTP from "./#/btp"
import Contact from "./#/contact"
import GeneratedQuote from "@/components/generated_quote";
import ResumeDownload from "@/components/resume_download";
// import Footer from "@/components/footer"

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col justify-center gap-[32px] row-start-2 items-center">
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
