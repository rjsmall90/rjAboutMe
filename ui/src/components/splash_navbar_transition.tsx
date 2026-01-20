import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ScrollToTop from "./scroll_to_top";
import HomePage from "../pages/home"
// import Home from "@/pages";

function SplashToNavbar() {
  const titles = ["Father?", "Designer?", "Co-Founder?", "...Engineer"];
  const [currentTitle, setCurrentTitle] = useState(0);
  const [splashComplete, setSplashComplete] = useState<boolean>(false);
  const [showNavItems, setShowNavItems] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [showHomePage, setShowHomePage] = useState<boolean>(false);

  // Check if splash was already shown this session
  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    if (hasSeenSplash === "true") {
      setSplashComplete(true);
      setShowNavItems(true);
      setShowHomePage(true);
    }
  }, []);

  // Handle scroll events for navbar height change
  useEffect(() => {
    if (!splashComplete) return;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [splashComplete]);


  const handleAnimationEnd = (event: React.AnimationEvent<HTMLHeadingElement>) => {
    if (event.animationName === "typing") {
      const isLastWord = currentTitle === titles.length - 1;

      if (!isLastWord) {
        setCurrentTitle(currentTitle + 1);
      } else {
        // Last word complete, wait 300ms then start transformation
        setTimeout(() => {
          setSplashComplete(true);
          sessionStorage.setItem("hasSeenSplash", "true");
          
          // Fade in nav items after morph completes
          setTimeout(() => {
            setShowNavItems(true);
            // Fade in home page content
            setTimeout(() => {
              setShowHomePage(true);
            }, 200);
          }, 1000); // Match the morph duration
        }, 300);
      }
    }
  };

  const title = () => {
    return (
      <p
        onAnimationEnd={handleAnimationEnd}
        key={currentTitle}
        className="page-title typewriter"
      >
        {titles[currentTitle]}
      </p>
    );
  };

  return (
    <>
      <motion.nav
        layout
        initial={false}
        animate={{
          height: splashComplete ? (isScrolled ? "3.5rem" : "7rem") : "100vh",
          backgroundColor: splashComplete ? "#f3f4f6" : "#2c2c2c",
        }}
        transition={{
          duration: splashComplete ? 0.3 : 1,
          ease: "easeInOut",
        }}
        className={`${
          splashComplete ? "fixed top-0 left-0 shadow-md" : "flex"
        } "fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-gray-100 text-black flex items-center justify-between px-6 shadow-md"`}
      >
        <motion.div
          layout
          className={`${
            splashComplete
              ? "w-full flex items-center justify-between px-6"
              : "flex flex-col items-center justify-center"
          }`}
        >
          <motion.h3
            layout
            animate={{
              color: splashComplete ? "#000000" : "#ffffff",
              fontSize: splashComplete ? "1.25rem" : "1.125rem",
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className={`font-bold ${splashComplete ? "" : "inline-block"}`}
          >
            {"{"}RJThe
            {splashComplete ? "Engineer" : title()}
            {"}"}
          </motion.h3>

          <AnimatePresence>
            {showNavItems && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex gap-6 text-lg"
              >
                <li>
                  <ScrollToTop />
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.nav>

      {/* Spacer for fixed navbar */}
      {splashComplete && (
        <div className={isScrolled ? "h-14" : "h-28"} />
      )}

      {/* Home page content */}
      <AnimatePresence>
        {showHomePage && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <HomePage />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}

export default SplashToNavbar;