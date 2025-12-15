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
      className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-surface/95 backdrop-blur-sm"
      data-layer="header"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-start gap-8 px-6 py-4">
        <div
          className="flex flex-col gap-1"
          aria-label="Site identity"
          data-signature-container
        >
          <Link
            href="/"
            className="inline-flex items-baseline gap-2 rounded-sm px-2 py-1"
            data-signature
          >
            <span className="text-2xl font-semibold italic tracking-tight text-white">
              Varnit
            </span>
            <span
              className="text-sm font-mono uppercase tracking-[0.18em] text-emerald-300"
              data-domain-text
            >
              .com
            </span>
          </Link>
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-gray-400">
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
              className="relative flex h-20 w-28 flex-col justify-between rounded-[6px] border border-white/12 bg-surface-muted/90 px-3 py-2 text-left shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
            >
              <span className="absolute inset-x-2 -top-[2px] h-[3px] bg-gradient-to-r from-white/14 via-transparent to-white/14" />
              <span className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-gray-300">
                <span className="text-lg leading-none text-white">{item.symbol}</span>
                <span className="text-[10px] text-gray-600">cli</span>
              </span>
              <span className="text-sm font-semibold text-white">{item.label}</span>
              <span className="flex gap-1 text-[10px] font-mono uppercase tracking-[0.18em] text-emerald-300">
                <span className="h-[1px] flex-1 bg-emerald-400/50" />
                <span className="h-[1px] flex-1 bg-emerald-400/50" />
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
              className="flex items-center gap-2 rounded-sm px-2 py-1 font-mono text-xs uppercase tracking-[0.16em] text-gray-300"
            >
              <span className="text-[10px] text-emerald-300">[]</span>
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

