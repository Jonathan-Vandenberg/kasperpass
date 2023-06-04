import Nav from "@/components/ui/nav";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  manifest: "/manifest.json",
  themeColor: "#ffffff",
  title: "KasperPass",
  visualViewport: "width=device-width; initial-scale=1; viewport-fit=cover",
  mobileWebCapable: "yes",
  appleMobileWebCapable: "yes",
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
