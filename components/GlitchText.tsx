"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  /** ms before typing starts after entering viewport */
  delay?: number;
  /** ms between each character */
  speed?: number;
}

export default function GlitchText({
  text,
  className = "",
  delay = 0,
  speed = 40,
}: TypewriterTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          setTimeout(() => {
            setStarted(true);
            let i = 0;
            const interval = setInterval(() => {
              i++;
              setDisplayed(text.slice(0, i));
              if (i >= text.length) {
                clearInterval(interval);
                setTimeout(() => setDone(true), 800);
              }
            }, speed);
          }, delay);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [text, speed, delay]);

  const typed = started ? displayed : "";

  return (
    // The full text is always laid out (untyped part transparent), so it wraps
    // naturally on small screens and never shifts while typing.
    <span ref={ref} className={className} style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}>
      <span>{typed}</span>
      {started && !done && (
        // Zero-width anchor so the cursor never changes line wrapping
        <span aria-hidden="true" style={{ display: "inline-block", width: 0, position: "relative" }}>
          <span
            style={{
              position: "absolute",
              left: "2px",
              top: "-0.8em",
              width: "0.06em",
              height: "0.85em",
              backgroundColor: "currentColor",
              animation: "tw-blink 0.7s step-end infinite",
            }}
          />
        </span>
      )}
      <span style={{ color: "transparent" }}>{text.slice(typed.length)}</span>

      <style>{`
        @keyframes tw-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
