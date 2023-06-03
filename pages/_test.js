import Home from "@/components/ui/Home";
import Head from "next/head";

export default function TestPages() {
  return (
    <>
      <Head>
        <title>KasperPass</title>
        <meta
          name="description"
          content="Next PWA example using next-pwa and app directory"
        />
      </Head>
      <Home title="Pages" />
    </>
  );
}
