import SectionHeader from "./SectionHeader";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  bgColor?: string;
  accentColor: string;
}

function TestimonialCard({
  quote,
  name,
  role,
  bgColor = "#111111",
  accentColor,
}: TestimonialCardProps) {
  return (
    <div
      className="flex flex-col gap-6 p-8 md:p-[40px] border-l-4 w-full md:flex-1"
      style={{ backgroundColor: bgColor, borderLeftColor: accentColor }}
    >
      <p className="font-ibm-mono text-[13px] text-[#CCCCCC] tracking-[1px] leading-[1.6]">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-[12px]">
        <div className="w-[36px] h-[36px] rounded-full bg-[#333333] shrink-0" />
        <div className="flex flex-col gap-[2px]">
          <span className="font-grotesk text-[13px] font-bold text-[#F5F5F0] tracking-[1px]">
            {name}
          </span>
          <span className="font-ibm-mono text-[11px] text-[#555555] tracking-[1px]">
            {role}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="flex flex-col w-full bg-[#0A0A0A] py-16 px-6 md:py-[100px] md:px-12 lg:px-[120px] gap-12 md:gap-[64px]">
      <SectionHeader
        label="[04] // WHO IT'S FOR"
        title={"ABOUT\nYOU."}
      />

      <div className="flex flex-col md:flex-row w-full gap-[2px]">
        <TestimonialCard
          quote="HAVING 'FOUNDER' IN YOUR BIO ISN'T QUITE ENOUGH. TPFN IS FOR PEOPLE ACTUALLY IN IT."
          name="01 // IN IT"
          role="CUSTOMERS. OPERATIONS. HARD CALLS."
          accentColor="#39FF14"
        />
        <TestimonialCard
          quote="YOU DON'T HAVE TO BE THE BIGGEST BUSINESS IN THE ROOM. YOU DON'T HAVE TO KNOW EVERYTHING EITHER."
          name="02 // ANY SIZE"
          role="REAL BEATS BIG."
          bgColor="#0D0D0D"
          accentColor="#FF6B35"
        />
        <TestimonialCard
          quote="BUT YOU SHOULD BE BUILDING SOMETHING REAL, AND HAVE SOMETHING TO BRING TO THE TABLE."
          name="03 // BRING SOMETHING"
          role="NOT EVERY FOUNDER NEEDS THIS ROOM."
          accentColor="#F5F5F0"
        />
      </div>
    </section>
  );
}
