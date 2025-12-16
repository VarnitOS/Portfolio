"use client";

import ModelViewer from "@/components/ModelViewer";

type AmbientModelProps = {
  src?: string;
  size?: number | string;
  opacity?: number;
  blur?: number;
  rotationSpeed?: number;
};

/**
 * Prepared, low-priority 3D model for future use.
 * Not mounted by default — ready to drop into splash/center/background later.
 */
export function AmbientModel({
  src = "/models/car.glb",
  size = 360,
  opacity = 0.22,
  blur = 1,
  rotationSpeed = 0.08,
}: AmbientModelProps) {
  return (
    <div
      aria-hidden
      className="pointer-events-none select-none"
      style={{
        width: size,
        height: size,
        opacity,
        filter: `blur(${blur}px)`,
      }}
    >
      <ModelViewer
        url={src}
        width="100%"
        height="100%"
        autoRotate
        autoRotateSpeed={rotationSpeed}
        enableMouseParallax={false}
        enableManualRotation={false}
        enableHoverRotation={false}
        enableManualZoom={false}
        modelXOffset={0}
        modelYOffset={0}
        defaultRotationX={-35}
        defaultRotationY={20}
        defaultZoom={1.2}
        minZoomDistance={1.2}
        maxZoomDistance={1.2}
        ambientIntensity={0.3}
        keyLightIntensity={0.35}
        fillLightIntensity={0.25}
        rimLightIntensity={0.2}
        environmentPreset="none"
        placeholderSrc={undefined}
        showScreenshotButton={false}
        fadeIn={false}
        autoFrame={false}
      />
    </div>
  );
}

