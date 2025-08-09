"use client";
import { useRef, useEffect, useState } from "react";

interface SlideDownProps {
  children: React.ReactNode;
  threshold?: number;
  className?: string;
}

export default function SlideDown({
  children,
  className = "",
  threshold = 0.1
}: SlideDownProps){
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`transition: all .5s ease-in-out transform ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}
