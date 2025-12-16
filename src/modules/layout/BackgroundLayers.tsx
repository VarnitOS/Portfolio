"use client";

import LetterGlitch from "@/components/LetterGlitch";

export function BackgroundLayers() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        opacity: 0.18,              // 🔥 MAIN CONTROL
        mixBlendMode: "screen",     // or "soft-light"
        filter: "blur(0.5px)",      // subtle depth push
      }}
    >
      <LetterGlitch
        glitchColors={["#06141f", "#00ff9c", "#ff2a6d"]}
        centerVignette={false}
        outerVignette={true}
        glitchSpeed={50}
        smooth={true}
        characters="Σ∫πμσΔ∞≈≠≤≥±√∂λθεΩωαβγρφψE[x]P(A|B)…♠♥♦♣🂡🂱🃁🃑🃏"
      />
    </div>

  );
}
