"use client";

import { MessageProvider } from "../contexts/message-context";
import { ChannelProvider } from "../contexts/channel-context";
import { UserProvider } from "../contexts/user-context";
import { ChatProvider } from "../contexts/chat-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChatProvider>
      <UserProvider>
        <ChannelProvider>
          <MessageProvider>{children}</MessageProvider>
        </ChannelProvider>
      </UserProvider>
    </ChatProvider>
  );
}
