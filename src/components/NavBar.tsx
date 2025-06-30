"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/writings", label: "writings" },
  { href: "/profile", label: "profile" },
  { href: "/work", label: "work" },
  { href: "/apps", label: "apps" },
];

export function NavBar() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-24 items-center justify-center">
          <nav className="rounded-full bg-white/50 px-12 py-2 shadow-sm ring-1 ring-gray-200 backdrop-blur-lg backdrop-filter">
            <ul className="flex items-center gap-x-8">
              {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-lg font-light transition-colors ${
                        isActive ? "text-gray-900 font-medium" : "text-gray-600"
                      } hover:text-gray-900`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
