export function Footer() {
  return (
    <footer
      className="fixed inset-x-0 bottom-0 z-20 border-t border-white/10 bg-[var(--footer-bg)]/95"
      data-layer="footer"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--text-secondary)]">
        <div
          aria-label="System status"
          className="flex items-center gap-2"
        >
          <span>SYSTEM: IDLE</span>
          <span className="text-[var(--text-muted)]">•</span>
          <span>DECK: AWAITING INPUT</span>
          <span className="text-[var(--text-muted)]">•</span>
          <span>TABLE: OFFLINE</span>
        </div>
        <div
          aria-hidden="true"
          className="flex items-center justify-center text-sm text-[#d970ff]"
        >
          ◆
        </div>
        <div className="text-right text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--text-secondary)]">
          © 2025 Varnit Sahu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

