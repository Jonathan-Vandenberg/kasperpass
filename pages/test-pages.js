import Home from "@/components/ui/home.js";
import Head from "next/head";

export default function TestPages() {
  return (
    <>
      <Head>
        <title>KasperPass</title>
        <meta name="description" content="Your Decentralised Connection" />
      </Head>
      <Home title="Pages" />
    </>
  );
}
