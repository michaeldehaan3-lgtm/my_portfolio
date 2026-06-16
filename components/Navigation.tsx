"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/architecture", label: "Design" },
  { href: "/photography", label: "Photo" },
  { href: "/info", label: "Info" },
] as const;

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <button
        className="nav-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-expanded={mobileOpen}
        aria-label="Toggle menu"
      >
        {mobileOpen ? "Close" : "Menu"}
      </button>
      <nav className={`nav ${mobileOpen ? "nav--open" : ""}`}>
        <ul className="nav__list">
          {navItems.map(({ href, label }) => {
            const isActive =
              href === pathname ||
              (href !== "/info" && pathname.startsWith(href));
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav__link ${isActive ? "nav__link--active" : ""}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
