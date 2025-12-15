import Link from "next/link";

const navItems = [
  { suit: "spades", label: "Projects", symbol: "♠" },
  { suit: "hearts", label: "Blog", symbol: "♥" },
  { suit: "diamonds", label: "Trading", symbol: "♦" },
  { suit: "clubs", label: "Research", symbol: "♣" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/varnitsahu" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/varnitsahu" },
  { label: "Email", href: "mailto:hello@varnitsahu.com" },
];

export function Header() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-30 bg-gradient-to-b from-[rgba(11,13,24,0.9)] via-[rgba(11,13,24,0.75)] to-transparent"
      data-layer="header"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-start gap-8 px-6 py-5">
        <div
          className="flex flex-col gap-1"
          aria-label="Site identity"
          data-signature-container
        >
          <Link
            href="/"
            className="inline-flex items-baseline gap-3 rounded-sm px-2 py-1"
            data-signature
          >
            <span className="text-3xl font-['Brush_Script_MT',cursive] tracking-tight text-transparent bg-gradient-to-r from-[#ff9de4] via-[#ffd6ff] to-[#7cf5f5] drop-shadow-[0_0_10px_rgba(255,143,225,0.35)]">
              Varnit
            </span>
            <span
              className="text-sm font-mono uppercase tracking-[0.22em] text-[var(--text-primary)]"
              data-domain-text
            >
              .com
            </span>
          </Link>
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--text-secondary)]">
            systems engineer / creative technologist
          </p>
        </div>

        <nav
          aria-label="Primary navigation"
          className="flex items-center justify-center gap-3"
          data-nav-cards
        >
          {navItems.map((item) => (
            <button
              key={item.suit}
              type="button"
              data-suit={item.suit}
              className="relative flex h-24 w-32 flex-col justify-between rounded-xl border border-white/20 bg-[var(--card-bg)]/95 px-4 py-3 text-left shadow-[0_8px_24px_rgba(0,0,0,0.35)] ring-1 ring-white/10"
            >
              <span className="absolute inset-x-2 -top-[2px] h-[3px] bg-gradient-to-r from-[#ff9bf2]/45 via-transparent to-[#6bf0ff]/45" />
              <span className="absolute inset-0 rounded-xl border border-white/10" />
              <span className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                <span className="text-lg leading-none text-[var(--text-primary)] drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                  {item.symbol}
                </span>
                <span className="text-[10px] text-[#7cf5f5]">cli</span>
              </span>
              <span className="text-lg font-semibold text-[var(--text-primary)]">
                {item.label}
              </span>
              <span className="flex gap-1 text-[10px] font-mono uppercase tracking-[0.2em] text-[#6bf0ff]">
                <span className="h-[1px] flex-1 bg-[#6bf0ff]/50" />
                <span className="h-[1px] flex-1 bg-[#6bf0ff]/50" />
              </span>
              <CornerDecor />
            </button>
          ))}
        </nav>

        <nav
          aria-label="Social links"
          className="flex flex-col items-end gap-2 text-right"
          data-social-panel
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-sm px-2 py-1 font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-secondary)]"
            >
              <span className="text-[10px] text-[#7cf5f5]">[ ]</span>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function CornerDecor() {
  const corners = [
    "left-1 top-1",
    "right-1 top-1",
    "left-1 bottom-1",
    "right-1 bottom-1",
  ];

  return (
    <>
      {corners.map((pos) => (
        <span
          key={pos}
          className={`absolute ${pos} h-2 w-2 rounded-sm border border-emerald-300/40`}
          aria-hidden="true"
        />
      ))}
    </>
  );
}

