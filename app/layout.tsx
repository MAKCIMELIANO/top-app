import type { Metadata } from "next";
import {Noto_Sans} from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ['cyrillic', 'latin'],
  weight: ['300', '400', '500', '700'], 
  display: 'swap',
});

export const metadata: Metadata = {
  title: "My App",
  description: "My Next.js application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.className}`}>{children}</body>
    </html>
  );
}
