import SectionHeader from "./SectionHeader";
import PixelField from "@/components/PixelField";

interface PricingCardProps {
  tier: string;
  tierColor?: string;
  name: string;
  nameColor?: string;
  price: string;
  priceColor?: string;
  btnLabel: string;
  btnLabelColor?: string;
  bgColor?: string;
  borderColor?: string;
  borderWidth?: number;
  btnBg?: string;
  btnBorderColor?: string;
  tierBg?: string;
  tierBorderColor?: string;
  features: { label: string; included: boolean }[];
  accentColor?: string;
  unit?: string;
}

function PricingCard({
  tier,
  tierColor = "#888888",
  name,
  nameColor = "#F5F5F0",
  price,
  priceColor = "#F5F5F0",
  btnLabel,
  btnLabelColor = "#888888",
  bgColor = "#0F0F0F",
  borderColor = "#2D2D2D",
  borderWidth = 1,
  btnBg = "#1A1A1A",
  btnBorderColor = "#3D3D3D",
  tierBg = "#1A1A1A",
  tierBorderColor = "#3D3D3D",
  features,
  accentColor = "#555555",
  unit = "/MO",
}: PricingCardProps) {
  return (
    <div
      className="flex flex-col gap-8 p-8 md:p-[40px] w-full lg:flex-1"
      style={{ backgroundColor: bgColor, border: `${borderWidth}px solid ${borderColor}` }}
    >
      <div
        className="flex items-center justify-center h-[28px] px-[12px] w-fit"
        style={{ backgroundColor: tierBg, border: `1px solid ${tierBorderColor}` }}
      >
        <span className="font-ibm-mono text-[11px] tracking-[2px]" style={{ color: tierColor }}>
          {tier}
        </span>
      </div>
      <span className="font-grotesk text-[28px] font-bold tracking-[1px]" style={{ color: nameColor }}>
        {name}
      </span>
      <div className="flex flex-wrap items-end gap-[4px]">
        <span className="font-grotesk text-[48px] font-bold tracking-[-2px] leading-none" style={{ color: priceColor }}>
          {price}
        </span>
        <span className="font-ibm-mono text-[13px] text-[#555555] tracking-[1px] mb-[6px]">{unit}</span>
      </div>

      {/* Feature list */}
      <div className="flex flex-col gap-[10px]" style={{ borderTop: `1px solid ${borderColor === "#0F0F0F" ? "#2D2D2D" : borderColor}` }}>
        <div className="pt-6 flex flex-col gap-[10px]">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-3">
              <span
                className="font-ibm-mono text-[14px] leading-none shrink-0"
                style={{ color: f.included ? accentColor : "#333333" }}
              >
                {f.included ? "+" : "—"}
              </span>
              <span
                className="font-ibm-mono text-[11px] tracking-[1px]"
                style={{ color: f.included ? "#A0A09A" : "#3D3D3D" }}
              >
                {f.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button
        className="flex items-center justify-center w-full h-[48px] mt-auto"
        style={{ backgroundColor: btnBg, border: `2px solid ${btnBorderColor}` }}
      >
        <span className="font-ibm-mono text-[12px] tracking-[2px]" style={{ color: btnLabelColor }}>
          {btnLabel}
        </span>
      </button>
    </div>
  );
}

const READER_FEATURES = [
  { label: "THE QUARTERLY PUBLICATION", included: true },
  { label: "30 BUSINESSES TO KNOW", included: true },
  { label: "30 FOUNDERS TO KNOW", included: true },
  { label: "THE STORIES BEHIND THEM", included: true },
  { label: "VETTED FOUNDER NETWORK", included: false },
  { label: "A SEAT IN THE ROOM", included: false },
  { label: "FOUNDER-TO-FOUNDER INTROS", included: false },
  { label: "FOUNDING COHORT STATUS", included: false },
];

const FOUNDER_FEATURES = [
  { label: "THE QUARTERLY PUBLICATION", included: true },
  { label: "VETTED FOUNDER NETWORK", included: true },
  { label: "A SEAT IN THE ROOM", included: true },
  { label: "FOUNDER-TO-FOUNDER INTROS", included: true },
  { label: "FOUNDING COHORT STATUS", included: true },
  { label: "CONSIDERED FOR A FEATURE", included: true },
  { label: "OPEN TO EVERYONE", included: false },
  { label: "TITLES WITHOUT A BUSINESS", included: false },
];

const NOMINATE_FEATURES = [
  { label: "SUGGEST A FOUNDER", included: true },
  { label: "SUGGEST A BUSINESS", included: true },
  { label: "ANY INDUSTRY", included: true },
  { label: "ANY CITY IN PAKISTAN", included: true },
  { label: "EVERY NOMINATION READ", included: true },
  { label: "SELECTED FOR THE WORK", included: true },
  { label: "NOT FOR PAID PLACEMENT", included: true },
  { label: "GOOD WORK, GOOD PRESS", included: true },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative isolate flex flex-col w-full bg-[#080808] py-16 px-6 md:py-[100px] md:px-12 lg:px-[120px] gap-12 md:gap-[64px]">
      <PixelField />
      <SectionHeader
        label="[09] // WAYS IN"
        title={"THREE WAYS\nIN."}
      />

      <div className="flex flex-col lg:flex-row w-full gap-[2px]">
        <PricingCard
          tier="OPEN TO ALL"
          name="READER"
          price="FREE"
          unit="/ALWAYS"
          btnLabel="FOLLOW ALONG"
          features={READER_FEATURES}
          accentColor="#555555"
        />
        <PricingCard
          tier="FOUNDING COHORT"
          tierColor="#0A0A0A"
          tierBg="#39FF14"
          tierBorderColor="#39FF14"
          name="FOUNDER"
          nameColor="#39FF14"
          price="Q4"
          unit="/2026"
          priceColor="#39FF14"
          btnLabel="APPLY NOW"
          btnLabelColor="#0A0A0A"
          bgColor="#111111"
          borderColor="#39FF14"
          borderWidth={2}
          btnBg="#39FF14"
          btnBorderColor="transparent"
          features={FOUNDER_FEATURES}
          accentColor="#39FF14"
        />
        <PricingCard
          tier="KNOW SOMEONE?"
          tierColor="#FF6B35"
          tierBorderColor="#FF6B35"
          name="NOMINATE"
          price="30+30"
          unit="/QUARTER"
          btnLabel="NOMINATE A FOUNDER"
          btnLabelColor="#FF6B35"
          btnBorderColor="#FF6B35"
          features={NOMINATE_FEATURES}
          accentColor="#FF6B35"
        />
      </div>
    </section>
  );
}
