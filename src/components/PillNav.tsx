'use client';

import Link from "next/link";
import type { ReactNode } from "react";

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
  icon?: ReactNode;
};

type PillNavProps = {
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  pillColor?: string;
  pillTextColor?: string;
};

export function PillNav({
  items,
  activeHref,
  className = "",
  pillColor = "rgba(255,255,255,0.08)",
  pillTextColor = "#e6e9ee",
}: PillNavProps) {
  return (
    <nav
      className={`flex items-center gap-3 rounded-full bg-white/5 px-3 py-2 text-sm text-gray-200 backdrop-blur-sm ${className}`}
      aria-label="Primary navigation"
    >
      {items.map((item, idx) => {
        const isActive = activeHref === item.href;
        return (
          <Link
            key={`${item.href}-${item.label}-${idx}`}
            href={item.href}
            aria-label={item.ariaLabel || item.label}
            className="group inline-flex items-center gap-2 rounded-full px-4 py-2 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/60 focus-visible:ring-offset-[rgba(6,10,18,0.7)]"
            style={{
              backgroundColor: isActive ? "rgba(255,255,255,0.16)" : pillColor,
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            {item.icon ? (
              <span className="grid h-4 w-4 place-items-center transition-colors duration-150">
                {item.icon}
              </span>
            ) : null}
            <span
              className="tracking-[0.04em] transition-colors duration-150"
              style={{
                color: pillTextColor,
              }}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

export default PillNav;
