import { Providers } from "./providers/providers";
import ChatGrid from "./components/chat-grid";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Providers>
        <ChatGrid>{children}</ChatGrid>
      </Providers>
    </>
  );
}
