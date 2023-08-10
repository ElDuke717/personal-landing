import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// This is the layout file that wraps all pages.

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nick Huemmer",
  description: "Nick Huemmer is a software engineer.",
};
// Children is the content of the page. They must added to the layout.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1 className="font-bold text-4xl mx-5 my-8">Nick Huemmer</h1>
        <div className="flex justify-end items-center mx-5 my-8">
          <a className="cursor-default" href="/">
            Nick Huemmer
          </a>
          <a className="ml-4" href="/software">
            software
          </a>
          <a className="ml-4" href="/experience">
            experience
          </a>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
