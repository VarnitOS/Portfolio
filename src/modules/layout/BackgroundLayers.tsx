"use client";

import LetterGlitch from "@/components/LetterGlitch";

export function BackgroundLayers() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true" data-layer="base">
      <LetterGlitch
        glitchColors={["#0d1722", "#132839", "#1a3a4a"]}
        glitchSpeed={260}
        outerVignette={false}
        centerVignette={false}
        smooth
        characters="█░▒▓<>/\\{}[]()=#*&"
      />
    </div>
  );
}
