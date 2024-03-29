import Chat from "./chat";
import { Providers } from "./providers/providers";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Providers>
        <Chat />
        {children}
      </Providers>
    </>
  );
}
