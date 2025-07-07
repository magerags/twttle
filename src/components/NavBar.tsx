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
    <header className="fixed top-0 left-0 z-50 h-full">
      <nav className="flex flex-col items-start p-8 h-full">
        <Link href="/" className="text-xl font-medium text-stone-800 mb-8">
          TWTTLE
        </Link>
        <ul className="flex flex-col items-start gap-y-6">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-light transition-colors ${
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
