import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import LayoutWrapper from "@/components/LayoutWrapper";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Tom Whittle",
  description: "Tom's Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} antialiased`}>
        <NavBar />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
