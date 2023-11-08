import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Practice Champ",
  description:
    "A deliberate practice tool for musicians, or anyone who wants to improve any skill.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`bg-slate-800 ${inter.className}`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
