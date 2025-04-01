"use client";
import { useRef, useEffect } from "react";
import ReactLenis from 'lenis';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from 'split-type';

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new ReactLenis({
      lerp: 0.1,
      smoothWheel: true
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // GSAP animation for the text
  useGSAP(() => {
    if (titleRef.current) {
      // Split the text into characters
      const splitText = new SplitType(titleRef.current, {
        types: 'chars',
        tagName: 'span'
      });

      // Hide initially
      gsap.set(splitText.chars, {
        opacity: 0,
        y: 50
      });

      // Animate in
      gsap.to(splitText.chars, {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 1.8,
        ease: "power3.out"
      });
    }
  }, []);

  return (
    <div id="home" className="w-full h-screen flex justify-center items-center ">
      <h1 
        ref={titleRef}
        className="title text-white text-8xl font-bold"
      >
        Xolani
      </h1>
    </div>
  );
}