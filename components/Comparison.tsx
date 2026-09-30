import SectionHeader from "./SectionHeader";

const rows = [
  { feature: "VETTED FOUNDERS ONLY", tpfn: "[✓]", groups: "[✗]", events: "[✗]", feeds: "[✗]" },
  { feature: "KEPT SMALL ON PURPOSE", tpfn: "[✓]", groups: "[✗]", events: "[—]", feeds: "[✗]" },
  { feature: "REAL OPERATORS, NOT TITLES", tpfn: "[✓]", groups: "[—]", events: "[—]", feeds: "[✗]" },
  { feature: "GOOD WORK DOCUMENTED", tpfn: "[✓]", groups: "[✗]", events: "[—]", feeds: "[NOISE]" },
  { feature: "ACROSS INDUSTRIES & CITIES", tpfn: "[✓]", groups: "[✓]", events: "[—]", feeds: "[✓]" },
  { feature: "RELATIONSHIPS THAT LAST", tpfn: "[✓]", groups: "[RARE]", events: "[✗]", feeds: "[✗]" },
];

function cellStyle(val: string) {
  if (val === "[✓]") return "font-bold text-[14px]";
  if (val === "[✗]") return "text-[#3D3D3D] text-[13px]";
  if (val === "[—]") return "text-[#444444] text-[13px]";
  return "text-[#444444] text-[10px]";
}

function cellColor(val: string) {
  if (val === "[✓]") return "text-[#444444]";
  return "";
}

export default function Comparison() {
  return (
    <section id="comparison" className="flex flex-col w-full bg-[#050505] py-16 px-6 md:py-[100px] md:px-12 lg:px-[120px] gap-12 md:gap-[64px]">
      <SectionHeader
        label="[06] // VS. THE REST"
        title={"WHY A ROOM\nBEATS A CROWD."}
        subtitle="NOT THE BIGGEST ROOM. JUST ONE WORTH BEING IN. NO SPIN."
      />

      {/* Desktop table */}
      <div className="hidden md:flex flex-col w-full border border-[#2D2D2D]">
        {/* Header */}
        <div className="flex w-full h-[56px] bg-[#111111] border-b-2 border-b-[#39FF14]">
          <div className="flex items-center w-[200px] lg:w-[400px] shrink-0 px-4 lg:px-[32px] border-r border-r-[#2D2D2D]">
            <span className="font-grotesk text-[11px] font-bold text-[#888888] tracking-[2px]">WHAT MATTERS</span>
          </div>
          <div className="flex items-center flex-1 min-w-0 px-3 lg:px-[32px] bg-[#1A1A1A] border-r border-r-[#2D2D2D]">
            <span className="font-grotesk text-[11px] font-bold text-[#39FF14] tracking-[2px]">TPFN</span>
          </div>
          {["OPEN GROUPS", "EVENTS", "SOCIAL FEEDS"].map((tool, i) => (
            <div key={tool} className={`flex items-center flex-1 min-w-0 px-3 lg:px-[32px] ${i < 2 ? "border-r border-r-[#2D2D2D]" : ""}`}>
              <span className="font-grotesk text-[11px] font-bold text-[#555555] tracking-[2px]">{tool}</span>
            </div>
          ))}
        </div>

        {/* Data rows */}
        {rows.map((row, i) => (
          <div key={row.feature} className={`flex w-full h-[56px] ${i < rows.length - 1 ? "border-b border-b-[#1D1D1D]" : ""}`}>
            <div className="flex items-center w-[200px] lg:w-[400px] shrink-0 px-4 lg:px-[32px] border-r border-r-[#2D2D2D]">
              <span className="font-ibm-mono text-[12px] text-[#CCCCCC] tracking-[1px]">{row.feature}</span>
            </div>
            <div className="flex items-center flex-1 min-w-0 px-3 lg:px-[32px] bg-[#0D0D0D] border-r border-r-[#2D2D2D]">
              <span className="font-ibm-mono tracking-[1px] text-[#39FF14] font-bold text-[14px]">{row.tpfn}</span>
            </div>
            {[row.groups, row.events, row.feeds].map((val, j) => (
              <div key={j} className={`flex items-center flex-1 min-w-0 px-3 lg:px-[32px] ${j < 2 ? "border-r border-r-[#2D2D2D]" : ""}`}>
                <span className={`font-ibm-mono tracking-[1px] ${cellStyle(val)} ${cellColor(val)}`}>{val}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Mobile: card-per-feature layout */}
      <div className="flex flex-col md:hidden w-full gap-[2px]">
        {/* Header row */}
        <div className="grid grid-cols-5 bg-[#111111] border border-[#39FF14] border-b-2">
          <div className="col-span-2 px-3 py-3">
            <span className="font-grotesk text-[9px] font-bold text-[#888888] tracking-[1px]">WHAT MATTERS</span>
          </div>
          <div className="px-2 py-3 bg-[#1A1A1A]">
            <span className="font-grotesk text-[9px] font-bold text-[#39FF14] tracking-[1px]">TPFN</span>
          </div>
          <div className="px-2 py-3">
            <span className="font-grotesk text-[9px] font-bold text-[#555555] tracking-[1px]">GRP</span>
          </div>
          <div className="px-2 py-3">
            <span className="font-grotesk text-[9px] font-bold text-[#555555] tracking-[1px]">EVT</span>
          </div>
        </div>
        {rows.map((row, i) => (
          <div key={row.feature} className={`grid grid-cols-5 border border-[#1D1D1D] ${i % 2 === 0 ? "bg-[#0A0A0A]" : "bg-[#0D0D0D]"}`}>
            <div className="col-span-2 flex items-center px-3 py-4">
              <span className="font-ibm-mono text-[9px] text-[#CCCCCC] tracking-[1px] leading-[1.4]">{row.feature}</span>
            </div>
            <div className="flex items-center px-2 py-4 bg-[#0D0D0D]">
              <span className="font-ibm-mono text-[12px] text-[#39FF14] font-bold">{row.tpfn}</span>
            </div>
            <div className="flex items-center px-2 py-4">
              <span className={`font-ibm-mono text-[11px] ${cellColor(row.groups)}`}>{row.groups}</span>
            </div>
            <div className="flex items-center px-2 py-4">
              <span className={`font-ibm-mono text-[11px] ${cellColor(row.events)}`}>{row.events}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
