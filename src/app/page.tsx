import { CenterPlaceholder } from "@/modules/layout/CenterPlaceholder";
import { Footer } from "@/modules/layout/Footer";
import { Header } from "@/modules/layout/Header";
import { BackgroundLayers } from "@/modules/layout/BackgroundLayers";
import ModelViewer from "@/components/ModelViewer";

export default function Home() {
  return (
    <div
      className="relative flex h-screen w-screen flex-col overflow-hidden bg-[var(--bg-base)] text-[var(--text-primary)]"
      data-root-viewport
    >
      <BackgroundLayers />
      <div className="relative z-20 flex h-full flex-col">
        <Header />
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <ModelViewer
          url="/models/goose.glb"
          environmentPreset="city"
          width={300}
          height={300}
          showScreenshotButton={false}
          autoFrame={false}
          defaultZoom={90}
          minZoomDistance={1}
          maxZoomDistance={200}
          defaultRotationX={90}
          defaultRotationY={0}
          fadeIn={true}
          enableMouseParallax={true}
          enableManualRotation={true}
          enableHoverRotation={true}
          enableManualZoom={true}
          modelXOffset={0}
          modelYOffset={0}
        />
      </div>
        <CenterPlaceholder />
        <Footer />
      </div>
    </div>
  );
}
