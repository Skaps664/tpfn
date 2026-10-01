import SectionHeader from "./SectionHeader";
import PixelField from "@/components/PixelField";

export default function Bento() {
  return (
    <section className="relative isolate flex flex-col w-full bg-[#0D0D0D] py-16 px-6 md:py-[100px] md:px-12 lg:px-[120px] gap-10 md:gap-[48px]">
      <PixelField />
      <SectionHeader
        label="[05] // WHAT'S INSIDE"
        title={"PART NETWORK.\nPART PUBLICATION."}
        titleWidth="w-full max-w-[800px]"
      />

      <div className="flex flex-col w-full gap-[2px]">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row w-full gap-[2px]">
          {/* Bento A — Yellow */}
          <div className="flex flex-col gap-5 p-8 md:p-[40px] lg:h-[320px] bg-[#39FF14] w-full md:flex-1">
            <span className="font-ibm-mono text-[11px] font-bold text-[#1A1A1A] tracking-[2px]">[01]</span>
            <h3 className="font-grotesk text-[24px] md:text-[28px] font-bold text-[#0A0A0A] tracking-[-1px] leading-[1.1] whitespace-pre-line">
              {"THE\nNETWORK"}
            </h3>
            <p className="font-ibm-mono text-[12px] text-[#1A1A1A] tracking-[1px] leading-[1.6]">
              A CAREFULLY CURATED NETWORK OF PAKISTANI FOUNDERS. NOT AN OPEN COMMUNITY.
            </p>
            <div className="flex items-center justify-center h-[28px] px-[12px] bg-[#0A0A0A] w-fit">
              <span className="font-ibm-mono text-[10px] font-bold text-[#39FF14] tracking-[2px]">[CURATED]</span>
            </div>
          </div>

          {/* Bento B */}
          <div className="flex flex-col gap-5 p-8 md:p-[40px] lg:h-[320px] bg-[#111111] border border-[#2D2D2D] w-full md:flex-1">
            <span className="font-ibm-mono text-[11px] font-bold text-[#39FF14] tracking-[2px]">[02]</span>
            <h3 className="font-grotesk text-[24px] md:text-[28px] font-bold text-[#F5F5F0] tracking-[-1px] leading-[1.1] whitespace-pre-line">
              {"THE\nPUBLICATION"}
            </h3>
            <p className="font-ibm-mono text-[12px] text-[#666666] tracking-[1px] leading-[1.6]">
              AN EDITORIAL HOME FOR FOUNDERS WORTH KNOWING, BEFORE EVERYONE KNOWS THEM.
            </p>
          </div>

          {/* Bento C */}
          <div className="flex flex-col gap-5 p-8 md:p-[40px] lg:h-[320px] bg-[#0A0A0A] border border-[#2D2D2D] w-full md:flex-1">
            <span className="font-ibm-mono text-[11px] font-bold text-[#39FF14] tracking-[2px]">[03]</span>
            <h3 className="font-grotesk text-[24px] md:text-[28px] font-bold text-[#F5F5F0] tracking-[-1px] leading-[1.1] whitespace-pre-line">
              {"SMALL BY\nDESIGN"}
            </h3>
            <p className="font-ibm-mono text-[12px] text-[#666666] tracking-[1px] leading-[1.6]">
              EVERY APPLICATION REVIEWED. EVERY FOUNDER VETTED. EVERY COHORT KEPT SMALL.
            </p>
            <div className="flex items-center justify-center h-[28px] px-[12px] bg-[#1A1A1A] border border-[#FF6B35] w-fit">
              <span className="font-ibm-mono text-[10px] font-bold text-[#FF6B35] tracking-[2px]">[VETTED]</span>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row w-full gap-[2px]">
          {/* Bento D */}
          <div className="flex flex-col gap-5 p-8 md:p-[40px] lg:h-[260px] bg-[#111111] border border-[#2D2D2D] w-full md:flex-1">
            <span className="font-ibm-mono text-[11px] font-bold text-[#39FF14] tracking-[2px]">[04]</span>
            <h3 className="font-grotesk text-[24px] md:text-[28px] font-bold text-[#F5F5F0] tracking-[-1px] leading-[1.1] whitespace-pre-line">
              {"30 + 30\nEVERY QUARTER"}
            </h3>
            <p className="font-ibm-mono text-[12px] text-[#666666] tracking-[1px] leading-[1.6]">
              30 BUSINESSES // 30 FOUNDERS. THE ONES PAKISTAN SHOULD KNOW ABOUT.
            </p>
          </div>

          {/* Bento E */}
          <div className="flex flex-col gap-5 p-8 md:p-[40px] lg:h-[260px] bg-[#0F0F0F] border-2 border-[#FF6B35] w-full md:flex-1">
            <span className="font-ibm-mono text-[11px] font-bold text-[#FF6B35] tracking-[2px]">[05]</span>
            <h3 className="font-grotesk text-[24px] md:text-[28px] font-bold text-[#F5F5F0] tracking-[-1px] leading-[1.1] whitespace-pre-line">
              {"THE STORY\nBEHIND IT"}
            </h3>
            <p className="font-ibm-mono text-[12px] text-[#666666] tracking-[1px] leading-[1.6]">
              WHAT THEY'RE BUILDING, HOW THEY'RE BUILDING IT, AND WHY. GOOD WORK DESERVES GOOD PRESS.
            </p>
            <div className="flex items-center justify-center h-[28px] px-[12px] bg-[#1A1A1A] border border-[#FF6B35] w-fit">
              <span className="font-ibm-mono text-[10px] font-bold text-[#FF6B35] tracking-[2px]">[PRESS]</span>
            </div>
          </div>

          {/* Bento F */}
          <div className="flex flex-col gap-5 p-8 md:p-[40px] lg:h-[260px] bg-[#0A0A0A] border border-[#2D2D2D] w-full md:flex-1">
            <span className="font-ibm-mono text-[11px] font-bold text-[#39FF14] tracking-[2px]">[06]</span>
            <h3 className="font-grotesk text-[24px] md:text-[28px] font-bold text-[#F5F5F0] tracking-[-1px] leading-[1.1] whitespace-pre-line">
              {"THE RIGHT\nROOM"}
            </h3>
            <p className="font-ibm-mono text-[12px] text-[#666666] tracking-[1px] leading-[1.6]">
              NOT THE BIGGEST ROOM. JUST ONE WORTH BEING IN.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
