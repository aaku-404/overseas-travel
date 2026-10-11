
import type { ReactNode } from "react";
import Header from "@/components/layout/Header";

type WebsiteLayoutProps = {
  children: ReactNode;
};

export default function WebsiteLayout({
  children,
}: WebsiteLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
