"use client";
import { useRef, useEffect, useState } from "react";

interface SlideDownProps {
  children: React.ReactNode;
  threshold?: number;
  duration?: number;
}

export default function SlideDown({
  children,
  threshold = 0.1,
  duration = 1000
}: SlideDownProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className="overflow-hidden"
      style={{
        height: isVisible ? "auto" : "0",
        transition: `height ${duration}ms ease-in-out`
      }}
    >
      {children}
    </div>
  );
}
