export function Footer() {
  return (
    <footer
      className="fixed inset-x-0 bottom-0 z-20 border-t border-white/10 bg-surface/90 backdrop-blur-sm"
      data-layer="footer"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-[11px] font-mono uppercase tracking-[0.16em] text-gray-400">
        <div aria-label="System status" className="flex items-center gap-2">
          <span>SYSTEM: idle</span>
          <span className="text-gray-700">•</span>
          <span>DECK: awaiting input</span>
          <span className="text-gray-700">•</span>
          <span>TABLE: offline</span>
        </div>
        <div
          aria-hidden="true"
          className="flex items-center justify-center text-sm text-emerald-300"
        >
          ◆
        </div>
        <div className="text-right text-[11px] font-mono uppercase tracking-[0.16em] text-gray-500">
          © 2025 Varnit Sahu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

