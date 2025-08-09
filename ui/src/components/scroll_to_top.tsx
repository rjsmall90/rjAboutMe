"use client";
import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

<<<<<<< HEAD
<<<<<<< HEAD
export default function ScrollToTop(){
  const [isVisible, setIsVisible] = useState<boolean>(false);
=======
export default function ScrollToTop(): JSX.Element | null {
  const [isVisible, setIsVisible] = useState(false);
>>>>>>> dfba3d4 (fade-in transitions and css cleanup complete)
=======
export default function ScrollToTop(){
  const [isVisible, setIsVisible] = useState<boolean>(false);
>>>>>>> 3c41706 (prod build ready)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
<<<<<<< HEAD
<<<<<<< HEAD
      className="fixed bottom-6 right-6 p-3 bg-[#2c2c2c] text-[#F7F7F7] rounded-full shadow-lg hover:bg-gray-800 transition-colors"
=======
      className="fixed bottom-6 right-6 p-3 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors"
>>>>>>> dfba3d4 (fade-in transitions and css cleanup complete)
=======
      className="fixed bottom-6 right-6 p-3 bg-[#2c2c2c] text-[#F7F7F7] rounded-full shadow-lg hover:bg-gray-800 transition-colors"
>>>>>>> 3c41706 (prod build ready)
      aria-label="Scroll to top"
    >
      <ArrowUpIcon className="w-6 h-6" />
    </button>
  );
}
