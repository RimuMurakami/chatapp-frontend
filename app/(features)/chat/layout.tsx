import { MessageProvider } from "./contexts/message-context";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <MessageProvider>{children}</MessageProvider>;
}
