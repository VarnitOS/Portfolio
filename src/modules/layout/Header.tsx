"use client";

import type { SVGProps } from "react";
import FuzzyText from "@/components/FuzzyText";
import Link from "next/link";
import PillNav from "@/components/PillNav";

type SuitNav = {
  suit: "spade" | "heart" | "diamond" | "club";
  label: string;
  color: string;
};

const SUIT_NAV: SuitNav[] = [
  { suit: "spade", label: "Projects", color: "#7dd3fc" }, // cool cyan
  { suit: "heart", label: "Blog", color: "#f472b6" }, // warm pink/red
  { suit: "diamond", label: "Trading", color: "#5eead4" }, // electric teal
  { suit: "club", label: "Research", color: "#86efac" }, // soft mint
];

const SOCIAL = [
  {
    label: "GitHub",
    href: "https://github.com/VarnitOS",
    Icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/varnitsahu",
    Icon: LinkedInIcon,
  },
  {
    label: "Email",
    href: "mailto:vsahu@uwaterloo.com",
    Icon: MailIcon,
  },
];

export function Header() {
  return (
    <header
      className="pointer-events-none fixed inset-x-0 top-0 z-30 w-screen"
      data-layer="header"
    >
      <div className="pointer-events-auto grid w-full grid-cols-[auto_1fr_auto] items-center gap-12 px-[5vw] py-12">
        <div className="flex items-end gap-3 justify-start leading-tight" data-signature-container>
          <Link
            href="/"
            className="inline-flex items-baseline gap-3"
            data-signature
          >
            <span className="text-7xl sm:text-8xl font-['Brush_Script_MT',cursive] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#f8fbff] via-[#eef3ff] to-[#e4faff]">
              Varnit
            </span>
            <span className="text-5xl sm:text-6xl font-['Brush_Script_MT',cursive] tracking-tight text-[#eef2f6]">
              Sahu
            </span>
            <span className="align-bottom ml-1" data-domain-text>
              <FuzzyText
                fontSize={24}
                fontWeight={800}
                color="#f7fbff"
                enableHover={false}
                baseIntensity={0.12}
              >
                .com
              </FuzzyText>
            </span>
          </Link>
        </div>

        <div className="flex items-center justify-center">
          <PillNav
            className="text-sm"
            items={SUIT_NAV.map((item) => ({
              label: item.label,
              href: "#",
              ariaLabel: item.label,
              icon: <SuitIcon suit={item.suit} color={item.color} />,
            }))}
          />
        </div>

        <nav
          aria-label="Social links"
          className="flex items-center justify-end gap-5"
          data-social-panel
        >
          <div
            className="flex h-6 w-5 items-center justify-center text-[#f59e0b] animate-[joker-wiggle_2.4s_ease-in-out_infinite]"
            aria-hidden
          >
            <JokerIcon />
          </div>
          {SOCIAL.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-6 w-6 items-center justify-center transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9ca3af] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(6,10,18,0.7)]"
              style={{
                color:
                  label === "GitHub"
                    ? "#e5e7eb"
                    : label === "LinkedIn"
                      ? "#60a5fa"
                      : "#fbbf24",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <Icon />
            </a>
          ))}
        </nav>
      </div>
      <style jsx>{`
        @keyframes joker-wiggle {
          0%,
          100% {
            transform: translateY(0);
          }
          25% {
            transform: translateY(-1px) rotate(-1deg);
          }
          50% {
            transform: translateY(1px) rotate(1deg);
          }
          75% {
            transform: translateY(-0.5px) rotate(-0.5deg);
          }
        }
      `}</style>
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

function SuitIcon({ suit, color }: { suit: SuitNav["suit"]; color: string }) {
  const stroke = color;

  const commonProps: SVGProps<SVGPathElement> = {
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
      className="h-4 w-4"
    >
      <path d={path} {...commonProps} />
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

