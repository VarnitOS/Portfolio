import { CenterPlaceholder } from "@/modules/layout/CenterPlaceholder";
import { Footer } from "@/modules/layout/Footer";
import { Header } from "@/modules/layout/Header";

export default function Home() {
  return (
    <div
      className="relative flex h-screen flex-col overflow-hidden bg-surface text-gray-100"
      data-root-viewport
    >
      <Header />
      <CenterPlaceholder />
      <Footer />
    </div>
  );
}
