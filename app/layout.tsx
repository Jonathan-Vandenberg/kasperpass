import Nav from "@/components/ui/nav";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  manifest: "/manifest.json",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
