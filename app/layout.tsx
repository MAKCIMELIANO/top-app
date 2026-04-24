import type { Metadata } from "next";
import {Noto_Sans} from "next/font/google";
import "../styles/globals.css";
import styles from "../styles/layout.module.css";
import {Header, Footer, Sidebar} from "@/components";

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
<html lang="ru">
      <body className={notoSans.className}>
        <div className={styles.wrapper}>
          <Header className={styles.header} />
          <Sidebar className={styles.sidebar} />
          <main className={styles.body}>
            {children}
          </main>
          <Footer className={styles.footer} />
        </div>
      </body>
    </html>
  );
}
