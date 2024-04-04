import type { Metadata } from "next";
import Link from "next/link";

import AuthCard from "@/app/(features)/(auth)/AuthCard";
import ApplicationLogo from "./components/ApplicationLogo";

export const metadata: Metadata = {
  title: "Login",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <AuthCard
          logo={
            <Link href="/">
              <ApplicationLogo />
            </Link>
          }
        >
          {children}
        </AuthCard>
      </div>
    </div>
  );
}
