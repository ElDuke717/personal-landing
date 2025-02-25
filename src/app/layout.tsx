import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

// This is the layout file that wraps all pages.

export const metadata: Metadata = {
  title: "Nick Huemmer",
  description: "Nick Huemmer is a software engineer.",
};

// Children is the content of the page. They must be added to the layout.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-superior-serif">
        <h1 className="font-bold text-2xl md:text-4xl mx-[75px] mt-[75px]">
          <a href="/" className="text-gray-900">Nick Huemmer</a>
        </h1>
        <div className="flex justify-start items-center ml-[75px] my-8 text-xl">
          <a
            className="cursor-pointer hover:underline hover:text-[#FFFF00] transition duration-1000 mr-6"
            href="/"
          >
            About
          </a>
          <a
            className="ml-4 cursor-pointer hover:underline hover:text-[#FFFF00] transition duration-1000"
            href="/experience"
          >
            Skills and Experience
          </a>
        </div>
        <div>{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
