import { Home } from "lucide-react";
import Script from "next/script";

export const metadata = {
  title: "Next PWA",
  description: "Next PWA example using next-pwa and app directory",
};

export default function Page() {
  return (
    <main title="App" className="max-h-screen">
      <Script src="/register-sw.js" async />
      <Home />
    </main>
  );
}
