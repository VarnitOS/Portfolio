import { CenterPlaceholder } from "@/modules/layout/CenterPlaceholder";
import { Footer } from "@/modules/layout/Footer";
import { Header } from "@/modules/layout/Header";
import { BackgroundLayers } from "@/modules/layout/BackgroundLayers";

export default function Home() {
  return (
    <div
      className="relative flex h-screen w-screen flex-col overflow-hidden bg-[var(--bg-base)] text-[var(--text-primary)]"
      data-root-viewport
    >
      <BackgroundLayers />
      <div className="relative z-20 flex h-full flex-col">
        <Header />
        <CenterPlaceholder />
        <Footer />
      </div>
    </div>
  );
}
