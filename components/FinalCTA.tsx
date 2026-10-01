"use client";

import GlitchText from "@/components/GlitchText";
import PixelField from "@/components/PixelField";

export default function FinalCTA() {
  return (
    <section className="relative isolate flex flex-col items-center w-full bg-[#0A0A0A] py-16 px-6 md:py-[120px] md:px-12 lg:px-[120px] gap-10 md:gap-[48px] border-t-2 border-t-[#39FF14]">
      <PixelField />
      {/* Badge */}
      <div className="flex items-center justify-center gap-[8px] h-[32px] px-[16px] bg-[#1A1A1A] border-2 border-[#39FF14]">
        <span className="font-ibm-mono text-[11px] font-bold text-[#39FF14] tracking-[2px]">
          <GlitchText text="[WHY WE NEED TO EXIST?]" speed={30} />
        </span>
      </div>

      {/* Title */}
      <h2 className="font-grotesk text-[44px] md:text-[80px] font-bold text-[#F5F5F0] tracking-[-2px] leading-none text-center w-full max-w-[1000px] whitespace-pre-line">
        <GlitchText text={"WELCOME\nINSIDE."} speed={40} delay={200} />
      </h2>

      {/* Subtitle */}
      <p className="font-ibm-mono text-[10px] md:text-[14px] text-[#666666] tracking-[0.5px] md:tracking-[2px] text-center text-pretty w-full max-w-[700px] px-2">
        <GlitchText text="FOUNDING COHORT // SEP — DEC 2026 // APPLICATIONS NOW OPEN." speed={20} delay={450} />
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-[16px] w-full sm:w-auto">
        <button onClick={() => (window.location.href = "mailto:thepakistanfoundernetwork@gmail.com?subject=TPFN%20Founding%20Cohort%20Application")} className="flex items-center justify-center w-full sm:w-[260px] h-[64px] bg-[#39FF14] hover:bg-[#2ed10f] transition-colors">
          <span className="font-grotesk text-[13px] font-bold text-[#0A0A0A] tracking-[2px]">
            APPLY NOW
          </span>
        </button>
        <button onClick={() => (window.location.href = "mailto:thepakistanfoundernetwork@gmail.com?subject=TPFN%20Inquiry")} className="flex items-center justify-center w-full sm:w-[220px] h-[64px] bg-[#0A0A0A] border-2 border-[#3D3D3D] hover:border-[#888888] transition-colors">
          <span className="font-ibm-mono text-[12px] text-[#666666] tracking-[2px]">
            INQUIRE BY EMAIL
          </span>
        </button>
      </div>
    </section>
  );
}
