import { MessageProvider } from "./contexts/message-context";
import { ChannelProvider } from "./contexts/channel-context";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MessageProvider>
      <ChannelProvider>{children}</ChannelProvider>
    </MessageProvider>
  );
}
