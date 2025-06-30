"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return <div className={!isHomePage ? "pt-24" : ""}>{children}</div>;
}
