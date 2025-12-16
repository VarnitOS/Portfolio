import FuzzyText from "@/components/FuzzyText";
import Link from "next/link";

type SuitNav = {
  suit: "spade" | "heart" | "diamond" | "club";
  label: string;
  color: string;
};

const SUIT_NAV: SuitNav[] = [
  { suit: "spade", label: "Projects", color: "#7cf5f5" },
  { suit: "heart", label: "Blog", color: "#ff79c6" },
  { suit: "diamond", label: "Trading", color: "#8be9fd" },
  { suit: "club", label: "Research", color: "#a996ff" },
];

const SOCIAL = [
  {
    label: "GitHub",
    href: "https://github.com/varnitsahu",
    Icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/varnitsahu",
    Icon: LinkedInIcon,
  },
  {
    label: "Email",
    href: "mailto:hello@varnitsahu.com",
    Icon: MailIcon,
  },
];

export function Header() {
  return (
    <header
      className="pointer-events-none fixed inset-x-0 top-0 z-30"
      data-layer="header"
    >
      <div className="pointer-events-auto mx-auto grid w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-10 px-8 py-8">
        <div className="flex items-end gap-4" data-signature-container>
          <Link
            href="/"
            className="inline-flex items-baseline gap-3"
            data-signature
          >
            <span className="text-5xl sm:text-6xl font-['Brush_Script_MT',cursive] tracking-tight text-transparent bg-gradient-to-r from-[#ffd3f7] via-[#ffeefe] to-[#a6fbfb] drop-shadow-[0_0_12px_rgba(255,233,255,0.25)]">
              Varnit
            </span>
            <span className="align-bottom" data-domain-text>
              <FuzzyText
                fontSize={18}
                fontWeight={700}
                color="#7cf5f5"
                enableHover={false}
                baseIntensity={0.06}
              >
                .com
              </FuzzyText>
            </span>
          </Link>
        </div>

        <nav
          aria-label="Primary navigation"
          className="flex items-center justify-center gap-10"
          data-nav-suits
        >
          {SUIT_NAV.map((item) => (
            <button
              key={item.suit}
              type="button"
              data-suit={item.suit}
              aria-label={item.label}
              className="group relative h-14 w-14 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7cf5f5]/60 focus-visible:ring-offset-[rgba(6,10,18,0.7)]"
            >
              <SuitIcon suit={item.suit} color={item.color} label={item.label} />
            </button>
          ))}
        </nav>

        <nav
          aria-label="Social links"
          className="flex items-center justify-end gap-5"
          data-social-panel
        >
          {SOCIAL.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-7 w-7 items-center justify-center text-[var(--text-secondary)] transition-colors hover:text-[#7cf5f5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7cf5f5]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(6,10,18,0.7)]"
            >
              <Icon />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function SuitIcon({
  suit,
  color,
  label,
}: {
  suit: SuitNav["suit"];
  color: string;
  label: string;
}) {
  const stroke = color;
  const textFill = "#eaf8ff";

  const commonProps = {
    stroke,
    strokeWidth: 1.6,
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const path = {
    spade:
      "M12 3c4.5 4.2 6.8 7 6.8 9.2 0 2-1.4 3.5-3.4 3.5-0.8 0-1.6-0.2-2.2-0.7v1.6h1.5v1.4H9.3v-1.4h1.5V15c-0.6 0.5-1.4 0.7-2.2 0.7-2 0-3.4-1.5-3.4-3.5C5.2 10 7.5 7.2 12 3Z",
    heart:
      "M12 20s-7-4.3-7-9.5C5 7.5 6.9 6 8.9 6c1.3 0 2.4 0.6 3.1 1.6C12.8 6.6 13.9 6 15.1 6 17.1 6 19 7.5 19 10.5 19 15.7 12 20 12 20Z",
    diamond: "M12 3 20 12 12 21 4 12 12 3Z",
    club: "M9 10c0-1.7 1.3-3 3-3s3 1.3 3 3c0 0.3 0 0.5-0.1 0.8 0.5-0.5 1.2-0.8 2-0.8 1.7 0 3 1.3 3 3s-1.3 3-3 3c-0.5 0-1-0.1-1.4-0.4 0.2 0.4 0.4 0.9 0.4 1.4 0 1.7-1.3 3-3 3s-3-1.3-3-3c0-0.5 0.1-1 0.4-1.4-0.4 0.3-0.9 0.4-1.4 0.4-1.7 0-3-1.3-3-3s1.3-3 3-3c0.8 0 1.5 0.3 2 0.8C9 10.5 9 10.3 9 10Z",
  }[suit];

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-14 w-14"
      style={{
        filter: `drop-shadow(0 0 8px ${stroke}55)`,
      }}
    >
      <path d={path} {...commonProps} />
      <text
        x="12"
        y="12.6"
        fill={textFill}
        fontSize="4"
        fontFamily="var(--font-geist-mono, 'IBM Plex Mono', monospace)"
        textAnchor="middle"
        dominantBaseline="middle"
        letterSpacing="0.06em"
      >
        {label}
      </text>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ filter: "drop-shadow(0 0 8px rgba(124,245,245,0.25))" }}
    >
      <path d="M9 19c-4 1.2-4-2-6-2m12 4v-3.5a3.5 3.5 0 0 0-.98-2.6c3.28-.36 6.72-1.61 6.72-7A5.44 5.44 0 0 0 18 4.77 5.07 5.07 0 0 0 17.91 1S16.73.64 14 2.48a13.38 13.38 0 0 0-5 0C6.27.64 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.26 8.9c0 5.34 3.44 6.64 6.72 7A3.5 3.5 0 0 0 9 19.5V23" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ filter: "drop-shadow(0 0 8px rgba(124,245,245,0.25))" }}
    >
      <path d="M6.5 9.5V18" />
      <path d="M6.5 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
      <path d="M10.5 18v-5.3c0-1.6 1-2.7 2.6-2.7 1.5 0 2.4.9 2.4 2.7V18" />
      <path d="M10.5 12.7c.4-.8 1.3-1.3 2.4-1.3 1.5 0 2.6 1 2.6 2.7V18" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ filter: "drop-shadow(0 0 8px rgba(124,245,245,0.25))" }}
    >
      <path d="M4 6h16c1 0 1.5.5 1.5 1.5v9c0 1-.5 1.5-1.5 1.5H4c-1 0-1.5-.5-1.5-1.5v-9C2.5 6.5 3 6 4 6Z" />
      <path d="m4 8 8 5 8-5" />
    </svg>
  );
}

