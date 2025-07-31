"use client";

import { useEffect, useState } from "react";

export default function Navbar(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect((): (() => void) => {
    const handleScroll = (): void => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-gray-100 text-black flex items-center justify-between px-6 shadow-md ${
        isScrolled ? "h-14" : "h-28"
      }`}
    >
      <div className="text-xl font-bold">MyLogo</div>
      <ul className="flex gap-6 text-lg">
        <li>
          <a href="#intro" className="hover:underline">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:underline">About</a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
