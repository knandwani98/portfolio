import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import { Backdrop } from "@/components/Backdrop";
import { poppins } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Kushal Nandwani",
  description: "My Portfolio",
  icons: {
    icon: "./logo-black.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.className)}>
        <Header />
        <Backdrop />
        {children}
      </body>
    </html>
  );
}
