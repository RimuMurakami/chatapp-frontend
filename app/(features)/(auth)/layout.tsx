import type { Metadata } from "next";
import Link from "next/link";

import AuthCard from "@/app/(features)/(auth)/AuthCard";
import ApplicationLogo from "@/app/(features)/(auth)/components/ApplicationLogo";
import { Box } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Login",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="font-sans text-gray-900 antialiased">
        <AuthCard
          logo={
            <Link href="/">
              <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
            </Link>
          }
        >
          {children}
        </AuthCard>
      </div>
    </div>
  );
}
