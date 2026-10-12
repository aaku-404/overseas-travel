
import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
      <Footer />
    </>
  );
}
