"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import PixelField from "@/components/PixelField";

const slides = [
  {
    tag: "[FOUNDERS]",
    tagBg: "#39FF14",
    tagColor: "#0A0A0A",
    idx: "01 / 04",
    idxColor: "#444444",
    title: "30 FOUNDERS\nTO KNOW",
    by: "ISSUE 01 // SELECTED FOR THE WORK, NOT THE NOISE",
    border: "#2D2D2D",
    bg: "#111111",
    tagBorder: "",
  },
  {
    tag: "[BUSINESSES]",
    tagBg: "#111111",
    tagColor: "#39FF14",
    idx: "02 / 04",
    idxColor: "#39FF14",
    title: "30 BUSINESSES\nTO KNOW",
    by: "ISSUE 01 // WHAT THEY BUILD AND HOW",
    border: "#39FF14",
    bg: "#0F0F0F",
    tagBorder: "#39FF14",
  },
  {
    tag: "[STORIES]",
    tagBg: "#1A1A1A",
    tagColor: "#FF6B35",
    idx: "03 / 04",
    idxColor: "#444444",
    title: "THE STORY\nBEHIND IT",
    by: "LONG-FORM // HOW IT ACTUALLY GOT BUILT",
    border: "#2D2D2D",
    bg: "#0A0A0A",
    tagBorder: "#FF6B35",
  },
  {
    tag: "[IN THE ROOM]",
    tagBg: "#39FF14",
    tagColor: "#0A0A0A",
    idx: "04 / 04",
    idxColor: "#444444",
    title: "NOTES FROM\nTHE TRENCHES",
    by: "FOUNDER TO FOUNDER // THE PROBLEMS NOBODY POSTS",
    border: "#2D2D2D",
    bg: "#111111",
    tagBorder: "",
  },
];

export default function Showcase() {
  const [active, setActive] = useState(1);

  const prev = () => setActive((p) => Math.max(0, p - 1));
  const next = () => setActive((p) => Math.min(slides.length - 1, p + 1));

  const slide = slides[active];

  return (
      <section id="showcase" className="relative isolate flex flex-col w-full bg-[#080808] pt-16 md:pt-[100px] pb-0 gap-8 md:gap-[48px]">
        <PixelField />
      {/* Header */}
      <div className="flex items-end justify-between px-6 md:px-12 lg:px-[120px]">
        <SectionHeader
          label="[07] // THE PUBLICATION"
          title={"GOOD WORK.\nGOOD PRESS."}
          titleWidth="w-full max-w-[600px]"
        />
        <div className="flex items-center gap-[8px] shrink-0">
          <button
            onClick={prev}
            className="flex items-center justify-center w-[48px] h-[48px] bg-[#111111] border-2 border-[#3D3D3D] hover:border-[#888888] transition-colors"
          >
            <span className="font-grotesk text-[18px] font-bold text-[#888888]">&lt;</span>
          </button>
          <button
            onClick={next}
            className="flex items-center justify-center w-[48px] h-[48px] bg-[#39FF14] hover:bg-[#2ed10f] transition-colors"
          >
            <span className="font-grotesk text-[18px] font-bold text-[#0A0A0A]">&gt;</span>
          </button>
        </div>
      </div>

      {/* Mobile: single card */}
      <div className="md:hidden px-6">
        <div
          className="flex flex-col gap-5 p-6 border-2 w-full"
          style={{ backgroundColor: slide.bg, borderColor: slide.border }}
        >
          <div className="flex items-center justify-center h-[160px] bg-[#1A1A1A] border border-[#2D2D2D]">
            <span className="font-ibm-mono text-[11px] text-[#333333] tracking-[2px]">[ISSUE 01 // COMING SOON]</span>
          </div>
          <div className="flex items-center justify-between w-full">
            <div
              className="flex items-center justify-center h-[24px] px-[10px] border"
              style={{ backgroundColor: slide.tagBg, borderColor: slide.tagBorder || "transparent" }}
            >
              <span className="font-ibm-mono text-[9px] font-bold tracking-[1px]" style={{ color: slide.tagColor }}>
                {slide.tag}
              </span>
            </div>
            <span className="font-ibm-mono text-[11px] tracking-[2px]" style={{ color: slide.idxColor }}>
              {slide.idx}
            </span>
          </div>
          <h3 className="font-grotesk text-[20px] font-bold text-[#F5F5F0] tracking-[1px] leading-[1.2] whitespace-pre-line">
            {slide.title}
          </h3>
          <p className="font-ibm-mono text-[11px] text-[#555555] tracking-[1px]">{slide.by}</p>
        </div>
      </div>

      {/* Desktop: carousel track */}
      <div className="hidden md:overflow-hidden h-[416px] md:block md:px-12 lg:px-[120px]">
        <div
          className="flex gap-[2px] transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(calc(-${active} * (560px + 2px)))` }}
        >
        {slides.map((s, i) => (
          <div
            key={i}
            className="flex flex-col gap-[24px] p-[40px] h-[412px] w-[560px] shrink-0 border-2"
            style={{ backgroundColor: s.bg, borderColor: s.border }}
          >
            <div className="flex items-center justify-center h-[200px] bg-[#1A1A1A] border border-[#2D2D2D]">
              <span className="font-ibm-mono text-[11px] text-[#333333] tracking-[2px]">[ISSUE 01 // COMING SOON]</span>
            </div>
            <div className="flex items-center justify-between w-full">
              <div
                className="flex items-center justify-center h-[24px] px-[10px] border"
                style={{ backgroundColor: s.tagBg, borderColor: s.tagBorder || "transparent" }}
              >
                <span className="font-ibm-mono text-[9px] font-bold tracking-[1px]" style={{ color: s.tagColor }}>
                  {s.tag}
                </span>
              </div>
              <span className="font-ibm-mono text-[11px] tracking-[2px]" style={{ color: s.idxColor }}>
                {s.idx}
              </span>
            </div>
            <h3 className="font-grotesk text-[20px] font-bold text-[#F5F5F0] tracking-[1px] leading-[1.2] whitespace-pre-line">
              {s.title}
            </h3>
            <p className="font-ibm-mono text-[11px] text-[#555555] tracking-[1px]">{s.by}</p>
          </div>
        ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex items-center gap-[8px] px-6 md:px-12 lg:px-[120px]">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="h-[4px] transition-all"
            style={{ width: i === active ? 32 : 8, backgroundColor: i === active ? "#39FF14" : "#333333" }}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-[120px] pb-16 md:pb-[100px]">
        <span className="font-ibm-mono text-[11px] text-[#444444] tracking-[2px]">
          SHOWING 0{active + 1} OF 04 SECTIONS
        </span>
        <span className="font-ibm-mono text-[11px] text-[#39FF14] tracking-[2px] cursor-pointer hover:underline">
          NOMINATE A FOUNDER &gt;
        </span>
      </div>
    </section>
  );
}
