const productLinks = ["THE NETWORK", "THE PUBLICATION", "WAYS IN", "FAQ"];
const companyLinks = ["WHY TPFN", "WHO IT'S FOR", "CONTACT"];
const resourceLinks = ["INSTAGRAM", "EMAIL", "APPLY"];

export default function Footer() {
  return (
    <footer className="flex flex-col w-full bg-[#050505]">
      {/* Top */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-10 lg:gap-[80px] px-6 md:px-12 lg:px-[120px] py-12 md:py-[64px]">
        {/* Brand */}
        <div className="flex flex-col gap-6 md:w-[280px] md:shrink-0">
          <div className="flex items-center gap-[12px]">
            <div className="w-[32px] h-[32px] bg-[#39FF14] shrink-0" />
            <span className="font-grotesk text-[16px] font-bold text-[#39FF14] tracking-[3px]">
              TPFN.
            </span>
          </div>
          <p className="font-ibm-mono text-[11px] text-[#888888] tracking-[1px] leading-[1.6] max-w-[260px]">
            THE PAKISTAN FOUNDER NETWORK. PART PUBLICATION, PART CURATED
            FOUNDER NETWORK.
          </p>
          <div className="flex gap-[12px]">
            {[{ label: "IG" }, { label: "@" }, { label: "LI" }].map((s) => (
              <button
                key={s.label}
                className="flex items-center justify-center w-[36px] h-[36px] bg-[#111111] border border-[#2D2D2D] hover:border-[#888888] transition-colors"
              >
                <span                   className="font-grotesk text-[10px] font-bold text-[#AAAAAA]">
                  {s.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-3 md:flex md:flex-1 gap-8 md:gap-10 lg:gap-[80px]">
          {[
            { heading: "TPFN", links: productLinks },
            { heading: "ABOUT", links: companyLinks },
            { heading: "CONNECT", links: resourceLinks },
          ].map((col) => (
            <div key={col.heading} className="flex flex-col gap-4 md:gap-[20px]">
              <span className="font-grotesk text-[11px] font-bold text-[#F5F5F0] tracking-[2px]">
                {col.heading}
              </span>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-ibm-mono text-[12px] text-[#888888] tracking-[1px] hover:text-[#CCCCCC] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full px-6 md:px-12 lg:px-[120px] py-4 md:h-[56px] border-t border-t-[#1D1D1D] gap-3 sm:gap-0">
        <span className="font-ibm-mono text-[11px] text-[#666666] tracking-[1px]">
          © 2026 THE PAKISTAN FOUNDER NETWORK. ALL RIGHTS RESERVED.
        </span>
        <div className="flex items-center gap-6 md:gap-[32px]">
          <a href="#" className="font-ibm-mono text-[11px] text-[#666666] tracking-[1px] hover:text-[#AAAAAA] transition-colors">
            PRIVACY
          </a>
          <a href="#" className="font-ibm-mono text-[11px] text-[#666666] tracking-[1px] hover:text-[#AAAAAA] transition-colors">
            TERMS
          </a>
          <span className="font-ibm-mono text-[11px] font-bold text-[#39FF14] tracking-[1px]">
            COHORT 01
          </span>
        </div>
      </div>
    </footer>
  );
}
