'use client'

import Image from "next/image";
import { useState, useEffect } from "react";

const SCREENSHOTS = [
  { src: "/screenshot-2.png", alt: "OpStap kaart scherm" },
  { src: "/screenshot.png", alt: "OpStap inchecken scherm" },
];

export default function PhoneMockup() {
  const [index, setIndex] = useState(0);
  const [zichtbaar, setZichtbaar] = useState(true);

  useEffect(() => {
    // Kies een willekeurige screenshot bij mount
    setIndex(Math.floor(Math.random() * SCREENSHOTS.length));
  }, []);

  function wisselScherm() {
    setZichtbaar(false);
    setTimeout(() => {
      setIndex(prev => (prev + 1) % SCREENSHOTS.length);
      setZichtbaar(true);
    }, 200);
  }

  const scherm = SCREENSHOTS[index];

  return (
    <div className="relative">
      {/* Glow achter telefoon */}
      <div className="absolute inset-0 bg-[#E8611A]/15 blur-3xl rounded-full scale-75 pointer-events-none" />

      {/* iPhone frame */}
      <div className="relative w-[260px] sm:w-[300px] mx-auto">
        <div className="relative bg-[#1C1C1E] rounded-[52px] p-[10px] shadow-2xl shadow-black/60 border border-white/10">
          {/* Scherm met screenshot */}
          <div
            className="rounded-[44px] overflow-hidden aspect-[9/19.5] relative bg-white cursor-pointer"
            onClick={wisselScherm}
            title="Klik om te wisselen"
          >
            <Image
              src={scherm.src}
              alt={scherm.alt}
              fill
              className={`object-cover object-top transition-opacity duration-200 ${zichtbaar ? "opacity-100" : "opacity-0"}`}
              priority
            />
          </div>
        </div>

        {/* Zijknoppen */}
        <div className="absolute right-[-3px] top-[90px] w-[3px] h-14 bg-[#2C2C2E] rounded-l-sm" />
        <div className="absolute left-[-3px] top-[80px] w-[3px] h-8 bg-[#2C2C2E] rounded-r-sm" />
        <div className="absolute left-[-3px] top-[100px] w-[3px] h-12 bg-[#2C2C2E] rounded-r-sm" />
        <div className="absolute left-[-3px] top-[124px] w-[3px] h-12 bg-[#2C2C2E] rounded-r-sm" />

        {/* Dots indicator */}
        <div className="flex justify-center gap-1.5 mt-4">
          {SCREENSHOTS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (i === index) return;
                setZichtbaar(false);
                setTimeout(() => { setIndex(i); setZichtbaar(true); }, 200);
              }}
              className={`rounded-full transition-all duration-300 ${
                i === index
                  ? "w-4 h-1.5 bg-[#E8611A]"
                  : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
