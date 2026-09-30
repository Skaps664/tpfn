"use client";

import { useEffect, useRef } from "react";

const CELL = 22; // grid pitch in px
const GAP = 3; // gap between pixels
const RADIUS = 180; // cursor spotlight radius
const TWINKLE_RATE = 0.00025; // chance per cell per frame to spark

type Spark = { life: number; max: number; orange: boolean };

/**
 * Interactive pixel-grid background. Cells glow green near the cursor,
 * random pixels spark and fade, and everything eases back to dark.
 * Sits absolutely inside a `relative` parent; never captures pointer events.
 */
export default function PixelField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let cols = 0;
    let rows = 0;
    let glow = new Float32Array(0);
    let sparks = new Map<number, Spark>();
    const mouse = { x: -9999, y: -9999, active: false };
    let raf = 0;
    let visible = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / CELL) + 1;
      rows = Math.ceil(h / CELL) + 1;
      glow = new Float32Array(cols * rows);
      sparks = new Map();
      if (reduceMotion) draw();
    };

    const onMove = (e: PointerEvent) => {
      const r = parent.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.active = mouse.x >= 0 && mouse.y >= 0 && mouse.x <= r.width && mouse.y <= r.height;
    };
    const onLeave = () => {
      mouse.active = false;
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const size = CELL - GAP;
      const offX = (w % CELL) / 2;
      const offY = 0;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c;
          const x = offX + c * CELL;
          const y = offY + r * CELL;

          // Cursor spotlight target
          let target = 0;
          if (mouse.active && !reduceMotion) {
            const dx = x + size / 2 - mouse.x;
            const dy = y + size / 2 - mouse.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < RADIUS) target = Math.pow(1 - d / RADIUS, 2);
          }
          // Ease toward target: fast attack, slow decay (leaves a trail)
          const g = glow[i];
          glow[i] = target > g ? g + (target - g) * 0.35 : g + (target - g) * 0.06;

          // Random sparks
          if (!reduceMotion && Math.random() < TWINKLE_RATE && !sparks.has(i)) {
            sparks.set(i, { life: 0, max: 60 + Math.random() * 90, orange: Math.random() < 0.12 });
          }
          let spark = 0;
          let orange = false;
          const s = sparks.get(i);
          if (s) {
            s.life++;
            const t = s.life / s.max;
            spark = Math.sin(t * Math.PI) * 0.55;
            orange = s.orange;
            if (s.life >= s.max) sparks.delete(i);
          }

          // Base pixel: very faint, fades toward bottom so the hero stays readable
          const fade = 1 - Math.min(1, y / h) * 0.6;
          ctx.fillStyle = `rgba(255,255,255,${0.028 * fade})`;
          ctx.fillRect(x, y, size, size);

          const lit = Math.max(glow[i] * 0.45, spark);
          if (lit > 0.01) {
            ctx.fillStyle = orange && spark > glow[i]
              ? `rgba(255,107,53,${lit * fade})`
              : `rgba(57,255,20,${lit * fade})`;
            ctx.fillRect(x, y, size, size);
          }
        }
      }
    };

    const loop = () => {
      if (visible) draw();
      raf = requestAnimationFrame(loop);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(parent);

    if (!reduceMotion) {
      window.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerleave", onLeave);
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      {/* Soft green bloom behind the headline */}
      <div
        className="absolute left-1/2 top-[-10%] h-[70%] w-[90%] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(57,255,20,0.10) 0%, rgba(57,255,20,0.03) 35%, transparent 70%)",
        }}
      />
      {/* Edge vignette so the grid melts into the page */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 35%, transparent 40%, #0A0A0A 100%), linear-gradient(to bottom, transparent 70%, #0A0A0A 100%)",
        }}
      />
    </div>
  );
}
