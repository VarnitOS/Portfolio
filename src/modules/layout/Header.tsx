"use client";

import BubbleMenu from "@/components/BubbleMenu";
import FuzzyText from "@/components/FuzzyText";
import Link from "next/link";

type SuitNav = {
  label: string;
  color: string;
};

const SUIT_NAV: SuitNav[] = [
  { label: "Projects", color: "#7dd3fc" },
  { label: "Blog", color: "#f472b6" },
  { label: "Trading", color: "#5eead4" },
  { label: "Research", color: "#86efac" },
];

const SOCIAL = [
  {
    label: "GitHub",
    href: "https://github.com/VarnitOS",
    color: "#e5e7eb",
    Icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/varnitsahu",
    color: "#60a5fa",
    Icon: LinkedInIcon,
  },
  {
    label: "Email",
    href: "mailto:vsahu@uwaterloo.com",
    color: "#fbbf24",
    Icon: MailIcon,
  },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 w-screen bg-transparent" data-layer="header">
      <div className="flex w-full items-center justify-start gap-4 px-6 py-4">
        <div className="flex flex-none items-end gap-2 leading-tight" data-signature-container>
          <Link href="/" className="inline-flex items-baseline gap-0" data-signature>
            <span className="text-6xl sm:text-7xl font-['Brush_Script_MT',cursive] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#f8fbff] via-[#eef3ff] to-[#e4faff]">
              Varnit Sahu
            </span>
            <span className="align-bottom ml-0" data-domain-text>
              <FuzzyText
                fontSize={29}
                fontWeight={800}
                color="#f7fbff"
                enableHover={true}
                baseIntensity={0.13}
                hoverIntensity={0.5}
                fontFamily="signature"
              >
                .com
              </FuzzyText>
            </span>
          </Link>
        </div>

        <div className="flex flex-1 min-w-0 items-center justify-start px-2">
          <BubbleMenu
            menuBg="rgba(23,25,32,0.9)"
            menuContentColor="#e6e9ee"
            useFixedPosition={false}
            items={SUIT_NAV.map((item) => ({
              label: item.label,
              href: "#",
              ariaLabel: item.label,
              rotation: 0,
              hoverStyles: { bgColor: item.color, textColor: "#0f1116" },
            }))}
            className="relative pointer-events-auto"
          />
        </div>
        <div className="z-10 flex items-center justify-center">
</div>
        <nav aria-label="Social links" className="flex flex-none items-center gap-4 ml-auto">
          <div
            className="flex h-6 w-5 items-center justify-center text-[#f59e0b] animate-[joker-wiggle_2.4s_ease-in-out_infinite]"
            aria-hidden
          >
            <JokerIcon />
          </div>
          {SOCIAL.map(({ label, href, Icon, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-6 w-6 items-center justify-center transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9ca3af] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(6,10,18,0.7)]"
              style={{ color }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <Icon />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function JokerIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 7h6" />
      <path d="M9 17h6" />
      <path d="M9 10.5c1.1.6 1.7.6 2.5 0 .8-.6 1.4-.6 2.5 0" />
      <circle cx="10" cy="13.5" r=".65" />
      <circle cx="14" cy="13.5" r=".65" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-4 1.2-4-2-6-2m12 4v-3.5a3.5 3.5 0 0 0-.98-2.6c3.28-.36 6.72-1.61 6.72-7A5.44 5.44 0 0 0 18 4.77 5.07 5.07 0 0 0 17.91 1S16.73.64 14 2.48a13.38 13.38 0 0 0-5 0C6.27.64 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.26 8.9c0 5.34 3.44 6.64 6.72 7A3.5 3.5 0 0 0 9 19.5V23" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
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
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6h16c1 0 1.5.5 1.5 1.5v9c0 1-.5 1.5-1.5 1.5H4c-1 0-1.5-.5-1.5-1.5v-9C2.5 6.5 3 6 4 6Z" />
      <path d="m4 8 8 5 8-5" />
    </svg>
  );
}

