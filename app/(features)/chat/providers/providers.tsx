"use client";

import { MessageProvider } from "../contexts/message-context";
import { ChannelProvider } from "../contexts/channel-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MessageProvider>
      <ChannelProvider>{children}</ChannelProvider>
    </MessageProvider>
  );
}
