/* global React */
const { useEffect, useRef, useState } = React;

/* ============================================================
   Ornamentos botánicos dorados — inspirados en los bordados
   de ramas del vestido real.
   ============================================================ */

// Divisor central: rama simétrica con flor de diamante
function Divider({ color = "var(--gold)" }) {
  return (
    <div className="divider" aria-hidden="true">
      <svg viewBox="0 0 240 30" fill="none" stroke={color}>
        <g strokeWidth="1.1" strokeLinecap="round">
          <path d="M118 15 H40" />
          <path d="M40 15 q-9 -7 -20 -6 M40 15 q-9 7 -20 6" />
          <path d="M70 15 q-5 -6 -13 -6 M70 15 q-5 6 -13 6" />
          <path d="M96 15 q-4 -5 -10 -5 M96 15 q-4 5 -10 5" />
          <path d="M122 15 H200" />
          <path d="M200 15 q9 -7 20 -6 M200 15 q9 7 20 6" />
          <path d="M170 15 q5 -6 13 -6 M170 15 q5 6 13 6" />
          <path d="M144 15 q4 -5 10 -5 M144 15 q4 5 10 5" />
        </g>
        <g fill={color} stroke="none">
          <path d="M120 8 l4 7 -4 7 -4 -7 z" />
          <circle cx="120" cy="15" r="1.6" fill="var(--cream)" />
        </g>
      </svg>
    </div>
  );
}

// Esquina decorativa con rama y flores (se rota por CSS según posición)
function CornerSpray({ style, flip = false }) {
  return (
    <svg
      viewBox="0 0 120 120"
      width="120"
      height="120"
      fill="none"
      aria-hidden="true"
      style={{ transform: flip ? "scaleX(-1)" : "none", ...style }}
    >
      <g stroke="var(--gold)" strokeWidth="1" strokeLinecap="round">
        <path d="M8 8 q34 6 52 30 q14 18 16 44" />
        <path d="M20 12 q10 8 8 22 M30 26 q14 4 22 -4" />
        <path d="M40 30 q8 10 4 22 M52 44 q14 2 20 -8" />
        <path d="M62 52 q6 12 0 24 M72 66 q14 0 18 -10" />
      </g>
      <g fill="var(--blush)" stroke="var(--gold-deep)" strokeWidth="0.7">
        <circle cx="14" cy="10" r="4.5" />
        <circle cx="52" cy="42" r="5" />
        <circle cx="74" cy="78" r="4" />
      </g>
      <g fill="var(--gold)">
        <circle cx="34" cy="24" r="1.6" />
        <circle cx="60" cy="58" r="1.6" />
      </g>
    </svg>
  );
}

/* ---------- Íconos de programa ---------- */
function IconChurch() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4M10 4h4" />
      <path d="M12 6 4 12v9h16v-9z" />
      <path d="M9 21v-4a3 3 0 0 1 6 0v4" />
      <path d="M4 12h16" />
    </svg>
  );
}
function IconGlasses() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3l1 6a3 3 0 0 0 6 0l1-6" />
      <path d="M7 3h10" />
      <path d="M12 12v7M9 21h6" />
      <path d="M9.3 6h5.4" />
    </svg>
  );
}
function IconMap() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}
function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.15c-1.52 0-3.01-.41-4.3-1.18l-.31-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23 4.54 0 8.23 3.69 8.23 8.23 0 4.54-3.69 8.24-8.31 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
    </svg>
  );
}
function IconCamera() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h3l1.5-2h9L18 8h3v11H3z" />
      <circle cx="12" cy="13" r="3.4" />
    </svg>
  );
}
function IconDove() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 13c4 0 6-2 8-2s3 2 6 1c-1 3-4 5-7 5-4 0-7-1-7-4z" />
      <path d="M11 11c1-3 4-5 8-5-1 2-2 3-4 4" />
      <path d="M6 13l-3 5" />
    </svg>
  );
}
function IconMusic({ muted }) {
  return muted ? (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V6l9-2v10" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="15" cy="14" r="2.5" />
      <path d="M3 3l18 18" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V6l9-2v10" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="15" cy="14" r="2.5" />
    </svg>
  );
}

/* ---------- Capa de destellos dorados sutiles ---------- */
function SparkleLayer({ count = 10, seed = 1 }) {
  const sparks = [];
  let s = seed * 9301 + 49297;
  const rand = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  for (let i = 0; i < count; i++) {
    const size = 3 + rand() * 6;
    sparks.push({
      left: rand() * 100,
      top: rand() * 100,
      size,
      delay: rand() * 4,
      dur: 3 + rand() * 3,
    });
  }
  return (
    <div className="sparkle-layer" aria-hidden="true">
      {sparks.map((sp, i) => (
        <span
          key={i}
          className="sparkle"
          style={{
            left: sp.left + "%",
            top: sp.top + "%",
            width: sp.size + "px",
            height: sp.size + "px",
            animationDelay: sp.delay + "s",
            animationDuration: sp.dur + "s",
          }}
        />
      ))}
    </div>
  );
}

/* ---------- Hook: revelar al hacer scroll ---------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

Object.assign(window, {
  Divider, CornerSpray,
  IconChurch, IconGlasses, IconMap, IconWhatsApp, IconCamera, IconDove, IconMusic,
  SparkleLayer, useReveal,
});
