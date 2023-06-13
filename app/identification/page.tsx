"use client";

import QrScanner from "@/components/ui/QrScanner";
import Container from "@/components/ui/container";
import MediaDevices from "@/components/ui/MediaDevices";
import Result from "@zxing/library/esm/core/Result";

import { useState } from "react";
import GenerateQRCode from "../utilities/generateQRCode";

export default function Page() {
  const [data, setData] = useState<Result>();
  const [decode, setDecode] = useState({ name: "", age: "", id: "" });

  return (
    <div className="h-full w-full">
      <QrScanner
        onResult={(result) => {
          setData(result);
        }}
        onDecode={(decode) => {
          const userInfo = JSON.parse(decode);
          setDecode(userInfo);
        }}
        onError={(error) => {
          console.log("onError" + error?.message);
        }}
      />
      <Container className="max-w-screen">
        <>
          <MediaDevices />
          <p>{decode.name}</p>
          <p>{decode.age}</p>
          <p>{decode.id}</p>
        </>
      </Container>
      <GenerateQRCode />
    </div>
  );
}
