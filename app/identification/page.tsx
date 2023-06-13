"use client";

import QrScanner from "@/components/ui/QrScanner";
import Container from "@/components/ui/container";
import MediaDevices from "@/components/ui/MediaDevices";

import { useState } from "react";
import GenerateQRCode from "../utilities/generateQRCode";

export default function Page() {
  const [result, setResult] = useState("");
  const [decode, setDecode] = useState("");
  return (
    <div className="h-full w-full">
      <QrScanner
        onResult={(result) => {
          const data = JSON.stringify(result);
          setResult(data);
          console.log("onResult" + result);
        }}
        onDecode={(decode) => {
          const data = JSON.stringify(result);
          setDecode(data);
          console.log("onDecode" + decode);
        }}
        onError={(error) => {
          console.log("onError" + error?.message);
        }}
      />
      <Container className="max-w-screen">
        <>
          <MediaDevices />
          <p>{result}</p>
          <p>{decode}</p>
        </>
      </Container>
      <GenerateQRCode />
    </div>
  );
}
