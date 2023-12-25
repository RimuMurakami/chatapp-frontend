"use client";

import { MessageProvider } from "../contexts/message-context";
import { ChannelProvider } from "../contexts/channel-context";
import { UserProvider } from "../contexts/user-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <MessageProvider>
        <ChannelProvider>{children}</ChannelProvider>
      </MessageProvider>
    </UserProvider>
  );
}
