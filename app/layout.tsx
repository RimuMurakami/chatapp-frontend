import { Providers } from "./providers/providers";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Chat App",
    default: "Chat App",
  },
  description: "this is chat app",
  robots: "noindex",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" data-theme="light">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
