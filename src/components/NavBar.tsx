"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/writings", label: "Writings" },
  { href: "/profile", label: "Profile" },
  { href: "/work", label: "Work" },
  { href: "/apps", label: "Apps" },
];

export function NavBar() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 z-50 h-auto w-full backdrop-blur-lg md:h-full md:w-auto md:border-b-0 md:bg-transparent">
      <nav className="flex h-full flex-row items-center justify-between p-4 md:flex-col md:items-start md:justify-start md:p-8">
        <Link
          href="/"
          className="hidden md:block md:text-xl font-bold font-lexend text-stone-800 md:mb-8"
        >
          TWTTLE
        </Link>
        <ul className="flex w-full flex-row justify-center gap-x-6 md:flex-col md:gap-y-6">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-light font-lexend transition-colors ${
                    isActive ? "text-stone-900" : "text-stone-400"
                  } hover:text-stone-900`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
